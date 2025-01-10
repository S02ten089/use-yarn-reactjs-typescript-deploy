import { useState, useEffect } from "react";

interface CountUpProps {
  start: number;
  end: number;
  duration: number; // Thời gian chạy hiệu ứng (ms)
  updateInterval: number; // Thời gian cập nhật mỗi bước (ms)
}

export const useCountUp = ({ start, end, duration, updateInterval }: CountUpProps): number => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const steps = Math.ceil(duration / updateInterval); // Tổng số bước nhảy
    const increment = (end - start) / steps; // Giá trị tăng mỗi bước
    let currentValue = start;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= end) {
        clearInterval(interval);
        setValue(end);
      } else {
        setValue(Math.ceil(currentValue)); // Làm tròn số hiển thị
      }
    }, updateInterval);

    return () => clearInterval(interval); // Cleanup
  }, [start, end, duration, updateInterval]);

  return value;
};
