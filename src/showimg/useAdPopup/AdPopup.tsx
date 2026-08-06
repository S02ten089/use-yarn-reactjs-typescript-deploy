import { motion, AnimatePresence } from "framer-motion";
import styles from "./AdPopup.module.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdPopup({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.popup}
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
          >
            <h2>🔥 Quảng cáo</h2>
            <p>Nội dung quảng cáo của bạn ở đây</p>

            <button onClick={onClose}>Đóng</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}