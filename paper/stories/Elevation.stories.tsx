import * as React from 'react';
import { adaptV4Theme } from '@mui/material/styles';
import { Grid } from '~/grid';
import { Paper } from '~/paper';
import { Box } from '~/box';
import { createTheme, ThemeProvider, Theme, StyledEngineProvider, styled } from '@mui/material';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme(adaptV4Theme({ palette: { mode: 'dark' } }));
const lightTheme = createTheme(adaptV4Theme({ palette: { mode: 'light' } }));

function Elevation_() {
  return (
    <Grid container spacing={2}>
      {[lightTheme, darkTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                  <Item key={elevation} elevation={elevation}>
                    {`elevation=${elevation}`}
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </StyledEngineProvider>
        </Grid>
      ))}
    </Grid>
  );
}

export const Elevation = () => <Elevation_ />;
