const numbers = [1,5,14,8,35];
//奇数だけを整数値として出力させるようにmapメソッドを使って設定
const oddNumbers = numbers.map((number)=>{
    if(number %2 == 0){
        return NaN;  //偶数ならNaNと表示
    }else{
        return number;  //奇数なら実数値を表示
    }
});
console.log(oddNumbers);
