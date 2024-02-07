/**
 *  || はOR演算子、&& はAND演算子
 */

// 左項がfalsyな値の場合、右項の値が使用される
const foo = undefined || null || 0 || NaN || "" || "foo";
console.log(foo);
// => foo

// 左項がtruthyな値の場合、右項の値が使用される
const hoge = 100 && [] && {} && "hoge";
console.log(hoge);
// => hoge
