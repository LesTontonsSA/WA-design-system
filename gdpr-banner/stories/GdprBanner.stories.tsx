import * as React from 'react';
import { GdprBanner as Banner} from '../src'
import { Box } from '@mui/material'

export const GdprBanners = () => {
	<Box sx={{background: '#000000', height: '100vh'}} maxWidth={'xl'}>
	<Banner
		bannerTitle="test title"
		backgroundImage={{
			url: 'https://img.freepik.com/premium-photo/gdpr-general-data-protection-regulation-eu-flag-with-blue-photo-background-user-protects-their-data-mobile-phone_155340-1496.jpg',
			alt: 'gdpr-image'
		}}
		layout={'detailed'}
	/>
	</Box>

}