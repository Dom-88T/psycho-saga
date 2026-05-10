import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Check, X as XIcon, Flame, Zap, Trophy, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

const quizzes = {
  "roman-empire": [
    {
      question: "When did the Western Roman Empire officially fall?",
      options: ["476 AD", "410 AD", "500 AD", "395 AD"],
      correct: 0,
      explanation: "The Western Roman Empire fell in 476 AD when Romulus Augustulus was deposed by Odoacer.",
    },
    {
      question: "Who was the last Emperor of Western Rome?",
      options: ["Julius Caesar", "Constantine", "Romulus Augustulus", "Augustus"],
      correct: 2,
      explanation: "Romulus Augustulus was the last emperor of the Western Roman Empire at just 16 years old.",
    },
    {
      question: "What happened to the Eastern Roman Empire?",
      options: [
        "Fell at the same time",
        "Continued for 1000 more years",
        "Was conquered by Rome",
        "Never existed"
      ],
      correct: 1,
      explanation: "The Eastern Roman Empire (Byzantine Empire) continued until 1453 AD.",
    },
  ],
  "dark-psychology": [
    {
      question: "What percentage of our decisions are made subconsciously?",
      options: ["50%", "70%", "95%", "30%"],
      correct: 2,
      explanation: "Studies show that approximately 95% of our decisions are made by our subconscious mind.",
    },
    {
      question: "What is the 'foot-in-the-door' technique?",
      options: [
        "Breaking into homes",
        "Starting with small requests to get bigger compliance",
        "Blocking doorways",
        "Sales strategy for shoes"
      ],
      correct: 1,
      explanation: "This psychological technique starts with a small request to increase the likelihood of agreeing to a larger request later.",
    },
  ],
};

