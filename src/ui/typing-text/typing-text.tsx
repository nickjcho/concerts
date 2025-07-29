import React, { useState, useEffect } from 'react';
import styles from './typing-text.module.scss';
import Ellipses from '../ellipses/ellipses';
import FloaterBlink from '../floater-blink/floater-blink';
import { useBlabContext } from '@/context/blabContext';

const TypingText = ({ text_list }: {
  text_list: string[]
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [waiting, setWaiting] = useState<boolean>(false);
  const { triggerBlab } = useBlabContext();
  
  const goNextText = () => {
    if (currentTextIndex < (text_list.length - 1)) {
      setCurrentTextIndex(currentTextIndex+1);
    } else {
      setCurrentTextIndex(0);
    }
    triggerBlab();
  }

  useEffect(() => {
    if (index < text_list[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text_list[currentTextIndex].charAt(index));
        setIndex(index + 1);
      }, 25);
      return () => clearTimeout(timeout);
    } else {
      setWaiting(true);
    }
  }, [text_list, index, currentTextIndex]);

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
    setWaiting(false);
  }, [currentTextIndex]);

  return(
    <>    
      <div className={styles.comments} onClick={goNextText}>
        <div className={styles.namecard}>
          Nicholas
        </div>
        <div className={styles.text}>
          {displayedText}{waiting && <Ellipses />}
        </div>
        <div className={styles.floater}>
          {waiting && <FloaterBlink />}
        </div>
      </div>
    </>
  );
};

export default TypingText;