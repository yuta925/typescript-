import { TextField } from "@mui/material";

const TextField2 = () => {
  return (
    <div>
      <TextField
        placeholder="MultiLine with rows: 2 and rowsMax: 4"
        multiline
        rows={2}
        maxRows={4}
      />
    </div>
  );
};

export default TextField2;
