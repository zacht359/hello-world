let xValue = 0; //自分ｘ側にやってくる車の台数を定義し、初期値を0とする。
let yValue = 0; //相棒ｙ側にやってくる車の台数を定義、初期値を0とする。
xValue = 3; //自分の方にやってくる車の台数を入れる（上書きで更新）
yValue = 0; //相棒の方にやってくる車の台数を入れる（上書きで更新）
console.log('x「車両接近！流す。」');
if(yValue == 0){
    console.log('y「了解。どうぞ。」');
    console.log(`x「${xValue}台いきます。」`);
    console.log('y「了解。」');
    console.log('...');
    console.log(`y「${xValue}台目、通過確認でオープン」`);
    xValue = 0; //自分側の車の台数を空っぽにしておく
    console.log('x「同じくオープン。」');  
}else{
    console.log('y「了解。どうぞ。」');
    console.log(`x「${xValue}台目が最終。」`);
    console.log('y「了解。」');
    console.log('...');
    console.log(`y「${xValue}台目、通過したので流す。」`);
    xValue = 0; //自分側の車の台数を空っぽにしておく
    console.log('x「了解。どうぞ。」');
}