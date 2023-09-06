import { Box, styled } from '@mui/material'
import { createPageContainerStyle } from '../styles/style'

const PageBox = styled(Box)(({ theme }) => createPageContainerStyle(theme))

export default PageBox
