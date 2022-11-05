import {
	Home as HomeIcon,
	BarChartOutlined as DashboardIcon,
	CodeOutlined as CodeIcon,
	GitHub as GitHubIcon,
} from '@mui/icons-material';
import { AboutUs } from '../pages/AboutUs';
import { Cryptoclub } from '../pages/Cryptoclub';

import { Home } from '../pages/Home';
import { Liquidink } from '../pages/Liquidink';

import { Route } from '../types/Route';

const routes: Array<Route> = [
	{
		key: 'router-home',
		title: 'Home',
		description: 'Home',
		component: Home,
		path: '/',
		isEnabled: true,
		icon: HomeIcon,
		appendDivider: true,
	},
	{
		key: 'router-liquidink',
		title: 'Liquidink',
		description: 'Liquidink',
		component: Liquidink,
		path: '/liquidink',
		isEnabled: true,
		icon: DashboardIcon,
	},
	{
		key: 'router-cryptoclub',
		title: 'Cryptoclub',
		description: 'Cryptoclub',
		component: Cryptoclub,
		path: '/cryptoclub',
		isEnabled: true,
		icon: GitHubIcon,
	},
	{
		key: 'router-aboutus',
		title: 'About Us',
		description: 'About Us',
		component: AboutUs,
		path: '/about-us',
		isEnabled: true,
		icon: CodeIcon,
	},
];

export default routes;
