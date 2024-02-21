import { z } from "zod";

/**
 * 空文字の型はstringであるので、空文字をnullに変換する
 * Parameters<typeof z.preprocess>[1] はzodの型定義
 * Parametersは関数の引数の型を取得する
 * preprocessとは、zodのスキーマに対して前処理を行う関数
 */
const castToValorNull = <T extends Parameters<typeof z.preprocess>[1]>(
  schema: T
) =>
  z.preprocess((val) => {
    if (typeof val === "string") {
      const trimmedVal = val.trim();
      return trimmedVal.length > 0 ? trimmedVal : null;
    }
    return null;
  }, schema);

// フォームのsubmit時に走るバリデーションスキーマ
export const sampleFormSchema = z.object({
  name: castToValorNull(z.string()),
  nullableName: castToValorNull(z.string().nullable()),
  selectedValue: castToValorNull(z.string()),
  nullableSelectedValue: castToValorNull(z.string().nullable()),
  // 最低でも1つは選択する必要がある
  multiOptions: z.array(z.string()).min(1),
});

export type SampleFormSchema = z.infer<typeof sampleFormSchema>;
