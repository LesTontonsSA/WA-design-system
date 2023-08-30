import { createTheme } from '../src';

import { adaptV4Theme } from '@mui/material/styles';

export const light_theme = () => createTheme(adaptV4Theme('light'));

export const dark_theme = () => createTheme(adaptV4Theme('dark'));
