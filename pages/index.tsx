import Image from 'next/image'
import { SetStateAction, useState } from "react";
import { Inter } from 'next/font/google'
import InputForm from '../components/Input-answers'
import ShowAnswers from '../components/Show-answers'
import ShowResults from '../components/FinishedGame'

import json from '../data/4answer.json'
import GetDays from '../components/Get-Days'

const inter = Inter({ subsets: ['latin'] });

//正解
const current_count = GetDays();
const correct_answer = json[current_count];


//ゲーム終了
let is_Game_End = false;

const Home = () => {
  // answerを入れておくためのstate
  const [answers, setAnswers] = useState<string[]>([]);
  // ↓子コンポーネントから受け取った値で親コンポーネントのtextを更新する関数
  const handleValueChange = (newValue: string) => {
    setAnswers([...answers,newValue]);
  };

  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <head>
      <title>word0n</title>
      </head>

      <h1>
        <a style={{font: "sans-serif"}}>
        Word0n
        </a>
      </h1>
      
      <p>ひらがな4文字の単語を当てるゲームです。</p>

      <details>
        <summary>説明</summary>
        <p>基本的なルールは<a href="https://ja.wikipedia.org/wiki/Numer0n#%E3%83%AB%E3%83%BC%E3%83%AB">ヌメロン</a>と同じです。
        ただし、母音と子音に分かれてそれぞれEAT、BITEを推測するものとします。</p>
        <p>母音の「EAT」、「BITE」は「V_EAT」、「V_BITE」であり、子音の「EAT」、「BITE」は「C_EAT」、「C_BITE」です。</p>
        <p>濁音・半濁音・拗音に関しては子音は同じとします。また、「ー」・「ん」に関しては母音、子音共に他文字とはそれぞれ異なるものとします。</p>
      </details>
      
      

      {answers.map((answer, index) => {
        if (answer==correct_answer) {
          is_Game_End = true;
        }
        return <div key={index}></div>;
      })}


      <div>
        {
          (()=> {
            if(is_Game_End) {
              return (
                <ShowResults times = {current_count} turn={answers.length} />
              );
            } else {
              return (
                <InputForm handleValueChange={handleValueChange} />
              );
            }
          })()
        }
      </div>

      {/*<ShowResults turn={answers.length} />
      <InputForm handleValueChange={handleValueChange} />*/}

      <br></br>
      
      {/*answersを子コンポーネント側の値で更新するためにpropsで渡す*/}
      {answers.map((answer, index) => {
        return <ShowAnswers answer={answer} correct_answer={correct_answer} key={index}/>
      })}
      {/* ↑answersはここに表示 */}
    </main>
  )
}

export default Home;