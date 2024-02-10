import React from "react";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

/* _____________ ここにコードを記入 _____________ */

type MyPick<T, K extends keyof T | string | number | symbol> = {
  [P in K]: P extends keyof T ? T[P] : never;
};

/**
 * [P in K]の意味は、Kのプロパティ名を一つずつ取得することです
 * P extends keyof T ? T[P] : neverの意味は、PがTのプロパティ名であれば、T[P]の型を返し、そうでなければneverの型を返すことです
 */

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
