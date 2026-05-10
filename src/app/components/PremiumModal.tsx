import { motion, AnimatePresence } from "motion/react";
import { X, Crown, Zap, Download, Star, Users, Sparkles } from "lucide-react";

interface PremiumModalProps {
  onClose: () => void;
}

const features = [
  { icon: Crown, text: "Unlock ALL Sagas & Chapters", color: "#D4AF37" },
  { icon: Zap, text: "Ad-Free Experience", color: "#00E5C8" },
  { icon: Star, text: "Exclusive Premium Content", color: "#F2C94C" },
  { icon: Download, text: "Offline Mode", color: "#D4AF37" },
  { icon: Users, text: "Early Access to New Sagas", color: "#00E5C8" },
  { icon: Sparkles, text: "Custom Avatars & Badges", color: "#F2C94C" },
];

export default function PremiumModal({ onClose }: PremiumModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-md bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl border-2 border-[#D4AF37] overflow-hidden max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 20 }}
        >
          {/* Glow Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37] opacity-20 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00E5C8] opacity-10 blur-[80px]" />

          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#2E2E2E] flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5" />
          </motion.button>

          <div className="relative z-10 p-8">
            {/* Crown Icon */}
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F2C94C] flex items-center justify-center"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.3)',
                  '0 0 40px rgba(212, 175, 55, 0.6)',
                  '0 0 20px rgba(212, 175, 55, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Crown className="w-10 h-10 text-[#0A0A0A]" fill="#0A0A0A" />
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl font-black text-center mb-2"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #F2C94C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PREMIUM SAGA
            </h2>
            <p className="text-center text-[#2E2E2E] text-sm mb-8">
              Unlock the complete legendary experience
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 bg-[#1A1A1A] rounded-xl p-4 border border-[#2E2E2E]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ borderColor: feature.color, scale: 1.02 }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                    }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#00E5C8]/10 rounded-2xl p-6 mb-6 border border-[#D4AF37]/30">
              <div className="text-center">
                <div className="text-[#2E2E2E] text-sm mb-2">Special Offer</div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-black text-[#D4AF37]">$9.99</span>
                  <span className="text-[#2E2E2E] text-lg line-through">$19.99</span>
                </div>
                <div className="text-sm text-[#00E5C8] font-bold">50% OFF - Limited Time! ⚡</div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              className="w-full py-4 rounded-xl font-bold text-lg text-[#0A0A0A] relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #F2C94C)',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Crown className="w-5 h-5" fill="#0A0A0A" />
                Unlock Premium Now
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>

            {/* Trust Badges */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#2E2E2E]">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#00E5C8]" />
                Secure Payment
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                Cancel Anytime
              </div>
            </div>

            {/* Footer */}
            <p className="text-center text-[#2E2E2E] text-xs mt-6">
              Join 10,000+ premium learners 🌟
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
