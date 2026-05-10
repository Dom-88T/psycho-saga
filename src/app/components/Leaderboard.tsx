import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft, Trophy, Medal, Crown, Zap, TrendingUp, Globe } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Sarah Chen", avatar: "🧠", xp: 125430, country: "🇺🇸", level: 47, streak: 124, badge: "👑" },
  { rank: 2, name: "Marcus Stone", avatar: "⚡", xp: 118920, country: "🇬🇧", level: 45, streak: 98, badge: "🥈" },
  { rank: 3, name: "Yuki Tanaka", avatar: "🌸", xp: 112650, country: "🇯🇵", level: 44, streak: 87, badge: "🥉" },
  { rank: 4, name: "Elena Rodriguez", avatar: "🔥", xp: 98450, country: "🇪🇸", level: 41, streak: 76, badge: "💎" },
  { rank: 5, name: "James Wilson", avatar: "🎯", xp: 89320, country: "🇨🇦", level: 39, streak: 65, badge: "⭐" },
  { rank: 6, name: "Priya Sharma", avatar: "✨", xp: 78210, country: "🇮🇳", level: 36, streak: 54, badge: "🌟" },
  { rank: 7, name: "Alex Kim", avatar: "🚀", xp: 67890, country: "🇰🇷", level: 33, streak: 43, badge: "💫" },
  { rank: 8, name: "Sofia Martinez", avatar: "🎨", xp: 59430, country: "🇲🇽", level: 31, streak: 38, badge: "🏆" },
  { rank: 9, name: "Thomas Berg", avatar: "⚔️", xp: 52170, country: "🇩🇪", level: 29, streak: 32, badge: "🎖️" },
  { rank: 10, name: "Lisa Anderson", avatar: "🌙", xp: 47560, country: "🇸🇪", level: 27, streak: 28, badge: "🔱" },
];

const tabs = ["Global", "Friends", "Country"];

export default function Leaderboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Global");
  const [userRank] = useState(127);
  const [userXP] = useState(4850);

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

          <h1 className="text-xl font-black"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #F2C94C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            LEADERBOARD
          </h1>

          <div className="w-10" />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-4 pb-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-lg font-bold text-sm transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#0A0A0A]'
                  : 'bg-[#1A1A1A] text-[#2E2E2E] border border-[#2E2E2E]'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab === "Global" && <Globe className="w-4 h-4 inline mr-1" />}
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="px-4 py-8">
        <div className="flex items-end justify-center gap-2 mb-8">
          {/* 2nd Place */}
          <motion.div
            className="flex-1 max-w-[120px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#C0C0C0] to-[#808080] rounded-2xl p-4 text-center border-2 border-[#C0C0C0] mb-2">
              <div className="text-4xl mb-2">{leaderboardData[1].avatar}</div>
              <div className="text-xs font-bold truncate">{leaderboardData[1].name}</div>
              <div className="text-lg font-black text-[#0A0A0A] mt-1">
                {leaderboardData[1].xp.toLocaleString()}
              </div>
            </div>
            <div className="h-20 bg-gradient-to-t from-[#C0C0C0]/20 to-transparent rounded-t-xl flex items-end justify-center pb-2">
              <Medal className="w-8 h-8 text-[#C0C0C0]" />
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div
            className="flex-1 max-w-[120px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#F2C94C] rounded-2xl p-4 text-center border-2 border-[#D4AF37] mb-2 relative">
              <motion.div
                className="absolute -top-3 left-1/2 -translate-x-1/2"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown className="w-6 h-6 text-[#D4AF37]" fill="#D4AF37" />
              </motion.div>
              <div className="text-4xl mb-2">{leaderboardData[0].avatar}</div>
              <div className="text-xs font-bold text-[#0A0A0A] truncate">
                {leaderboardData[0].name}
              </div>
              <div className="text-lg font-black text-[#0A0A0A] mt-1">
                {leaderboardData[0].xp.toLocaleString()}
              </div>
            </div>
            <div className="h-28 bg-gradient-to-t from-[#D4AF37]/20 to-transparent rounded-t-xl flex items-end justify-center pb-2">
              <Trophy className="w-10 h-10 text-[#D4AF37]" />
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            className="flex-1 max-w-[120px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-[#CD7F32] to-[#8B5A3C] rounded-2xl p-4 text-center border-2 border-[#CD7F32] mb-2">
              <div className="text-4xl mb-2">{leaderboardData[2].avatar}</div>
              <div className="text-xs font-bold truncate">{leaderboardData[2].name}</div>
              <div className="text-lg font-black text-[#0A0A0A] mt-1">
                {leaderboardData[2].xp.toLocaleString()}
              </div>
            </div>
            <div className="h-16 bg-gradient-to-t from-[#CD7F32]/20 to-transparent rounded-t-xl flex items-end justify-center pb-2">
              <Medal className="w-8 h-8 text-[#CD7F32]" />
            </div>
          </motion.div>
        </div>

        {/* Your Rank Card */}
        <motion.div
          className="bg-gradient-to-br from-[#00E5C8]/20 to-[#D4AF37]/10 rounded-2xl p-4 border-2 border-[#00E5C8] mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F2C94C] flex items-center justify-center font-bold text-lg">
                A
              </div>
              <div>
                <div className="font-bold">Your Rank</div>
                <div className="text-sm text-[#2E2E2E]">Keep climbing! 🚀</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-[#00E5C8]">#{userRank}</div>
              <div className="text-sm text-[#2E2E2E]">{userXP.toLocaleString()} XP</div>
            </div>
          </div>
        </motion.div>

        {/* Leaderboard List */}
        <div className="space-y-2">
          {leaderboardData.slice(3).map((user, idx) => (
            <motion.div
              key={user.rank}
              className="bg-[#1A1A1A] rounded-xl p-4 border border-[#2E2E2E] hover:border-[#D4AF37] transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-3">
                {/* Rank */}
                <div className="w-8 text-center">
                  <span className="font-black text-[#2E2E2E] text-lg">{user.rank}</span>
                </div>

                {/* Avatar & Badge */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#2E2E2E] flex items-center justify-center text-2xl">
                    {user.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 text-lg">{user.badge}</div>
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{user.name}</span>
                    <span>{user.country}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#2E2E2E]">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Level {user.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {user.streak} day streak
                    </span>
                  </div>
                </div>

                {/* XP */}
                <div className="text-right">
                  <div className="font-black text-[#D4AF37]">
                    {user.xp.toLocaleString()}
                  </div>
                  <div className="text-xs text-[#2E2E2E]">XP</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.button
          className="w-full mt-6 py-4 rounded-xl font-bold bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#00E5C8] transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Load More 📊
        </motion.button>
      </div>
    </div>
  );
}
