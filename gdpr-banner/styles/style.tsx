
import { Box, styled } from '@mui/material'

interface ResponsiveBannerProps {
  layout: 'simple' | 'detailed' | 'navigation'
}

interface ResponsiveColors {
  background: string;
  backgroundOpposite: string;
  text: string;
  textOpposite: string;
}
const colors: ResponsiveColors = {
  background: '#FBFBFB',
  backgroundOpposite: '#000000',
  text: '#000000',
  textOpposite: '#ffffff'
}


export const ResponsiveBanner = styled(Box)<ResponsiveBannerProps>(({ theme, layout }) => ({
  position: 'relative',
  minHeight: '330px',
  maxHeight: '460px',
  height: '40vw',
  '&.carousel-content': {
    minHeight: 'auto',
    height: 'auto',
    maxHeight: 'none',
  },

  '.no-interaction': {
    pointerEvents: 'none',
  },
  '.banner-image': {
    position: 'absolute !important',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  '.content-wrapper': {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1,
    textDecoration: 'none',
  },
  '.banner-container__logo': {
    width: '200px',
  },
  '.banner-logo': {
    width: '100%',
  },
  '.banner-container__title': {
    maxWidth: '666px',
  },
  '.banner-container__text': {
    maxWidth: '666px',
    '&.desktop': {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    '&.mobile': {
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'block',
      },
    },
  },

  '.banner-container': {
    maxWidth: theme.breakpoints.values.xl,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'flex-end',
    height: '100%',
    paddingInline: theme.spacing(2),
    [theme.breakpoints.down('sm')]: (() =>
      layout === 'navigation'
        ? {
            flexDirection: 'column',
          }
        : {})(),
  },
  '.banner-container__detail': {
    flexGrow: 1,
    paddingBottom: '1.25rem',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '3.75rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '6.25rem',
    },
  },

  '.banner-container__actions': {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    paddingInline: theme.spacing(2),
    flexShrink: 0,
    height: '100%',
    minWidth: '200px',
    justifyContent: 'flex-end',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      paddingBlock: theme.spacing(2),
      flexShrink: 1,
      justifyContent: 'center',
      backgroundColor: colors.backgroundOpposite,
      '.action-text': {
        display: 'inline-block',
        opacity: 1,
      },
      '.action-button': {
        color: colors.textOpposite,
        backgroundColor: colors.backgroundOpposite,
      },
    },
  },
  '.action-text': {
    display: 'none',
    opacity: 0,
    transform: 'translateX(-10px)',
    transition: 'opacity 0.3s ease-in',
  },

  '.action-button': {
    borderRadius: 0,
    color: colors.text,
    backgroundColor: colors.background,
    fontSize: '0.875rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
  },
  '.action-background': {
    position: 'absolute',
    insetInlineStart: '100%',
    insetBlockStart: '50%',
    opacity: 0,
    width: '1px',
    height: '1px',
    transition:
      'transform 0.3s ease-in, inset 0.3s ease-in, opacity 0.5s ease, width 0.3s ease, height 0.3s ease',
    backgroundColor: colors.backgroundOpposite,
  },

  '&:hover': {
    '.action-button': {
      color: colors.textOpposite,
      backgroundColor: colors.backgroundOpposite,
    },
    '.banner-container__actions': {
      '.action-text': {
        display: 'inline-block',
        opacity: 1,
      },
      '.action-background': {
        opacity: 1,
        insetInlineStart: '-20%',
        transform: 'scale(5)',
        width: '100%',
        height: '100%',
      },
    },
  },
}))
