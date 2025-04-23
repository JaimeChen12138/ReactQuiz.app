function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  const hasAnswer = answer !== null;

  if (index < numQuestions - 1) {
    return (
      <div>
        {hasAnswer && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "next" })}
          >
            next
          </button>
        )}
      </div>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
  }
}

//   if (index === numQuestions - 1) {
//     return (
//       <button
//         className="btn btn-ui"
//         onClick={() => dispatch({ type: "finish" })}
//       >
//         Finish
//       </button>
//     );
//   }

export default NextButton;
