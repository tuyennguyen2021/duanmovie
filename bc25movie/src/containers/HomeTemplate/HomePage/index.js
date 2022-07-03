import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
export default function HomePage() {
  return (
    <div>
      <Button variant="text" color="success">
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack>
      <h1 className="demo"> hello cybersoft</h1>
    </div>
  );
}
