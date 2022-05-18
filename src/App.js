import './App.css';

import React, { useState } from 'react';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section ';
import Notification from './Components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeFeedback = e => {
    const { name } = e.target;

    // setState(prev => ({ [name]: prev[name] + 1 }));
    switch (name) {
      case 'good':
        setGood(name => name + 1);
        break;
      case 'neutral':
        setNeutral(name => name + 1);
        break;
      case 'bad':
        setBad(name => name + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * good) / countTotalFeedback());
  };

  return (
    <div className="App">
      <Section title={`Оставте ваш отзыв`}>
        <FeedbackOptions options={changeFeedback} />
      </Section>

      <Section title={`Cтатистика`}>
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
