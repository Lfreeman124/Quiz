import React from "react";
import thumb from "./thumbsUp.png";

export default function Card(props) {
  return (
    <div>
      {props.isFinished ? (
        <div className="finished--card">
          <h1>YAY!</h1>
          <h4>Score: {props.score}/5</h4>
          {props.isRight ? (
            <img className="thumbUp" src={thumb} alt="thumb" />
          ) : null}
        </div>
      ) : (
        <div className="questions--card">
          <div className="question--section">
            <h2>Question {props.id}</h2>
            <h3>{props.question}</h3>
          </div>
          <div className="answer--section">
            <p onClick={props.onEvent}>{props.answer1}</p>
            <p onClick={props.onEvent}>{props.answer2}</p>
            <p onClick={props.onEvent}>{props.answer3}</p>
            <p onClick={props.onEvent}>{props.answer4}</p>
          </div>
          {props.isRight ? (
            <img className="thumbUp" src={thumb} alt="thumb" />
          ) : null}
        </div>
      )}
    </div>
  );
}
