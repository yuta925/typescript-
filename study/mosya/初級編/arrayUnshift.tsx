import React from 'react';

// Unshiftを実装してください
type Unshift<T extends any[], U> = [U, ...T];

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]

const result: Result = [0, 1, 2];
console.log(result);

// Array.unshift()メソッドは、配列の先頭に1つ以上の要素を追加し、新しい配列の長さを返します
