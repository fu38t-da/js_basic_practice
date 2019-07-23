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