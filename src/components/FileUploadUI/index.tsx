export {};
// import { useState, useRef } from "react";
// import { useAsyncCallback } from "react-async-hook";
// import Box from "@mui/material/Box";
// import CircularIntegration from "./circularintegration.js";

// const initialState = {
//   file: null,
// };

// const FileUploadUI = () => {
//   const inputRef = useRef(null);
//   const [formState, setFormState] = useState(initialState);
//   const [success, setSuccess] = useState(false);

//   const uploadFile = async (file: any) => {
//     if (!file) return;

//     /* アップロード処理に見立てた時間のかかる処理 */
//     const sleep = (ms: any) =>
//       new Promise((resolve) => setTimeout(resolve, ms));
//     await sleep(5000);

//     /* アップロード処理が成功したらフォームの状態を
//        初期化してsuccessステートをtrueにする */
//     setFormState(initialState);
//     setSuccess(true);
//   };

//   const onFileInputChange = async (event: any) => {
//     const file = event.target.files[0];
//     await uploadFile(file);
//   };

//   const clickFileUploadButton = () => {
//     setSuccess(false);
//     if (inputRef.current) {
//       (inputRef.current as HTMLInputElement).click();
//     }
//   };

//   const asyncEvent = useAsyncCallback(onFileInputChange);

//   return (
//     <Box>
//       <CircularIntegration
//         onClick={clickFileUploadButton}
//         asyncEvent={asyncEvent}
//         success={success}
//         component="label"
//         text={asyncEvent.loading ? "..." : "Upload File"}
//       />
//       <input hidden ref={inputRef} type="file" onChange={asyncEvent.execute} />
//     </Box>
//   );
// };

// export default FileUploadUI;
