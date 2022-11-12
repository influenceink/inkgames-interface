import { Drawer as MuiDrawer, styled } from '@mui/material';

import { DRAWER_WIDTH } from '../../utils/constants';
import { navClosedMixin, navOpenedMixin } from '../../styles/mixins';

import { LeftNavigationDrawerContent } from './LeftNavigationDrawerContent';

interface NavigationProps {
	open: boolean | undefined;
	handleClose: () => void;
}

export const LeftNavigation = ({ open, handleClose }: NavigationProps) => {
	return (
		<Drawer open={open} onClose={handleClose}>
			<LeftNavigationDrawerContent handleClose={handleClose}/>
		</ Drawer>
	);
};

const Drawer = styled(MuiDrawer)`
	max-width: 400px;
	z-index: 1202;
	& .MuiDrawer-paper{
		background-color: white;
	}
	& .MuiBackdrop-root{
		background-color: transparent;
	}
	@media screen and (max-width: 660px) {
		max-width: 100vw;
	}
`;