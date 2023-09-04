import { Container, styled } from '@mui/material'
import { createPageContainerStyle } from './style'

const PageContainer = styled(Container)(({ theme }) => createPageContainerStyle(theme))

export default PageContainer