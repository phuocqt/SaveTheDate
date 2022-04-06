import { Close } from "@mui/icons-material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import tnp from "../../images/tnp.png";
import "../Donate/donate.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const pages = ["SỰ KIỆN", "ALBUM CƯỚI", "lỜI CHÚC", "MỪNG CƯỚI"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar
      position="static"
      className="app_bar"
      sx={{ bgcolor: "white", display: "flex" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt="TP"
            variant="square"
            src={tnp}
            sx={{ width: 80, height: 80 }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  md: "none",
                  color: "black",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              Save The Day
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
                sx={{
                  color: "red",
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                // sx={{ color: "blue" }}

                onClick={handleCloseNavMenu}
              >
                <Button
                  variant="text"
                  textAlign="center"
                  sx={{ color: "black" }}
                >
                  SỰ KIỆN
                </Button>
                <Button
                  variant="text"
                  textAlign="center"
                  sx={{ color: "black" }}
                >
                  ALBUM CƯỚI
                </Button>
                <Button
                  variant="text"
                  textAlign="center"
                  sx={{ color: "black" }}
                >
                  LỜI CHÚC
                </Button>
                <Button
                  variant="text"
                  textAlign="center"
                  sx={{ color: "black" }}
                  onClick={handleClickOpen}
                >
                  MỪNG CƯỚI
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              SỰ KIỆN
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              ALBUM CƯỚI
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              LỜI CHÚC
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              MỪNG CƯỚI
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
              onClick={handleClickOpen}
            >
              MỪNG CƯỚI
            </Button>
          </Box>
        </Toolbar>
      </Container>
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
    </AppBar>
  );
};
export default Navbar;
