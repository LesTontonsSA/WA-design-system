import * as React from 'react';
import { Stack } from '~/stack';
import { IconButton } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';

function IconButtonColors_() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary" size="large">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success" size="large">
        <Fingerprint />
      </IconButton>
    </Stack>
  );
}

export const IconButtonColors = () => <IconButtonColors_ />;
