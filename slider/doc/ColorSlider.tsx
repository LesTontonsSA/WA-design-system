import * as React from 'react';
import { Box } from '~/box';
import { Slider } from '~/slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function ColorSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
      />
    </Box>
  );
}