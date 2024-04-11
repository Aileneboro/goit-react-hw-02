import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, handleReset }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback("good")} className={styles.button}>
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className={styles.button}
      >
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={styles.button}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleReset} className={styles.button}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
