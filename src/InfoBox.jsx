import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import "./InfoBox.css";

export default function InfoBox({ Info }) {
  let INIT_IMAGE =
    "https://media.istockphoto.com/id/2165741070/photo/scenic-views-of-mumbai-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=tZV0KNW-nmP5r2HXrAf_f8LS8rZwf3U6sCJWlgXqRVk=";

  const COLD_URL =
    "https://images.unsplash.com/photo-1542267207-f8127b454605?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbGR8ZW58MHx8MHx8fDA%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1572966101025-e199cab72196?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bm55fGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              Info.temp <= 15
                ? COLD_URL
                : Info.humidity > 80
                ? RAIN_URL
                : HOT_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Info.city}
              {Info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : Info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature : {Info.temp}&deg;C </p>
              <p>Humidity : {Info.humidity} </p>
              <p>Min Temp : {Info.tempMin}&deg;C </p>
              <p>Max Temp : {Info.tempMax}&deg;C </p>
              <p>
                The Weather Can Be Described as <i>{Info.weather}</i> and Feels
                Like {Info.feelsLike}&deg;C{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
