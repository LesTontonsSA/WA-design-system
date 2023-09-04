import { Theme } from '@mui/system/createTheme'

interface Variables {
  toolbarHeight: string
  toolbarHeightCondensed: string
  toolbarDirection: 'row' | 'column'
}

export const variables: Variables = {
  toolbarHeight: '144px',
  toolbarHeightCondensed: '93px',
  toolbarDirection: 'row',
}

export const createPageContainerStyle = (theme: Theme) => ({
  paddingTop:
    variables.toolbarDirection === 'row'
      ? variables.toolbarHeightCondensed
      : variables.toolbarHeight,
  [theme.breakpoints.down('md')]: {
    paddingTop: variables.toolbarHeightCondensed,
  },
})
