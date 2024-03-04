import { useState } from "react";

const Test = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      Test
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Test;
