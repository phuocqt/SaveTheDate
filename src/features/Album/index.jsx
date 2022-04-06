import { Close } from "@mui/icons-material";
import { Dialog, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Gallery from "react-photo-masonry";
import AlbumSlide from "./AlbumSlide";
import "./grid.css";
import "./styles.scss";

const images = [
  {
    src: "https://live.staticflickr.com/65535/51973342619_71d8f6140b_c.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51973056366_f17924189e_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51973621765_33546041a1_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51972051722_112afa6b3b_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51973342764_100e762dca_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51973621905_4a71ddefde_k.jpg",
    width: "300px",
    height: "200px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966374261_efe706eb79_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966374291_8e594bae7c_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966927765_7576786d11_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966374346_550bcb5c8b_k.jpg",
    width: "300px",
    height: "200px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966654824_589d1c5cea_k.jpg",
    width: "300px",
    height: "200px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966374456_7f5d2bd631_k.jpg",
    width: "300px",
    height: "200px",
  },
  {
    src: "https://live.staticflickr.com/65535/51965367487_7d66320580_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966927970_922df8d7d5_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966654989_bd1793f791_k.jpg",
    width: "300px",
    height: "200px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966374711_646dc92e8f_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51965367727_fd99c148f4_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966928195_f545643f00_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966928270_bc6530e372_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966928520_bafa0bcfff_k.jpg",
    width: "200px",
    height: "300px",
  },
  {
    src: "https://live.staticflickr.com/65535/51966374956_f4efedfbac_k.jpg",
    width: "200px",
    height: "300px",
  },
];

export default function Album() {
  const [open, setOpen] = React.useState(false);
  const [ar, setAr] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let newImages = [];
  return (
    <div className="gallery_wrapper">
      <Typography className="gallery-title">Album Hình Cưới</Typography>
      <Box className="gallery grid wide  ">
        <div
          className="gallery-item row"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          {images.map((image, idx) => (
            <div
              className="l-3 m-3 c-3"
              style={{
                padding: "10px",
              }}
              key={idx}
              onClick={() => {
                handleClickOpen();
                for (let i = 0; i < images.length; i++) {
                  let j = idx + i;
                  if (j < images.length) {
                    newImages[i] = images[j];
                  } else {
                    newImages[i] = images[j - images.length];
                  }
                }
                setAr(newImages);
              }}
            >
              <img src={image.src} />
            </div>
          ))}
        </div>

        <Box>
          <Dialog
            sx={{ position: "relative" }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullScreen
          >
            <Close
              color="primary"
              onClick={handleClose}
              fontSize="large"
              className="diaglog-close"
            ></Close>
            <AlbumSlide images={ar} />
          </Dialog>
        </Box>
      </Box>
    </div>
  );
}
