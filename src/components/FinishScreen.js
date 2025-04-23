function FinishScreen({ score, totalScore, highscore, dispatch }) {
  const percentage = (score / totalScore) * 100;

  let emoji;
  if (percentage === 100) emoji = "🌕";
  if (percentage > 80) emoji = "🌖";
  if (percentage >= 50 && percentage < 80) emoji = "🌘";

  return (
    <>
      <p className="result">
        You Scored <strong>{score}</strong> out of {totalScore}(
        {Math.ceil(percentage)}%)<span>{emoji}</span>
      </p>
      <p className="highscore">(highestscore : {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        restart
      </button>
    </>
  );
}

export default FinishScreen;
