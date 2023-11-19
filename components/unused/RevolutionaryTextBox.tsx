import React from "react";

interface RevolutionaryTextBoxProps {
    value: string,
    onChange: (value: string) => void,
}

const RevolutionaryTextBox = (props: RevolutionaryTextBoxProps) => {
    return (
      <input
        type="text"
        value={props.value}
        onChange={event => props.onChange(event.target.value)} />
    );
}

export default RevolutionaryTextBox