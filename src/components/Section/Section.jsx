import { useState, useEffect } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

export const Section = () => {
  const [badFeedback, setBadFeedback] = useState(() => {
    const isInLocalStorage = JSON.parse(localStorage.getItem('feedback'));
    if (isInLocalStorage && isInLocalStorage.bad > 0) {
      return isInLocalStorage.bad;
    } else {
      console.log('was zero');
      return 0;
    }
  });
  const [neutralFeedback, setNeutralFeedback] = useState(() => {
    const isInLocalStorage = JSON.parse(localStorage.getItem('feedback'));
    if (isInLocalStorage && isInLocalStorage.neutral > 0) {
      return isInLocalStorage.neutral;
    } else {
      console.log('was zero');
      return 0;
    }
  });
  const [goodFeedback, setGoodFeedback] = useState(() => {
    const isInLocalStorage = JSON.parse(localStorage.getItem('feedback'));
    if (isInLocalStorage && isInLocalStorage.good > 0) {
      return isInLocalStorage.good;
    } else {
      console.log('was zero');
      return 0;
    }
  });

  useEffect(() => {
    const feedback = {
      good: goodFeedback,
      bad: badFeedback,
      neutral: neutralFeedback,
    };
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [goodFeedback, badFeedback, neutralFeedback]);

  const handleGoodFeedback = () => {
    setGoodFeedback(prevFeedback => prevFeedback + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutralFeedback(prevFeedback => prevFeedback + 1);
  };

  const handleBadFeedback = () => {
    setBadFeedback(prevFeedback => prevFeedback + 1);
  };

  const countTotalFeedback = () => {
    return goodFeedback + badFeedback + neutralFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((goodFeedback / countTotalFeedback()) * 100);
  };

  return (
    <section>
      <h1>Expresso cafe</h1>
      <h3>Your feedback is:</h3>
      <FeedbackOptions
        good={goodFeedback}
        neutral={neutralFeedback}
        bad={badFeedback}
        onGoodFeedback={handleGoodFeedback}
        onNeutralFeedback={handleNeutralFeedback}
        onBadFeedback={handleBadFeedback}
      />
      <Statistics
        good={goodFeedback}
        neutral={neutralFeedback}
        bad={badFeedback}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </section>
  );
};
