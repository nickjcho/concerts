import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";

const MyToggleButton = styled(ToggleButton)(() => ({
  border: "none",
  borderRadius: "12px",
  color: "black",
  font: "inherit",
  padding: "8px 16px",
  textTransform: "none",
  width: "100%",
  "&.Mui-selected": {
    backgroundColor: "#56cfef",
    color: "white"
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#56cfef",
    color: "white"
  }
}));

export default MyToggleButton;