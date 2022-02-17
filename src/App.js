import React from "react";
import Card from "./Components/Card";
import Data from "./Components/Data";

export default function App() {
  const [question, setQuestion] = React.useState(0);
  let currentQuestion = Data[question];

  const [correct, setCorrect] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [finished, setFinished] = React.useState(false);

  function changeCard(event) {
    let isTrue;
    const answer = event.target.textContent;
    for (let i of currentQuestion.answerChoices) {
      if (i.answerText === answer) {
        isTrue = i.isCorrect;
      }
    }
    isTrue && setScore((prev) => prev + 1);

    setCorrect(isTrue);
    if (currentQuestion.id === 5) {
      setFinished((prev) => !prev);
    } else {
      setQuestion((prev) => prev + 1);
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setCorrect((prev) => (prev ? !prev : prev));
    }, 1000);
  }, [correct]);

  return (
    <div>
      <h1>Lauren's Silly Quiz</h1>
      <Card
        question={currentQuestion.questionText}
        id={currentQuestion.id}
        answer1={currentQuestion.answerChoices[0].answerText}
        answer2={currentQuestion.answerChoices[1].answerText}
        answer3={currentQuestion.answerChoices[2].answerText}
        answer4={currentQuestion.answerChoices[3].answerText}
        onEvent={changeCard}
        isRight={correct}
        isFinished={finished}
        score={score}
      />
    </div>
  );
}
