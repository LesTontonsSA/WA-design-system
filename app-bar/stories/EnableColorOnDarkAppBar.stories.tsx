import * as React from 'react';
import { adaptV4Theme } from '@mui/material/styles';
import { AppBar } from '~/app-bar';
import { Stack } from '~/stack';
import { Toolbar } from '@mui/material';
import { Typography } from '~/typography';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@mui/material';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        size="large">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme(adaptV4Theme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
}));

function EnableColorOnDarkAppBar_() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary" enableColorOnDark>
            {appBarLabel('enableColorOnDark')}
          </AppBar>
          <AppBar position="static" color="primary">
            {appBarLabel('default')}
          </AppBar>
        </ThemeProvider>
      </StyledEngineProvider>
    </Stack>
  );
}

export const EnableColorOnDarkAppBar = () => <EnableColorOnDarkAppBar_ />;
