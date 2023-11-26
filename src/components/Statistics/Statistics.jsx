const Statistics = props => {
  const {
    good = 0,
    neutral = 0,
    bad = 0,
    total = 0,
    positivePercentage = 0,
  } = props;

  return (
    <section>
      <ul>
        <li className="FeedbackType">
          <p>Good: {good}</p>
        </li>
        <li className="FeedbackType">
          <p>Neutral: {neutral}</p>
        </li>
        <li className="FeedbackType">
          <p>Bad: {bad}</p>
        </li>
      </ul>
      <div>
        <p>Total: {total}</p>
        <p>
          Positive feedback:{' '}
          {isNaN(positivePercentage) ? 0 : positivePercentage} %
        </p>
      </div>
    </section>
  );
};

export default Statistics;
