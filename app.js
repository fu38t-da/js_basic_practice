// 80点以上 合格
// 50点以上 惜しい
// 30点以上 残念
// 変数（代入可能）
// console.logで出力

let score = 60;
if (score >= 80) {
  console.log(`${score}点、合格`)
} else if (score >= 50) {
  console.log(`${score}点、惜しい`);
} else if (score >= 30) {
  console.log(`${score}点、残念`);
} else {
  console.log(`${score}点、また来年`);
}

// ifとforの練習
for(let i = 1; i <=30; i++){
  if(i % 3 ==0){
    console.log('アホ');
  }else{
    console.log(i);
  }
}

// 5の倍数と3の倍数の時にメッセージ
// console.logで出力
// それ以外は数字
// 1　〜　100まで

for(let num = 1; num <=100; num++){
  if(num % 3 ==0 || num % 5 ==0){
    console.log('世界の車窓から');
  }else{
    console.log(num);
  }
}

// 3で割り切れる時はFizz
// 5で割り切れる時はBuzz
// 両方で割り切れる時はFizzBuzz
// それ以外は1〜100まで
// 値はconsole.logで出力
for (let text = 1; text <= 100; text++) {
  if(text % 3 ==0 && text % 5 ==0){
    console.log('FizzBuzz');
  }else if (text % 5==0){
    console.log('Buzz');
  }
  else if (text % 3 ==0){
    console.log('Fizz');
  }else {
    console.log(text);
  }
}

// let text = 1;
// switch (text) {
//   case text % 3 == :
    
//     break;

//   default:
//     break;
// }