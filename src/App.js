import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import QRCode from "./assets/image-qr-code.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Grid className="root" spacing={0} alignItems="center" justify="center">
        <Card
          sx={{
            maxWidth: 345,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <CardMedia
            component="img"
            image={QRCode}
            sx={{ borderRadius: "15px", width: "90%", margin: "1rem 0" }}
            alt="QR Code"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                fontWeight: "bold",
                padding: "0 .5rem",
                textAlign: "center",
                fontFamily: "Outfit, sans-serif",
              }}
              component="div"
            >
              Improve your front-end skills by building projects
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                padding: "0 1.9rem",
                textAlign: "center",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
