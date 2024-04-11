const Feedback = ({ feedbackTypes }) => {
  const { good, neutral, bad } = feedbackTypes;
  const totalFeedback = good + neutral + bad;

  if (totalFeedback === 0) {
    return null;
  }

  return (
    <div>
      <h2>Feedback</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default Feedback;
