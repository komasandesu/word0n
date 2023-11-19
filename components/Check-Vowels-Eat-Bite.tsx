import KanaToRomaji from './Kana-to-Romaji'

function GetVowelsEatBite (answer:string,correct_answer:string): string  {
    let Vowels_EAT: number = 0,Vowels_BITE: number = 0;

    let EAT_BITE:string = "";

    let answer_Vowels: Array<number> = new Array(19).fill(0);
    let correct_answer_Vowels: Array<number> = new Array(19).fill(0);

    for (let i:number = 0; i < 4; i++) {
        if( KanaToRomaji(answer[i])[0]==KanaToRomaji(correct_answer[i])[0] ){
            Vowels_EAT++;
        }
        answer_Vowels[ KanaToRomaji(answer[i])[0] ]++;
        correct_answer_Vowels[ KanaToRomaji(correct_answer[i])[0] ]++;
    }

    for (let i:number = 0; i < 19; i++) {
        let min: number = answer_Vowels[i];
        if(answer_Vowels[i]>correct_answer_Vowels[i]){min = correct_answer_Vowels[i];}
        Vowels_BITE += min;
    }
    Vowels_BITE -= Vowels_EAT;

    EAT_BITE = "V_EAT:"+Vowels_EAT+",V_BITE:"+Vowels_BITE;

    return EAT_BITE;
}

export default GetVowelsEatBite;