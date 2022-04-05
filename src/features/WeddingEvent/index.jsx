import RoomIcon from "@mui/icons-material/Room";
import { Box, Button, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { pink } from "@mui/material/colors";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./event.scss";

export default function WeddingEvent() {
  return (
    <div className="event_wrapper">
      <Typography className="event-title">Sự Kiện Cưới</Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box>
          <Card sx={{ maxWidth: 250, margin: 5 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/45dfd859dd184042e2a6adaa320ac64b.jpeg"
            />
            <CardContent>
              <Typography variant="h6" bolt>
                TIỆC CƯỚI NHÀ NỮ
              </Typography>

              <MenuItem sx={{ pl: 0 }}>
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pl: 0,
                    pr: 0,
                  }}
                >
                  <RoomIcon
                    fontSize="small"
                    sx={{
                      color: pink[500],
                      minWidth: 1,
                    }}
                  />
                </ListItemIcon>
                <Typography variant="subtitle2">
                  Thôn Mỹ Sơn, Tam Anh Nam,
                </Typography>
              </MenuItem>
              <Typography variant="subtitle2">Núi Thành,Quảng Nam</Typography>
              <MenuItem
                sx={{ display: "flex", justifyContent: "center", pl: 0 }}
              >
                <ListItemIcon>
                  <AccessTimeIcon
                    fontSize="small"
                    sx={{
                      color: pink[500],
                      minWidth: 1,
                    }}
                  />
                </ListItemIcon>
                <Typography variant="subtitle2">10h30 17/04/2022</Typography>
              </MenuItem>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="outlined"
                href="https://goo.gl/maps/igW9qeEaTrC5PMRu7"
                center
              >
                Xem Bản Đồ
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card sx={{ maxWidth: 250, margin: 5 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/d2d08234dd0ece24828f396fa243a1ec.jpeg"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                TIỆC CƯỚI NHÀ NAM
              </Typography>

              <MenuItem sx={{ pl: 0 }}>
                <ListItemIcon
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <RoomIcon
                    fontSize="small"
                    sx={{
                      color: pink[500],
                      minWidth: 1,
                    }}
                  />
                </ListItemIcon>
                <Typography variant="subtitle2">
                  Thôn Trằm,Hướng Tân,
                </Typography>
              </MenuItem>
              <Typography variant="subtitle2">Hướng Hóa,Quảng Trị</Typography>
              <MenuItem
                sx={{ display: "flex", justifyContent: "center", pl: 0 }}
              >
                <ListItemIcon>
                  <AccessTimeIcon
                    fontSize="small"
                    sx={{
                      color: pink[500],
                      minWidth: 1,
                    }}
                  />
                </ListItemIcon>
                <Typography variant="subtitle2">10h30 26/04/2022</Typography>
              </MenuItem>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="outlined"
                href="https://goo.gl/maps/k8jU49LB6kFBCWWX9"
                center
              >
                Xem Bản Đồ
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </div>
  );
}
