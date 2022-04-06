import { Close } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { ListItem } from "@mui/material";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import React from "react";
import "./donate.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Donate() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth={true}
        maxWidth="xl"
        ClassName="donate-dialog"
        sx={{
          display: "flex",

          m: "auto",
          // width: "fit-content",
          justifyContent: "center",
        }}
      >
        <DialogActions>
          <Close onClick={handleClose}></Close>
        </DialogActions>
        <ListItem className="donate-title">
          <MailOutlineIcon fontSize="large" sx={{ color: pink[500] }} />
          <Typography variant="h5" sx={{ color: pink[500] }}>
            HỘP MỪNG CƯỚI
          </Typography>
        </ListItem>
        <div className="donate-content">
          <div className="donate-card">
            <span className="donate-target ">MỪNG CƯỚI ĐẾN CHÚ RỂ</span>
            <div className="donate-item_group">
              <span className="donate-item ">Ngân hàng:</span>
              <span className="donate-item ">BIDV</span>
            </div>
            <div className="donate-item_group">
              <span className="donate-item ">Số tài khoản:</span>
              <span className="donate-item "> 56110001113849</span>
            </div>
            <div className="donate-item_group">
              <span className="donate-item ">Chủ tài khoản:</span>
              <span className="donate-item "> Lê văn Phước</span>
            </div>
          </div>
          <div className="donate-card">
            <span className="donate-target ">MỪNG CƯỚI ĐẾN CÔ DÂU</span>
            <div className="donate-item_group">
              <span className="donate-item ">Ngân hàng:</span>
              <span className="donate-item ">Á Châu ACB</span>
            </div>
            <div className="donate-item_group">
              <span className="donate-item ">Số tài khoản:</span>
              <span className="donate-item "> 1211 3877</span>
            </div>
            <div className="donate-item_group">
              <span className="donate-item ">Chủ tài khoản:</span>
              <span className="donate-item "> Phạm Thị Mai Trâm</span>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
