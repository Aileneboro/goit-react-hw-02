const Feedback = ({
  feedbackTypes,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  const { good, neutral, bad } = feedbackTypes;

  return (
    <div>
      <h2>Feedback</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback percentage: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;
