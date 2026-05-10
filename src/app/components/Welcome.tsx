import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Sparkles, Brain, Zap } from "lucide-react";

const floatingTexts = [
  "What if your mind is lying to you? 🧠",
  "How did Rome really fall? 🏛️",
  "Can thoughts change history? 💭",
  "What really happened on 9/11? 🌍",
  "Is the universe a simulation? 🌌",
  "Why do we dream? 😴",
  "Who controls the narrative? 📜",
  "What secrets lie in Ancient Egypt? 🔺",
  "Are we alone in the cosmos? 👽",
  "What drives human behavior? 🎭",
  "Can psychology be weaponized? ⚡",
  "What is consciousness? 🧬",
];

export default function Welcome() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] overflow-hidden flex items-center justify-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00E5C8 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating Questions */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingTexts.map((text, idx) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const duration = 20 + Math.random() * 20;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={idx}
              className="absolute text-xs sm:text-sm opacity-20 font-medium"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                color: idx % 2 === 0 ? '#00E5C8' : '#F2C94C',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 0.3, 0],
                y: [20, -100],
                x: [0, Math.sin(idx) * 30],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {text}
            </motion.div>
          );
        })}
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00E5C8] opacity-10 blur-[120px] rounded-full" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={mounted ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={mounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>
            <Brain className="w-10 h-10 text-[#00E5C8]" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 text-[#F2C94C]" />
            </motion.div>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-2"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F2C94C 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(212, 175, 55, 0.3)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.05em',
            }}
          >
            PSYCHO SAGA
          </h1>

          <motion.div
            className="h-1 w-64 mx-auto mb-4 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #00E5C8, transparent)',
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <p className="text-[#2E2E2E] text-base sm:text-lg tracking-wide font-medium">
            Master Your Mind • Understand The Past • Explore The Universe
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-8 mt-12"
          initial={{ y: 30, opacity: 0 }}
          animate={mounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {[
            { icon: "📚", label: "Epic Sagas" },
            { icon: "🎮", label: "Gamified" },
            { icon: "🎨", label: "Cinematic" },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg p-4 hover:border-[#00E5C8] transition-all duration-300">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-xs text-[#2E2E2E] font-medium">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          animate={mounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.button
            onClick={() => navigate("/home")}
            className="relative group px-10 py-5 rounded-xl font-bold text-lg overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #F2C94C)',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), inset 0 1px 1px rgba(255,255,255,0.3)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 text-[#0A0A0A] flex items-center gap-2">
              ✨ Start Your Journey
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>

          <motion.button
            onClick={() => navigate("/home")}
            className="px-10 py-5 rounded-xl font-bold text-lg border-2 border-[#00E5C8] text-[#00E5C8] hover:bg-[#00E5C8] hover:text-[#0A0A0A] transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 229, 200, 0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            🔐 Login
          </motion.button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          className="mt-16 text-[#2E2E2E] text-sm"
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex justify-center gap-8">
            <div>
              <div className="text-[#D4AF37] font-bold text-xl">50K+</div>
              <div>Learners</div>
            </div>
            <div>
              <div className="text-[#00E5C8] font-bold text-xl">5⭐</div>
              <div>Rating</div>
            </div>
            <div>
              <div className="text-[#F2C94C] font-bold text-xl">100+</div>
              <div>Sagas</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
