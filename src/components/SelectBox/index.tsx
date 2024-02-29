import {
  FormControl,
  SelectChangeEvent,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { type FC, useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const names = ["SEKAI NO OWARI", "Vaundy", "YOASOBI"];

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelectCheckmarks: FC = () => {
  const [artistName, setArtistName] = useState<string[]>([]);

  /**
   * SelectChangeEvent型はどのような型か？
   * answer: SelectChangeEvent型は、SelectコンポーネントのonChangeイベントの型です。
   */

  const handleChange = (event: SelectChangeEvent<typeof artistName>) => {
    const {
      target: { value },
    } = event;
    setArtistName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="p-32">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          アーティスト名
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={artistName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={artistName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelectCheckmarks;
