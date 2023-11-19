import React, { useState } from "react";
import GetVowelsEatBite from './Check-Vowels-Eat-Bite'
import GetConsosEatBite from './Check-Consos-Eat-Bite'

type Props = {
    answer: string
    correct_answer: string;
}


const ShowAnswers = ({ answer,correct_answer }: Props) => {

    const V_EAT_BITE: string = GetVowelsEatBite(answer,correct_answer);
    const C_EAT_BITE: string = GetConsosEatBite(answer,correct_answer);

    return (
        <ul className="list-style-none">
        <li>{answer} : <a style={{color: "red"}}>{V_EAT_BITE}</a> , <a style={{color: "blue"}}>{C_EAT_BITE}</a> </li>
        </ul>
    );
}
  
export default ShowAnswers;