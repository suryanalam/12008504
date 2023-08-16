import React from "react";
import "..//styles/TrainDetailCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TrainDetailCard = ( TrainDetails ) => {
  console.log(TrainDetails, "in card");
  const data = {...TrainDetails}
  console.log(data,'data')
  return (
    <section className="card-bg">
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.data.trainName}
          </Typography>
          <Typography variant="h5" component="div">
          {data.data.trainNumber}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            sleeper: {data.data.price.sleeper}, AC:  {data.data.price.AC}
          </Typography>
          <Typography variant="body2">  
          sleeper: {data.data.seatsAvailable.sleeper}, AC:  {data.data.seatsAvailable.AC}
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};

export default TrainDetailCard;
