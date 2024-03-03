import React, { useState } from "react";

const FileInput = (): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  return (
    <div className="App">
      <div className="App-form">
        <input
          name="file"
          type="file"
          accept="image/*"
          onChange={onChangeFile}
        />
        <input type="button" disabled={!file} value="送信" />
      </div>
    </div>
  );
};

export default FileInput;
export {};
