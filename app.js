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
  if(text % 3 ==0 && text % 5 ==0) {
    console.log('FizzBuzz');
  } else if (text % 5==0){
    console.log('Buzz');
  } else if (text % 3 ==0){
    console.log('Fizz');
  } else {
    console.log(text);
  }
}
// 1個ずつ処理をする

// let text = 1;
// switch (text) {
//   case text % 3 == :
    
//     break;

//   default:
//     break;
// }


// let fish = confirm('あなたは魚が好きですか？');
// if(fish){
//   console.log('あなたをさかなクンと呼びます');
// } else{
//   console.log('さかなくんまで後少しです')
// }
// console.log(fish);

// let fruit = prompt('あなたの好きなフルーツは何ですか');
// 私の好きなフルーツは  です。
// console.log(fruit);
// console.log(`私の好きなフルーツは、${fruit}です`)
// バッククウォート``

// りんご　青森産が美味しいです
// みかん　温州みかんがお勧めです
// バナナ　フィリピンが名産です
// 桃　と言えば岡山ですね
// その他　何かしらのメッセージ

let fruit = prompt('あなたの好きなフルーツは何ですか');
switch(true){
  case fruit === 'りんご':
    console.log('青森県産が美味しいです');
    break;
  case fruit === 'みかん':
    console.log('温州みかんがお勧めです');
  case fruit === 'バナナ':
    console.log('フィリピンが名産です');
  case fruit === '桃':
    console.log('と言えば岡山です')
  default:
    console.log('あなたはニッチなフルーツが好きなんですね');
    break;
}

function getAge(age){
  console.log(2019 - age);
}

getAge(1988);