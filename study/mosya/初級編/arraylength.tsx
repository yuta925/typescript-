// 配列の長さを返すLength<T>を実装してください。
type Length<T extends any[]> = T["length"];

/**
 * T extends any[] は、Tが配列であることを示しています
 * T["length"] は、Tのlengthプロパティの型を取得することです
 */

type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

const teslaLengthValue: teslaLength = 4;
const spaceXLengthValue: spaceXLength = 5;

console.log(teslaLengthValue);
console.log(spaceXLengthValue);
