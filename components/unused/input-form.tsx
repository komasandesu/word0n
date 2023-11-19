import React from "react";
import RevolutionaryTextBox from './RevolutionaryTextBox'

const IncorrectTextBox = () => {
  const [answer, setAnswer] = React.useState("");

  return (
    <RevolutionaryTextBox
      value={answer}
      onChange={setAnswer} />
  );
}

export default IncorrectTextBox;