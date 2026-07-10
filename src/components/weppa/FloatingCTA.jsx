import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end gap-3">
      <motion.a
        href="https://wa.me/5493415115053"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00BFA5] text-white flex items-center justify-center shadow-2xl shadow-blue-500/40"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
