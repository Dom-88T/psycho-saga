import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Flame, Trophy, Zap, Crown, Menu, User, BarChart3, Lock, Play } from "lucide-react";
import PremiumModal from "./PremiumModal";

const courses = [
  {
    id: "roman-empire",
    title: "🏛️ Roman Empire",
    description: "The rise and fall of the greatest civilization. Discover the secrets of power, betrayal, and glory.",
    image: "linear-gradient(135deg, #8B0000 0%, #FF4500 50%, #DC143C 100%)",
    progress: 45,
    chapters: 12,
    unlocked: 3,
    emoji: "⚔️",
  },
  {
    id: "dark-psychology",
    title: "🧠 Dark Psychology",
    description: "Master the hidden patterns of manipulation, influence, and the darker side of human nature.",
    image: "linear-gradient(135deg, #1a0033 0%, #330066 50%, #4d0099 100%)",
    progress: 23,
    chapters: 15,
    unlocked: 3,
    emoji: "🎭",
  },
  {
    id: "ancient-egypt",
    title: "🔺 Ancient Egypt",
    description: "Uncover the mysteries of pharaohs, pyramids, and cosmic knowledge lost to time.",
    image: "linear-gradient(135deg, #2C1810 0%, #8B6914 50%, #DAA520 100%)",
    progress: 67,
    chapters: 10,
    unlocked: 3,
    emoji: "👁️",
  },
  {
    id: "modern-history",
    title: "🌍 9/11 & Modern Era",
    description: "Understanding the pivotal moments that shaped our contemporary world.",
    image: "linear-gradient(135deg, #0A0A0A 0%, #2C3E50 50%, #34495E 100%)",
    progress: 0,
    chapters: 14,
    unlocked: 3,
    emoji: "🗽",
  },
  {
    id: "universe",
    title: "🌌 The Universe",
    description: "Journey through black holes, cosmic phenomena, and the infinite mysteries of space.",
    image: "linear-gradient(135deg, #000033 0%, #001a4d 30%, #003366 60%, #004d99 100%)",
    progress: 12,
    chapters: 20,
    unlocked: 3,
    emoji: "🚀",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [showPremium, setShowPremium] = useState(false);
  const [userData] = useState({
    name: "Alex",
    level: 12,
    xp: 4850,
    nextLevelXP: 5000,
    streak: 7,
    totalSagas: 5,
    completedSagas: 2,
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pb-20">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-[#2E2E2E]">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-6 h-6 text-[#2E2E2E]" />
            </motion.button>
            <div className="font-black text-xl tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #F2C94C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PSYCHO SAGA
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Streak */}
            <motion.div
              className="flex items-center gap-2 bg-[#1A1A1A] px-3 py-2 rounded-lg border border-[#2E2E2E]"
              whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Flame className="w-5 h-5 text-[#FF4500]" />
              </motion.div>
              <span className="font-bold text-[#F2C94C]">{userData.streak}</span>
            </motion.div>

            {/* XP & Level */}
            <motion.div
              className="flex items-center gap-2 bg-[#1A1A1A] px-3 py-2 rounded-lg border border-[#2E2E2E]"
              whileHover={{ scale: 1.05, borderColor: '#00E5C8' }}
            >
              <Zap className="w-5 h-5 text-[#00E5C8]" fill="#00E5C8" />
              <span className="font-bold text-[#00E5C8]">{userData.xp}</span>
            </motion.div>

            {/* Profile */}
            <motion.button
              onClick={() => navigate("/profile")}
              className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F2C94C] flex items-center justify-center font-bold border-2 border-[#2E2E2E]"
              whileHover={{ scale: 1.1, borderColor: '#D4AF37' }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#00E5C8] rounded-full flex items-center justify-center text-xs font-bold border-2 border-[#0A0A0A]">
                {userData.level}
              </div>
              {userData.name[0]}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-2">
            Welcome back, <span className="text-[#D4AF37]">{userData.name}</span> 👋
          </h2>
          <p className="text-[#2E2E2E] text-sm">Continue your legendary journey through history and psychology</p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          className="mt-6 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl p-6 border border-[#2E2E2E] relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00E5C8] opacity-5 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[#2E2E2E] text-sm mb-1">Level {userData.level} Progress</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#00E5C8]">{userData.xp}</span>
                  <span className="text-sm text-[#2E2E2E]">/ {userData.nextLevelXP} XP</span>
                </div>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="#2E2E2E"
                    strokeWidth="6"
                    fill="none"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `0 ${2 * Math.PI * 35}` }}
                    animate={{ strokeDasharray: `${(userData.xp / userData.nextLevelXP) * 2 * Math.PI * 35} ${2 * Math.PI * 35}` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00E5C8" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  {Math.round((userData.xp / userData.nextLevelXP) * 100)}%
                </div>
              </div>
            </div>

            <div className="h-2 bg-[#2E2E2E] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #00E5C8, #D4AF37)',
                }}
                initial={{ width: 0 }}
                animate={{ width: `${(userData.xp / userData.nextLevelXP) * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[
            { icon: Trophy, label: "Completed", value: userData.completedSagas, color: "#D4AF37" },
            { icon: BarChart3, label: "In Progress", value: userData.totalSagas - userData.completedSagas, color: "#00E5C8" },
            { icon: Crown, label: "Rank", value: "#127", color: "#F2C94C" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1A1A1A] rounded-xl p-4 border border-[#2E2E2E] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: stat.color }}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: stat.color }} />
              <div className="font-bold text-lg" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs text-[#2E2E2E]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-black">Epic Sagas</h3>
          <motion.button
            onClick={() => navigate("/leaderboard")}
            className="text-sm text-[#00E5C8] font-bold flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="w-4 h-4" />
            Leaderboard
          </motion.button>
        </div>

        <div className="space-y-4">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#2E2E2E] group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: '#D4AF37' }}
              onClick={() => navigate(`/comic/${course.id}/1`)}
            >
              {/* Background Gradient */}
              <div
                className="absolute inset-0 opacity-30"
                style={{ background: course.image }}
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-black">{course.title}</h4>
                      {course.unlocked < course.chapters && (
                        <div className="bg-[#D4AF37] text-[#0A0A0A] text-xs px-2 py-1 rounded font-bold">
                          {course.unlocked} FREE
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-[#2E2E2E] line-clamp-2">{course.description}</p>
                  </div>
                  <div className="text-4xl ml-4">{course.emoji}</div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs text-[#2E2E2E] mb-2">
                    <span>{course.progress}% Complete</span>
                    <span>{course.chapters} Chapters</span>
                  </div>
                  <div className="h-2 bg-[#2E2E2E] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00E5C8] to-[#D4AF37]"
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#0A0A0A] font-bold flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/30 transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5" fill="#0A0A0A" />
                  {course.progress > 0 ? "Continue Saga" : "Start Saga"}
                </motion.button>
              </div>

              {/* Lock Overlay for Premium Content */}
              {course.unlocked < course.chapters && course.progress > 50 && (
                <motion.div
                  className="absolute top-3 right-3 bg-[#0A0A0A]/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-[#D4AF37] flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPremium(true);
                  }}
                >
                  <Lock className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-bold text-[#D4AF37]">Unlock All</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Premium CTA */}
        <motion.div
          className="mt-8 bg-gradient-to-br from-[#D4AF37]/20 to-[#F2C94C]/10 rounded-2xl p-6 border border-[#D4AF37]/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="absolute top-0 right-0 text-8xl opacity-10">👑</div>
          <div className="relative z-10">
            <h4 className="text-2xl font-black mb-2 text-[#D4AF37]">Go Premium</h4>
            <p className="text-sm text-[#2E2E2E] mb-4">
              Unlock all sagas, remove ads, and get exclusive content
            </p>
            <motion.button
              onClick={() => setShowPremium(true)}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#0A0A0A] font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              ✨ Upgrade Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      {showPremium && <PremiumModal onClose={() => setShowPremium(false)} />}
    </div>
  );
}
