import { Drawer as MuiDrawer, styled } from '@mui/material';

import { NavigationDrawerContent } from './NavigationDrawerContent';

interface NavigationProps {
	open: boolean | undefined;
	handleBackward: () => void;
	handleClose: () => void;
}

export const ZIPCodeNavigation = ({ open, handleBackward, handleClose }: NavigationProps) => {
	return (
		<Drawer open={open} onClose={handleClose} anchor='right'>
			<NavigationDrawerContent handleBackward={handleBackward} handleClose={handleClose}/>
		</ Drawer>
	);
};

const Drawer = styled(MuiDrawer)`
	max-width: 300px;
	z-index: 1202;
	& .MuiDrawer-paper{
		background-color: #131416;
		@media screen and (max-width: 660px) {
			width: 100vw;
		}
	}
	& .MuiBackdrop-root{
		background-color: transparent;
	}
	@media screen and (max-width: 660px) {
		max-width: 100vw;
	}
`;