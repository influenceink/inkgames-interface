import { FC, useState, useContext } from 'react';
import { styled, Box } from '@mui/material';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { PlayMusic } from '../PlayMusic';
import {RightSocialBar} from '../RightSocialBar';
import {ScrollDown} from '../ScrollDown';

import { FOOTER_HEIGHT } from '../../utils/constants';

import background from '../../assets/img/home-bg.jpg';
import { LeftNavigation } from '../LeftNavigation';
import { LoginNavigation } from '../LoginNavigation';
import { DashboardNavigation } from '../DashboardNavigation';
import { ZIPCodeNavigation } from '../ZIPCodeNavigation';

import { AuthContext } from '../../contexts';

export const Layout: FC = ({ children }) => {

	const { authorized } = useContext(AuthContext);

	const [open, setOpen] = useState(false);
	const toggleNavigation = () => setOpen((status) => !status);

	const [loginOpen, setLoginOpen] = useState(false);
	const toggleLoginNavigation = () => setLoginOpen((status) => !status);

	const [dashboardOpen, setDashboardOpen] = useState(false);
	const toggleDashboardNavigation = () => setDashboardOpen((status) => !status);

	const [zipcodeOpen, setZipcodeOpen] = useState(false);
	const toggleZipcodeNavigation = () => setZipcodeOpen((status) => !status);

	return (
		<LayoutWrapper>
			<Box component='header'>
				<Header toggleNavigation={toggleNavigation} toggleLoginNavigation={authorized ? toggleDashboardNavigation : toggleLoginNavigation}/>
			</Box>
			<LeftNavigation open={open} handleClose={toggleNavigation} />
			<LoginNavigation open={loginOpen} handleClose={toggleLoginNavigation} openDashboard={toggleDashboardNavigation}/>
			<DashboardNavigation open={dashboardOpen} handleClose={toggleDashboardNavigation} openZipcodeNavigation={toggleZipcodeNavigation}/>
			<ZIPCodeNavigation open={zipcodeOpen} handleClose={() => {toggleZipcodeNavigation(); toggleDashboardNavigation();}}/>
			<Box component='main'>
				{children}
			</Box>
			<Box>
				<PlayMusic />
			</Box>
			<RightSocialBar />
			<ScrollDown />
		</LayoutWrapper>
	);
};

const LayoutWrapper = styled('div')`
	min-height: 100vh;
	//background: url(${background});
	background-size: cover;
	background-position: center;
	position: relative;
	overflow: clip;
`;