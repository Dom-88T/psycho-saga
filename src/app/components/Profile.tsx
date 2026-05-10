import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ChevronLeft,
  Settings,
  Trophy,
  Flame,
  Zap,
  Crown,
  Target,
  BookOpen,
  Award,
  Star,
  Lock,
  ChevronRight,
} from "lucide-react";
import PremiumModal from "./PremiumModal";

const achievements = [
  { id: 1, icon: "🔥", title: "Week Warrior", description: "7 day streak", unlocked: true, color: "#FF4500" },
  { id: 2, icon: "📚", title: "Bookworm", description: "Complete 5 chapters", unlocked: true, color: "#D4AF37" },
  { id: 3, icon: "🎯", title: "Perfect Score", description: "100% on any quiz", unlocked: true, color: "#00E5C8" },
  { id: 4, icon: "⚡", title: "Speed Reader", description: "Complete saga in 1 day", unlocked: false, color: "#F2C94C" },
  { id: 5, icon: "👑", title: "Emperor", description: "Reach level 50", unlocked: false, color: "#D4AF37" },
  { id: 6, icon: "🧠", title: "Mind Master", description: "Complete all psychology", unlocked: false, color: "#00E5C8" },
  { id: 7, icon: "🌟", title: "Legendary", description: "Top 10 leaderboard", unlocked: false, color: "#F2C94C" },
  { id: 8, icon: "💎", title: "Premium", description: "Unlock premium", unlocked: false, color: "#D4AF37" },
];

const stats = [
  { label: "Total XP", value: "4,850", icon: Zap, color: "#00E5C8" },
  { label: "Sagas Completed", value: "2", icon: BookOpen, color: "#D4AF37" },
  { label: "Quiz Accuracy", value: "87%", icon: Target, color: "#F2C94C" },
  { label: "Current Streak", value: "7 days", icon: Flame, color: "#FF4500" },
];

export default function Profile() {
  const navigate = useNavigate();
  const [showPremium, setShowPremium] = useState(false);
  const [userData] = useState({
    name: "Alex",
    avatar: "A",
    level: 12,
    xp: 4850,
    nextLevelXP: 5000,
    rank: 127,
    joinDate: "March 2026",
    isPremium: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-[#2E2E2E]">
        <div className="flex items-center justify-between px-4 py-4">
          <motion.button
            onClick={() => navigate("/home")}
            className="p-2 rounded-lg hover:bg-[#1A1A1A]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <h1 className="text-xl font-black">PROFILE</h1>

          <motion.button
            className="p-2 rounded-lg hover:bg-[#1A1A1A]"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <Settings className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Profile Header */}
      <div className="px-4 py-8">
        <motion.div
          className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl p-8 border-2 border-[#D4AF37] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E5C8] opacity-5 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Avatar */}
            <motion.div
              className="relative mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F2C94C] flex items-center justify-center text-5xl font-black border-4 border-[#2E2E2E]">
                {userData.avatar}
              </div>
              {!userData.isPremium && (
                <motion.button
                  onClick={() => setShowPremium(true)}
                  className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center border-2 border-[#0A0A0A]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Crown className="w-5 h-5 text-[#0A0A0A]" />
                </motion.button>
              )}
              {/* Level Badge */}
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-[#00E5C8] flex items-center justify-center font-black text-lg border-2 border-[#0A0A0A]">
                {userData.level}
              </div>
            </motion.div>

            {/* Name & Rank */}
            <h2 className="text-3xl font-black mb-2">{userData.name}</h2>
            <div className="flex items-center gap-2 text-[#2E2E2E] text-sm mb-4">
              <Trophy className="w-4 h-4" />
              <span>Rank #{userData.rank}</span>
              <span>•</span>
              <span>Joined {userData.joinDate}</span>
            </div>

            {/* Level Progress */}
            <div className="w-full max-w-md">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-[#2E2E2E]">Level {userData.level}</span>
                <span className="text-[#00E5C8] font-bold">
                  {userData.xp} / {userData.nextLevelXP} XP
                </span>
                <span className="text-[#2E2E2E]">Level {userData.level + 1}</span>
              </div>
              <div className="h-3 bg-[#2E2E2E] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00E5C8] to-[#D4AF37]"
                  initial={{ width: 0 }}
                  animate={{ width: `${(userData.xp / userData.nextLevelXP) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1A1A1A] rounded-2xl p-5 border border-[#2E2E2E] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: stat.color }}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: stat.color }} />
              <div className="text-2xl font-black mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-xs text-[#2E2E2E]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-black">Achievements</h3>
            <div className="text-sm text-[#2E2E2E]">
              {achievements.filter(a => a.unlocked).length} / {achievements.length}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.id}
                className={`aspect-square rounded-2xl border-2 flex flex-col items-center justify-center text-center p-2 relative ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-[#D4AF37]'
                    : 'bg-[#1A1A1A] border-[#2E2E2E] opacity-50'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={achievement.unlocked ? { scale: 1.1, borderColor: achievement.color } : {}}
              >
                {!achievement.unlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
                    <Lock className="w-6 h-6 text-[#2E2E2E]" />
                  </div>
                )}
                <div className="text-3xl mb-1">{achievement.icon}</div>
                <div className="text-[10px] font-bold leading-tight">{achievement.title}</div>
              </motion.div>
            ))}
          </div>

          {/* Achievement Details */}
          <motion.div
            className="mt-4 bg-[#1A1A1A] rounded-xl p-4 border border-[#2E2E2E]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F2C94C] flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <div className="font-bold">Next Achievement</div>
                  <div className="text-sm text-[#2E2E2E]">Speed Reader - 2 more chapters</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#2E2E2E]" />
            </div>
          </motion.div>
        </div>

        {/* Premium Upsell */}
        {!userData.isPremium && (
          <motion.div
            className="mt-8 bg-gradient-to-br from-[#D4AF37]/20 to-[#00E5C8]/10 rounded-3xl p-6 border-2 border-[#D4AF37] relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-0 right-0 text-9xl opacity-10">👑</div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F2C94C] flex items-center justify-center">
                  <Crown className="w-6 h-6 text-[#0A0A0A]" fill="#0A0A0A" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#D4AF37]">Go Premium</h3>
                  <p className="text-sm text-[#2E2E2E]">Unlock your full potential</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                {["Unlimited Access", "Ad-Free", "Exclusive Content", "Custom Avatars"].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#D4AF37]" fill="#D4AF37" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={() => setShowPremium(true)}
                className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#0A0A0A]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Upgrade Now ✨
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <motion.button
            className="w-full py-4 rounded-xl font-bold bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-between px-6"
            whileHover={{ scale: 1.02, borderColor: '#D4AF37' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <span>View All Badges</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#2E2E2E]" />
          </motion.button>

          <motion.button
            onClick={() => navigate("/leaderboard")}
            className="w-full py-4 rounded-xl font-bold bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-between px-6"
            whileHover={{ scale: 1.02, borderColor: '#00E5C8' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-[#00E5C8]" />
              <span>Leaderboard</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#2E2E2E]" />
          </motion.button>
        </div>
      </div>

      {showPremium && <PremiumModal onClose={() => setShowPremium(false)} />}
    </div>
  );
}
