import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Button, IconButton } from "@mui/material";

const Icon = () => {
  return (
    <>
      <Box>
        <Button variant="contained" color="primary" startIcon={<XIcon />} />
        <Button
          variant="contained"
          color="primary"
          startIcon={<FacebookIcon />}
        />
      </Box>
      <Box sx={{ "& button": { m: 1 } }}>
        {/* アイコンをボタンにする例 */}
        <div>
          <IconButton color="secondary">
            <XIcon fontSize="large" />
          </IconButton>
        </div>
      </Box>
    </>
  );
};

export default Icon;
