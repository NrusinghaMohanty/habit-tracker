import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import type { RootState } from "../store/store";
import React from "react";
import { useSelector } from "react-redux";

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {habits.map((habit) => {
          return (
            <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
              <Grid container alignItems="center">
                <Grid>
                  <Typography variant="h6">{habit.name}</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {habit.frequency}
                  </Typography>
                </Grid>
                <Grid>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
                  >
                    <Button variant="outlined">Mark Complete</Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </Box>
    </>
  );
};

export default HabitList;
