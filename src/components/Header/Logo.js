import { Box, Typography } from '@mui/material'
import React from 'react'

function Logo() {
	return (
		<Box pb='14px' minWidth='330px'>
			<Typography variant='h2' color={'secondary'} fontFamily={'"Allison", "cursive"'}>
				Cats & friends
			</Typography>
		</Box>
	)
}

export default Logo
