import { tv } from "tailwind-variants";

export const inputBox = tv({
  base: "border border-gray-300 rounded-md w-full p-2",
  variants: {
    isOk: {
      true: "border-green-500",
      false: "border-red-500",
    },
    size: {
      base: "",
      sm: "p-1",
    },
  },
});
