import * as React from 'react';
import { adaptV4Theme } from '@mui/material/styles';
import { Box } from '~/box';
import { styled, ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@mui/material';
import { Divider } from '~/divider';
import { List } from '~/list';
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Paper } from '~/paper';
import { IconButton } from '@mui/material';
import { Tooltip } from '~/tooltip';
import { ArrowRight } from '@mui/icons-material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Home } from '@mui/icons-material';
import { Settings } from '@mui/icons-material';
import { People } from '@mui/icons-material';
import { PermMedia } from '@mui/icons-material';
import { Dns } from '@mui/icons-material';
import { Public } from '@mui/icons-material';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const data = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <Public />, label: 'Hosting' },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

function CustomizedList_() {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ display: 'flex' }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider
          theme={createTheme(adaptV4Theme({
            components: {
              MuiListItemButton: {
                defaultProps: {
                  disableTouchRipple: true,
                },
              },
            },
            palette: {
              mode: 'dark',
              primary: { main: 'rgb(102, 157, 246)' },
              background: { paper: 'rgb(5, 30, 52)' },
            },
          }))}
        >
          <Paper elevation={0} sx={{ maxWidth: 256 }}>
            <FireNav component="nav" disablePadding>
              <ListItemButton component="a" href="#customized-list">
                <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                <ListItemText
                  sx={{ my: 0 }}
                  primary="Firebash"
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }}
                />
              </ListItemButton>
              <Divider />
              <ListItem component="div" disablePadding>
                <ListItemButton sx={{ height: 56 }}>
                  <ListItemIcon>
                    <Home color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Project Overview"
                    primaryTypographyProps={{
                      color: 'primary',
                      fontWeight: 'medium',
                      variant: 'body2',
                    }}
                  />
                </ListItemButton>
                <Tooltip title="Project Settings">
                  <IconButton
                    size="large"
                    sx={{
                      '& svg': {
                        color: 'rgba(255,255,255,0.8)',
                        transition: '0.2s',
                        transform: 'translateX(0) rotate(0)',
                      },
                      '&:hover, &:focus': {
                        bgcolor: 'unset',
                        '& svg:first-of-type': {
                          transform: 'translateX(-4px) rotate(-20deg)',
                        },
                        '& svg:last-of-type': {
                          right: 0,
                          opacity: 1,
                        },
                      },
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        height: '80%',
                        display: 'block',
                        left: 0,
                        width: '1px',
                        bgcolor: 'divider',
                      },
                    }}
                  >
                    <Settings />
                    <ArrowRight
                      sx={{ position: 'absolute', right: 4, opacity: 0 }}
                    />
                  </IconButton>
                </Tooltip>
              </ListItem>
              <Divider />
              <Box
                sx={{
                  bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                  pb: open ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setOpen(!open)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: open ? 0 : 2.5,
                    '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                  }}
                >
                  <ListItemText
                    primary="Build"
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                    }}
                    secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                    }}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                      transition: '0.2s',
                    }}
                  />
                </ListItemButton>
                {open &&
                  data.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                    >
                      <ListItemIcon sx={{ color: 'inherit' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 'medium',
                        }}
                      />
                    </ListItemButton>
                  ))}
              </Box>
            </FireNav>
          </Paper>
        </ThemeProvider>
      </StyledEngineProvider>
    </Box>
  );
}

export const CustomizedList = () => <CustomizedList_ />;
