import { Drawer as MuiDrawer, styled } from '@mui/material';

import { NavigationDrawerContent } from './NavigationDrawerContent';

interface NavigationProps {
	open: boolean | undefined;
	handleClose: () => void;
	openZipcodeNavigation: () => void;
}

export const DashboardNavigation = ({ open, handleClose, openZipcodeNavigation }: NavigationProps) => {
	return (
		<Drawer open={open} onClose={handleClose} anchor='right'>
			<NavigationDrawerContent handleClose={handleClose} openZipcodeNavigation={openZipcodeNavigation}/>
		</ Drawer>
	);
};

const Drawer = styled(MuiDrawer)`
	max-width: 300px;
	z-index: 1202;
	& .MuiDrawer-paper{
		background-color: #131416;
	}
	& .MuiBackdrop-root{
		background-color: transparent;
	}
`;