export default function Quiz() {
  const { courseId = "roman-empire", chapterId = "1" } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(3);
  const [xpGained, setXpGained] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = quizzes[courseId as keyof typeof quizzes] || quizzes["roman-empire"];
  const totalQuestions = questions.length;
  const currentQ = questions[currentQuestion];

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    const correct = index === currentQ.correct;
    setIsCorrect(correct);
    setShowExplanation(true);

    if (correct) {
      const baseXP = 50;
      const streakBonus = streak * 10;
      const totalXP = baseXP + streakBonus;
      setXpGained(totalXP);
      setScore(score + 1);
      setStreak(streak + 1);

      // Confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F2C94C', '#00E5C8'],
      });
    } else {
      setStreak(1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowExplanation(false);
      setXpGained(0);
    } else {
      setQuizComplete(true);
    }
  };

  useEffect(() => {
    if (quizComplete) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#F2C94C', '#00E5C8'],
      });
    }
  }, [quizComplete]);

  if (quizComplete) {
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F2C94C] flex items-center justify-center"
            animate={{
              rotate: 360,
              boxShadow: [
                '0 0 20px rgba(212, 175, 55, 0.3)',
                '0 0 60px rgba(212, 175, 55, 0.8)',
                '0 0 20px rgba(212, 175, 55, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Trophy className="w-16 h-16 text-[#0A0A0A]" />
          </motion.div>

          <h1 className="text-4xl font-black mb-4"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #F2C94C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Chapter Complete! 🎉
          </h1>

          <p className="text-2xl font-bold text-[#00E5C8] mb-8">
            {percentage}% Accuracy
          </p>

          <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-[#2E2E2E] mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0A0A0A] rounded-xl p-4">
                <div className="text-[#2E2E2E] text-sm mb-2">Score</div>
                <div className="text-3xl font-black text-[#D4AF37]">
                  {score}/{totalQuestions}
                </div>
              </div>
              <div className="bg-[#0A0A0A] rounded-xl p-4">
                <div className="text-[#2E2E2E] text-sm mb-2">XP Earned</div>
                <div className="text-3xl font-black text-[#00E5C8]">
                  +{score * 50}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <motion.button
              onClick={() => navigate("/home")}
              className="w-full py-4 rounded-xl font-bold text-lg text-[#0A0A0A]"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #F2C94C)',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue Your Journey ✨
            </motion.button>

            <motion.button
              onClick={() => navigate("/leaderboard")}
              className="w-full py-4 rounded-xl font-bold text-lg border-2 border-[#00E5C8] text-[#00E5C8]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Leaderboard 🏆
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] text-white flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-[#2E2E2E] px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="flex items-center gap-2 bg-[#1A1A1A] px-3 py-2 rounded-lg border border-[#FF4500]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Flame className="w-5 h-5 text-[#FF4500]" />
              <span className="font-bold text-[#FF4500]">{streak}x</span>
            </motion.div>

            <div className="flex items-center gap-2 bg-[#1A1A1A] px-3 py-2 rounded-lg border border-[#00E5C8]">
              <Zap className="w-5 h-5 text-[#00E5C8]" />
              <span className="font-bold text-[#00E5C8]">+{xpGained || 0}</span>
            </div>
          </div>

          <div className="text-sm font-bold text-[#2E2E2E]">
            {currentQuestion + 1} / {totalQuestions}
          </div>
        </div>

        <div className="h-2 bg-[#2E2E2E] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00E5C8] to-[#D4AF37]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Question Card */}
            <motion.div
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl p-8 border-2 border-[#D4AF37] mb-6 relative overflow-hidden"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.2)',
                  '0 0 40px rgba(212, 175, 55, 0.4)',
                  '0 0 20px rgba(212, 175, 55, 0.2)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute top-0 right-0 text-9xl opacity-5">🤔</div>
              <h2 className="text-2xl sm:text-3xl font-black leading-tight relative z-10">
                {currentQ.question}
              </h2>
            </motion.div>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === currentQ.correct;
                const showResult = selectedAnswer !== null;

                let borderColor = '#2E2E2E';
                let bgColor = '#1A1A1A';
                let icon = null;

                if (showResult) {
                  if (isSelected && isCorrect) {
                    borderColor = '#00E5C8';
                    bgColor = '#00E5C820';
                    icon = <Check className="w-6 h-6 text-[#00E5C8]" />;
                  } else if (isSelected && !isCorrect) {
                    borderColor = '#DC143C';
                    bgColor = '#DC143C20';
                    icon = <XIcon className="w-6 h-6 text-[#DC143C]" />;
                  } else if (isCorrectAnswer) {
                    borderColor = '#00E5C8';
                    bgColor = '#00E5C820';
                    icon = <Check className="w-6 h-6 text-[#00E5C8]" />;
                  }
                }

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className="w-full p-5 rounded-2xl border-2 font-bold text-left flex items-center justify-between transition-all disabled:cursor-default"
                    style={{
                      borderColor,
                      backgroundColor: bgColor,
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={
                      selectedAnswer === null
                        ? { scale: 1.02, borderColor: '#D4AF37' }
                        : {}
                    }
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  >
                    <span className="flex-1">{option}</span>
                    {icon && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                      >
                        {icon}
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <div
                    className={`rounded-2xl p-5 border-2 ${
                      isCorrect
                        ? 'bg-[#00E5C8]/10 border-[#00E5C8]'
                        : 'bg-[#DC143C]/10 border-[#DC143C]'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCorrect ? 'bg-[#00E5C8]' : 'bg-[#DC143C]'
                        }`}
                      >
                        {isCorrect ? (
                          <Check className="w-6 h-6 text-[#0A0A0A]" />
                        ) : (
                          <XIcon className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-black text-lg mb-1">
                          {isCorrect ? 'Correct! 🎉' : 'Not quite...'}
                        </h3>
                        <p className="text-sm leading-relaxed">{currentQ.explanation}</p>
                      </div>
                    </div>

                    {isCorrect && (
                      <div className="flex items-center gap-4 text-sm font-bold">
                        <div className="flex items-center gap-2 text-[#D4AF37]">
                          <Zap className="w-4 h-4" fill="#D4AF37" />
                          +{50 + (streak - 1) * 10} XP
                        </div>
                        <div className="flex items-center gap-2 text-[#FF4500]">
                          <Flame className="w-4 h-4" />
                          {streak}x Streak
                        </div>
                      </div>
                    )}
                  </div>

                  <motion.button
                    onClick={handleNext}
                    className="w-full mt-4 py-4 rounded-xl font-bold text-lg text-[#0A0A0A] flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37, #F2C94C)',
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentQuestion < totalQuestions - 1 ? (
                      <>
                        Next Question
                        <ArrowRight className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Complete Quiz
                        <Trophy className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
