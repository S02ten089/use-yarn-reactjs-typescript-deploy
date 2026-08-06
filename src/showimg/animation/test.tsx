import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Stats.module.scss";

interface DataType {
  count: number;
  images: string[];
}

export default function Stats() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  // fetch API
//   useEffect(() => {
//     fetch("http://localhost/api/stats.php")
//       .then(res => res.json())
//       .then((data: DataType) => {
//         setTarget(data.count);
//         setImages(data.images);
//       });
//   }, []);
  useEffect(() => {
  const fakeData: DataType = {
    count: 1520,
    images: [
      "https://picsum.photos/300/400?random=1",
      "https://picsum.photos/300/400?random=2",
      "https://picsum.photos/300/400?random=3",
      "https://picsum.photos/300/400?random=4",
    ],
  };

  setTarget(fakeData.count);
  setImages(fakeData.images);
}, []);

  // counter animation (mượt hơn)
  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2s
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  // image auto change
  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className={styles.container}>
      {/* Counter animation */}
      <motion.h1
        className={styles.counter}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {count}+
      </motion.h1>

      {/* Image animation */}
      <div className={styles.imageBox}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="img"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}