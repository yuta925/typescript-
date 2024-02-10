import React from "react";
type Concat<K extends any[], U extends any[]> = [...K, ...U];
type Result = Concat<[1], [2]>; // expected to be [1, 2]

// Array.concat()メソッドは、配列に他の配列や値を結合し、新しい配列を返します
