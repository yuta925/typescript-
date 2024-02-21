import { FC } from "react";
// import { useFormContext } from "react-hook-form";
import { inputBox } from "../const";

type ModalOpenFlg = {
  menu: boolean;
};

/**
 * <{ openModal: (type: keyof ModalOpenFlg) => void }>
 * watchとは、指定したフィールドの値を監視することができる
 */

const Maker: FC<{ openModal: (type: keyof ModalOpenFlg) => void }> = ({
  openModal,
}) => {
  //   const { watch } = useFormContext<Inputs>;
  //   watch("maker");
  return (
    <>
      <h1
        className={`${inputBox({
          isOk: true,
          size: "sm",
        })}`}
      >
        Maker
      </h1>
    </>
  );
};

export default Maker;
