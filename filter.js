const numbers = [1,5,14,8,35];
const searchNumber = numbers.filter((number)=>{
    return number %5 === 0;  //5の倍数の整数だけを抽出
});
console.log(searchNumber);

const characters = [
    {name:"zacht",age:35},
    {name:"にんじゃ",age:0},
    {name:"夢子",age:24}
];
const searchCharacters = characters.filter((character)=>{
    return character.age < 30;  //年齢が30歳未満のデータだけを抽出
});
searchCharacters.forEach((character)=>{console.log(character.name)});
//データが縦並びに、かつ名前(nameの値)だけを出力するように設定
