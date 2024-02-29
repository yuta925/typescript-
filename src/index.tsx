import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Input } from "./components/customHookSample";
// import Form from "./components/Form/useState/index";
// import Form from "./components/Form/useForm/index";
import HookForm from "./components/Form/Chakra";
// import { ImageUploader } from "./components/useRefSample";
// import Parent from "./components/useContextSample";
// import { Clock } from "./components/Clock";
// import { Parent } from "./components/useCallbackSample";
// import { Parent } from "./components/Parent";
// import Page from "./components/ContextSample";
// import Hello from "./components/Hello";
// import Name from "./components/Name";
// import Message from "./components/Message";
// import Parent from "./components/ContainerSample";
// import { UseMemoSample } from "./components/useMemoSample";
import { ChakraProvider, Box } from "@chakra-ui/react";
import App from "./App";
import MultipleSelectCheckmarks from "./components/SelectBox";
import Icon from "./components/Icons";
import TextField2 from "./components/TextField";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MultipleSelectCheckmarks />
    <Icon />
    <TextField2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
