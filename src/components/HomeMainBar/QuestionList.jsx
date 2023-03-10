import React from "react";
import Questions from "./Questions";
import "./HomeMainBar.css";

const QuestionList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question) => (
        <Questions question={question} key={question.id} />
      ))}
    </>
  );
};

export default QuestionList;
