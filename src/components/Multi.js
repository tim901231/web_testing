import React, { useEffect, useState } from "react";
import {
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Button,
} from "@mui/material";
import * as Tone from "tone";
import useInstruments from "./useInstruments";

const Multi = () => {
  const { piano } = useInstruments();
  const playNote = (instrument, note, duration, elapsed, now) => {
    // note in sharp should be G#4, flat should be in Gb3
    instrument.triggerAttack([note], now + elapsed);
    instrument.triggerRelease([note], now + elapsed + duration);
  };

  const playTest = () => {
    // polyphonic sampler allows multi sound?
    const now = Tone.now();
    playNote(piano, "B3", 0.25, 0, now);

    // piano.triggerAttack(["Eb4"], now);
    // // bassoon.triggerAttackRelease(["Eb2"], 0.5);
    // piano.triggerRelease(["Eb4"], now + 0.25);
    // piano.triggerAttack(["G4"], now + 1.5);
    // piano.triggerRelease(["G4"], now + 3);
    // piano.triggerAttack(["Bb4"], now + 2);
    // piano.triggerRelease(["Bb4"], now + 5);
  };

  return (
    <Grid container sx={{ paddingTop: "18vh" }}>
      <Grid item xs={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(220,220,220,0.1)",
            marginLeft: "5vw",
            marginRight: "5vw",
            color: "rgb(255,255,255)",
            fontSize: 30,
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Channel 1"
            />
            <FormControlLabel control={<Checkbox />} label="Channel 2" />
            <FormControlLabel control={<Checkbox />} label="Channel 3" />
          </FormGroup>
        </Box>
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        <Button
          onClick={() => {
            playTest();
          }}
        >
          Play
        </Button>
      </Grid>
    </Grid>
  );
};

export default Multi;
