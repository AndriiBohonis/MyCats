import FavoriteIcon from '@mui/icons-material/Favorite'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import { Box, Divider, ListItem, ListItemButton, ListItemIcon, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import { Colors } from '../../styles'
import { MyList } from './styledComponents'

function IconActions() {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	let styleListItem = {
		display: 'flex',
		color: !isDesktop && Colors.secondary,
		justifyContent: 'center',
	}

	let styleBox = isDesktop
		? { flexGrow: 0 }
		: {
				display: 'flex',
				justifyContent: 'centre',
				background: Colors.shaft,
				position: 'fixed',
				bottom: 0,
				left: 0,
				width: '100%',
				zIndex: 99,
				justifyContent: 'center',
				alignItems: 'center',
				borderTop: `1px solid ${Colors.border}`,
		  }

	let color = { color: isDesktop ? Colors.muted : Colors.secondary }
	// Colors.secondary;

	let minWidth = useMediaQuery(theme.breakpoints.up('lg')) ? '56pt' : '20pt'

	return (
		<Box sx={styleBox}>
			<MyList type='row'>
				<ListItem xs={styleListItem} disablePadding>
					<ListItemButton sx={styleListItem}>
						<ListItemIcon sx={{ justifyContent: 'center', minWidth: minWidth }}>
							<FavoriteIcon sx={color} />
						</ListItemIcon>
					</ListItemButton>
				</ListItem>
				<Divider flexItem orientation='vertical' />
				<ListItem disablePadding>
					<ListItemButton sx={styleListItem}>
						<ListItemIcon sx={{ justifyContent: 'center', minWidth: minWidth }}>
							<PersonIcon sx={color} />
						</ListItemIcon>
					</ListItemButton>
				</ListItem>
				<Divider flexItem orientation='vertical' />
				<ListItem disablePadding>
					<ListItemButton sx={{ justifyContent: 'center' }}>
						<ListItemIcon sx={{ justifyContent: 'center', minWidth: minWidth }}>
							<NotificationsIcon sx={color} />
						</ListItemIcon>
					</ListItemButton>
				</ListItem>
			</MyList>
		</Box>
	)
}

export default IconActions
