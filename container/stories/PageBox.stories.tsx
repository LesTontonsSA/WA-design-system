import * as React from 'react';
import { Box } from '@mui/material'
import { PageBox as Container} from '../src';

export const PageBox = () => (
    <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} maxWidth={"xl"} />
    </Container>
)
