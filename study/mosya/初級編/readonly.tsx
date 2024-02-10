// 組み込みの型ユーティリティReadonly<T>を使用せず、T のすべてのプロパティを読み取り専用にする型を実装

// MyReadonly<T>を実装してください
// MyReadonlyは、Tのプロパティをすべて読み取り専用にする型です

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

/**
 * [K in keyof T]の意味は、Tのプロパティ名を一つずつ取得することです
 * T[K]の意味は、TのプロパティKの型を取得することです
 * 例えば、Tが{ name: string, age: number }の場合、T['name']はstring型になります
 */

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

console.log(todo.title);
