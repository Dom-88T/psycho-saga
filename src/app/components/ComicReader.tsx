import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Bookmark, X, Lightbulb } from "lucide-react";

const chapters = {
  "roman-empire": {
    title: "The Fall of Rome",
    panels: [
      {
        image: "linear-gradient(135deg, #8B0000 0%, #DC143C 100%)",
        text: "476 AD. The eternal city trembles...",
        narration: "The Roman Empire, once the greatest civilization known to mankind, stood at the edge of collapse.",
        fact: "Rome was sacked multiple times in its final century, marking the end of ancient dominance.",
      },
      {
        image: "linear-gradient(135deg, #4A0000 0%, #8B0000 100%)",
        text: "Barbarians at the gates. Corruption within.",
        narration: "Political instability, economic troubles, and military failures plagued the empire.",
        fact: "The last Roman Emperor, Romulus Augustulus, was only 16 years old when deposed.",
      },
      {
        image: "linear-gradient(135deg, #2C0000 0%, #4A0000 100%)",
        text: "The Western Empire falls. An era ends.",
        narration: "On September 4th, 476 AD, the Western Roman Empire officially ceased to exist.",
        fact: "The Eastern Roman Empire (Byzantine Empire) continued for another 1000 years.",
      },
    ],
  },
  "dark-psychology": {
    title: "The Puppet Master",
    panels: [
      {
        image: "linear-gradient(135deg, #1a0033 0%, #330066 100%)",
        text: "Your mind is not entirely your own...",
        narration: "Every decision you make is influenced by hidden psychological patterns.",
        fact: "Studies show 95% of our decisions are made subconsciously.",
      },
      {
        image: "linear-gradient(135deg, #0d001a 0%, #1a0033 100%)",
        text: "Manipulation techniques used daily.",
        narration: "From advertising to politics, dark psychology shapes our world.",
        fact: "The 'foot-in-the-door' technique increases compliance by 50%.",
      },
    ],
  },
};

export default function ComicReader() {
  const { courseId = "roman-empire", chapterId = "1" } = useParams();
  const navigate = useNavigate();
  const [currentPanel, setCurrentPanel] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [showFact, setShowFact] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const chapter = chapters[courseId as keyof typeof chapters] || chapters["roman-empire"];
  const totalPanels = chapter.panels.length;

  useEffect(() => {
    setCurrentPanel(0);
  }, [courseId, chapterId]);

  const nextPanel = () => {
    if (currentPanel < totalPanels - 1) {
      setCurrentPanel(currentPanel + 1);
      setShowFact(false);
    } else {
      navigate(`/quiz/${courseId}/${chapterId}`);
    }
  };

  const prevPanel = () => {
    if (currentPanel > 0) {
      setCurrentPanel(currentPanel - 1);
      setShowFact(false);
    }
  };

  const currentPanelData = chapter.panels[currentPanel];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-[#2E2E2E] px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => navigate("/home")}
            className="p-2 rounded-lg hover:bg-[#1A1A1A]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="text-center flex-1">
            <h1 className="font-bold text-sm text-[#D4AF37]">{chapter.title}</h1>
            <div className="text-xs text-[#2E2E2E]">
              Panel {currentPanel + 1} of {totalPanels}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className="p-2 rounded-lg hover:bg-[#1A1A1A]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {audioEnabled ? (
                <Volume2 className="w-5 h-5 text-[#00E5C8]" />
              ) : (
                <VolumeX className="w-5 h-5 text-[#2E2E2E]" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setBookmarked(!bookmarked)}
              className="p-2 rounded-lg hover:bg-[#1A1A1A]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bookmark
                className={`w-5 h-5 ${bookmarked ? "text-[#D4AF37] fill-[#D4AF37]" : "text-[#2E2E2E]"}`}
              />
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-1 bg-[#2E2E2E] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00E5C8] to-[#D4AF37]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentPanel + 1) / totalPanels) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Comic Panel */}
      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPanel}
            className="relative w-full max-w-2xl aspect-[9/16] sm:aspect-[16/9] rounded-2xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            transition={{ duration: 0.5 }}
          >
            {/* Panel Background */}
            <div
              className="absolute inset-0"
              style={{ background: currentPanelData.image }}
            />

            {/* Film Grain Effect */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
              }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
              {/* Panel Text (Speech Bubble Style) */}
              <motion.div
                className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 max-w-md"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-lg sm:text-xl font-bold leading-tight">
                  {currentPanelData.text}
                </div>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white/10 backdrop-blur-md rotate-45 border-r border-b border-white/20" />
              </motion.div>

              {/* Narration Box */}
              <motion.div
                className="relative bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-[#D4AF37]/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm sm:text-base text-[#D4AF37] italic">
                  "{currentPanelData.narration}"
                </p>
              </motion.div>
            </div>

            {/* Fact Button */}
            <motion.button
              onClick={() => setShowFact(true)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#00E5C8] flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(0, 229, 200, 0.4)',
                  '0 0 0 10px rgba(0, 229, 200, 0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Lightbulb className="w-6 h-6 text-[#0A0A0A]" />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="sticky bottom-0 bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-[#2E2E2E] px-4 py-4">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <motion.button
            onClick={prevPanel}
            disabled={currentPanel === 0}
            className="px-6 py-3 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] font-bold disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
            whileHover={currentPanel > 0 ? { scale: 1.05, borderColor: '#00E5C8' } : {}}
            whileTap={currentPanel > 0 ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </motion.button>

          <div className="flex gap-2">
            {Array.from({ length: totalPanels }).map((_, idx) => (
              <motion.div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentPanel ? 'bg-[#D4AF37] w-8' : 'bg-[#2E2E2E]'
                }`}
                layoutId={idx === currentPanel ? 'active-panel' : undefined}
              />
            ))}
          </div>

          <motion.button
            onClick={nextPanel}
            className="px-6 py-3 rounded-xl font-bold flex items-center gap-2"
            style={{
              background: currentPanel === totalPanels - 1
                ? 'linear-gradient(135deg, #D4AF37, #F2C94C)'
                : '#1A1A1A',
              color: currentPanel === totalPanels - 1 ? '#0A0A0A' : 'white',
              border: currentPanel === totalPanels - 1 ? 'none' : '1px solid #2E2E2E',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentPanel === totalPanels - 1 ? 'Take Quiz' : 'Next'}
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Fact Modal */}
      <AnimatePresence>
        {showFact && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setShowFact(false)}
            />

            <motion.div
              className="relative w-full max-w-md bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border-2 border-[#00E5C8] p-6"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <motion.button
                onClick={() => setShowFact(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#2E2E2E] flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#00E5C8] flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <h3 className="text-xl font-black text-[#00E5C8]">Did You Know?</h3>
              </div>

              <p className="text-base leading-relaxed">{currentPanelData.fact}</p>

              <motion.button
                onClick={() => setShowFact(false)}
                className="w-full mt-6 py-3 rounded-lg bg-[#00E5C8] text-[#0A0A0A] font-bold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Got it! 👍
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
