import React from 'react';

type MyAwaited<K> = K extends Promise<infer R> ? R : never;
type ExampleType = Promise<string>;

/* 
 *Promiseは、非同期処理の最終結果（成功時の値または失敗時の理由）を表します
 *Promise<infer R>は、Promiseのジェネリック型を推論することです
 */

type Result = MyAwaited<ExampleType>; // string


