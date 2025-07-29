import { useEffect, useState } from "react";
import styles from "./floater-blink.module.scss";

const FloaterBlink = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHidden(!isHidden);
    }, 500);
    return () => clearInterval(interval);
  }, [isHidden]);

  return <span className={styles.floater_blink}>▽</span>;
};

export default FloaterBlink;