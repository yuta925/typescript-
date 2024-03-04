import { Input } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const Photo = () => {
  // useState()で画像のパスを保持
  // ※デフォルトで表示する画像を初期値で指定(この例ではpublicフォルダのdefault-profile.pngを指定)
  const [profileImage, setProfileImage] = useState("image.png");

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    // React.ChangeEvent<HTMLInputElement>よりファイルを取得
    const fileObject = e.target.files[0];
    // オブジェクトURLを生成し、useState()を更新
    setProfileImage(window.URL.createObjectURL(fileObject));
  };

  return (
    <form onSubmit={() => console.log("投稿!")}>
      <div className="flex justify-center items-center mt-8">
        <img src={profileImage} className="h-32 w-32" />
        <input
          type="file"
          accept="image/*"
          onChange={onFileInputChange}
          className="pl-4"
        />
        <Input></Input>
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </div>
    </form>
  );
};

export default Photo;
