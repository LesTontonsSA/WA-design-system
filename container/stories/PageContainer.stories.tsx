import * as React from 'react';
import { Box } from '@mui/material'
import { PageContainer as Container} from '../src';

export const PageContainer = () => (
    <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} maxWidth={"lg"} />
    </Container>
)
