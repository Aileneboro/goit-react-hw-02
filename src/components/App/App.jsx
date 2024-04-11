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

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const { good, neutral, bad } = feedbackTypes;
  const totalFeedback = good + neutral + bad;

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedbackTypes={feedbackTypes} />
      )}
    </div>
  );
};

export default App;
