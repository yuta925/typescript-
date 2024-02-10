// Firstを実装してください
type First<K extends any[]> = K extends [infer U, ...K] ? U : never;
// infer Uは、配列の最初の要素の型を推論することです
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
