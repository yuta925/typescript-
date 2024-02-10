// Includesを実装してください
type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

/**
 * 例えばIncludes<[1, 2, 3], 3>はtrueを返します
 * 例えばIncludes<[1, 2, 3], 4>はfalseを返します
 * 例えばIncludes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">はfalseを返します
 */
