let Vowel:number = 0;
let Consos:number = 0;

function ChangeNum (kana:string) {
    if(kana=="あ"){
        Vowel=1;
        Consos=1;
    }
    if(kana=="い"){
        Vowel=1;
        Consos=2;
    }
    if(kana=="う"){
        Vowel=1;
        Consos=3;
    }
    if(kana=="え"){
        Vowel=1;
        Consos=4;
    }
    if(kana=="お"){
        Vowel=1;
        Consos=5;
    }
    if(kana=="か"){
        Vowel=2;
        Consos=1;
    }
    if(kana=="き"){
        Vowel=2;
        Consos=2;
    }
    if(kana=="く"){
        Vowel=2;
        Consos=3;
    }
    if(kana=="け"){
        Vowel=2;
        Consos=4;
    }
    if(kana=="こ"){
        Vowel=2;
        Consos=5;
    }
    if(kana=="さ"){
        Vowel=3;
        Consos=1;
    }
    if(kana=="し"){
        Vowel=3;
        Consos=2;
    }
    if(kana=="す"){
        Vowel=3;
        Consos=3;
    }
    if(kana=="せ"){
        Vowel=3;
        Consos=4;
    }
    if(kana=="そ"){
        Vowel=3;
        Consos=5;
    }
    if(kana=="た"){
        Vowel=4;
        Consos=1;
    }
    if(kana=="ち"){
        Vowel=4;
        Consos=2;
    }
    if(kana=="つ"){
        Vowel=4;
        Consos=3;
    }
    if(kana=="て"){
        Vowel=4;
        Consos=4;
    }
    if(kana=="と"){
        Vowel=4;
        Consos=5;
    }
    if(kana=="な"){
        Vowel=5;
        Consos=1;
    }
    if(kana=="に"){
        Vowel=5;
        Consos=2;
    }
    if(kana=="ぬ"){
        Vowel=5;
        Consos=3;
    }
    if(kana=="ね"){
        Vowel=5;
        Consos=4;
    }
    if(kana=="の"){
        Vowel=5;
        Consos=5;
    }
    if(kana=="は"){
        Vowel=6;
        Consos=1;
    }
    if(kana=="ひ"){
        Vowel=6;
        Consos=2;
    }
    if(kana=="ふ"){
        Vowel=6;
        Consos=3;
    }
    if(kana=="へ"){
        Vowel=6;
        Consos=4;
    }
    if(kana=="ほ"){
        Vowel=6;
        Consos=5;
    }
    if(kana=="ま"){
        Vowel=7;
        Consos=1;
    }
    if(kana=="み"){
        Vowel=7;
        Consos=2;
    }
    if(kana=="む"){
        Vowel=7;
        Consos=3;
    }
    if(kana=="め"){
        Vowel=7;
        Consos=4;
    }
    if(kana=="も"){
        Vowel=7;
        Consos=5;
    }
    if(kana=="や"){
        Vowel=8;
        Consos=1;
    }
    if(kana=="ゆ"){
        Vowel=8;
        Consos=3;
    }
    if(kana=="よ"){
        Vowel=8;
        Consos=5;
    }
    if(kana=="ら"){
        Vowel=9;
        Consos=1;
    }
    if(kana=="り"){
        Vowel=9;
        Consos=2;
    }
    if(kana=="る"){
        Vowel=9;
        Consos=3;
    }
    if(kana=="れ"){
        Vowel=9;
        Consos=4;
    }
    if(kana=="ろ"){
        Vowel=9;
        Consos=5;
    }
    if(kana=="わ"){
        Vowel=10;
        Consos=1;
    }
    if(kana=="ゐ"){
        Vowel=10;
        Consos=2;
    }
    if(kana=="ゑ"){
        Vowel=10;
        Consos=4;
    }
    if(kana=="を"){
        Vowel=10;
        Consos=5;
    }
    if(kana=="ん"){
        Vowel=11;
        Consos=6;
    }
    if(kana=="ー"){
        Vowel=12;
        Consos=7;
    }
    if(kana=="が"){
        Vowel=2;
        Consos=1;
    }
    if(kana=="ぎ"){
        Vowel=2;
        Consos=2;
    }
    if(kana=="ぐ"){
        Vowel=2;
        Consos=3;
    }
    if(kana=="げ"){
        Vowel=2;
        Consos=4;
    }
    if(kana=="ご"){
        Vowel=2;
        Consos=5;
    }
    if(kana=="ざ"){
        Vowel=3;
        Consos=1;
    }
    if(kana=="じ"){
        Vowel=3;
        Consos=2;
    }
    if(kana=="ず"){
        Vowel=3;
        Consos=3;
    }
    if(kana=="ぜ"){
        Vowel=3;
        Consos=4;
    }
    if(kana=="ぞ"){
        Vowel=3;
        Consos=5;
    }
    if(kana=="だ"){
        Vowel=4;
        Consos=1;
    }
    if(kana=="ぢ"){
        Vowel=4;
        Consos=2;
    }
    if(kana=="づ"){
        Vowel=4;
        Consos=3;
    }
    if(kana=="で"){
        Vowel=4;
        Consos=4;
    }
    if(kana=="ど"){
        Vowel=4;
        Consos=5;
    }
    if(kana=="ば"){
        Vowel=6;
        Consos=1;
    }
    if(kana=="び"){
        Vowel=6;
        Consos=2;
    }
    if(kana=="ぶ"){
        Vowel=6;
        Consos=3;
    }
    if(kana=="べ"){
        Vowel=6;
        Consos=4;
    }
    if(kana=="ぼ"){
        Vowel=6;
        Consos=5;
    }
    if(kana=="ぱ"){
        Vowel=6;
        Consos=1;
    }
    if(kana=="ぴ"){
        Vowel=6;
        Consos=2;
    }
    if(kana=="ぷ"){
        Vowel=6;
        Consos=3;
    }
    if(kana=="ぺ"){
        Vowel=6;
        Consos=4;
    }
    if(kana=="ぽ"){
        Vowel=6;
        Consos=5;
    }
    if(kana=="ゃ"){
        Vowel=8;
        Consos=1;
    }
    if(kana=="ゅ"){
        Vowel=8;
        Consos=3;
    }
    if(kana=="ょ"){
        Vowel=8;
        Consos=5;
    }
}

function KanaToRomaji (kana:string): [number, number]  {
    ChangeNum(kana);
    return [Vowel , Consos];
}

export default KanaToRomaji;