import { useState, useEffect } from "react";
import styles from "./Banner.module.scss"; // CSS module
import img from "../../../../showimg/img/imgfont.jpg";
const headerImg = img; // dùng link trực tiếp

export const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className={styles.banner} id="home">
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.tagline}>Welcome to my Web serve</span>
          <h1>
            {`Hi! I'm S02 `}
            <span className={styles["txt-rotate"]}>
              <span className={styles.wrap}>{text}</span>
            </span>
          </h1>
          <p className={styles.color}>
            website provides services and utilities that you always want. 
            We are always ready when requested from you.
          </p>
          <button className={styles.button} onClick={() => console.log("connect")}>
            Let’s Connect <span className={styles.arrow}>→</span>
          </button>
        </div>
        <div className={styles.right}>
          <img src={headerImg} alt="Header" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
