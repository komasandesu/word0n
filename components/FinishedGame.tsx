import React, { useState } from "react";

type Props = {
    times: number
    turn: number
}

function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    .then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
}  


const ShowResults = ({ times,turn }: Props) => {
    let result: string = turn+"ターンでクリア！";
    let share_result = "Word0n "+times+"\n"+result+"\n"+"https://word0n.vercel.app/";
    return (
        <>
        <h2>{result}</h2>
        <button onClick={() => copyTextToClipboard(share_result)}>
            結果を共有
        </button>
        </>
    );
}
  
export default ShowResults;