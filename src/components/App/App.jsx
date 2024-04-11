import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

const App = () => {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType, value = 1) => {
    setFeedbackTypes((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + value,
    }));
  };

  const handleReset = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = feedbackTypes;
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      )}
    </div>
  );
};

export default App;
