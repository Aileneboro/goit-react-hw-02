import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

const App = () => {
  // Стан для зберігання типів відгуків
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Description />
      <Options />
      <Feedback feedbackTypes={feedbackTypes} />
    </div>
  );
};

export default App;
