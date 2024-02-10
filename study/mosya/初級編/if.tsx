// type Ifを実装してください。
type If<C extends boolean, U, K> = C extends true ? U : K;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
