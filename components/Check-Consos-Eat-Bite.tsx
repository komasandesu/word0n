import KanaToRomaji from './Kana-to-Romaji'

function GetConsosEatBite (answer:string,correct_answer:string): string  {
    let Consos_EAT: number = 0,Consos_BITE: number = 0;
    
    let EAT_BITE:string = "";

    let answer_Consos: Array<number> = new Array(19).fill(0);
    let correct_answer_Consos: Array<number> = new Array(19).fill(0);

    for (let i:number = 0; i < 4; i++) {
        if( KanaToRomaji(answer[i])[1]==KanaToRomaji(correct_answer[i])[1] ){
            Consos_EAT++;
        }
        answer_Consos[ KanaToRomaji(answer[i])[1] ]++;
        correct_answer_Consos[ KanaToRomaji(correct_answer[i])[1] ]++;
    }

    for (let i:number = 0; i < 19; i++) {
        let min: number = answer_Consos[i];
        if(answer_Consos[i]>correct_answer_Consos[i]){min = correct_answer_Consos[i];}
        Consos_BITE += min;
    }
    Consos_BITE -= Consos_EAT;

    EAT_BITE = "C_EAT:"+Consos_EAT+",C_BITE:"+Consos_BITE;

    return EAT_BITE;
}

export default GetConsosEatBite;