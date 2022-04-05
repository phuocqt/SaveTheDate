import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Heart from "../Heart";
import "./Footer.scss";

function Footer(props) {
  return (
    <div>
      <Box className="footer">
        <Typography
          style={{ fontFamily: "Great Vibes" }}
          className="footer-couple_name"
        >
          Văn Phước & Mai Trâm
        </Typography>

        <Heart className="" />
        <Box>
          <Typography variant="h5" className="footer-poem">
            Tình yêu như lốp với săm.
          </Typography>
          <Typography variant="h5" className="footer-poem">
            Săm mà bị hỏng lốp nằm với ai?
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
