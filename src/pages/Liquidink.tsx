import { styled, Typography, Box } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { RightSocialBar } from '../components/RightSocialBar';

import { APP_TITLE, PAGE_TITLE_LIQUIDINK } from '../utils/constants';

import background from '../assets/img/liquidink-bg.jpg';

export const Liquidink = () => {

	return (
		<>
			<Helmet>
				<title>
					{PAGE_TITLE_LIQUIDINK} | {APP_TITLE}
				</title>
			</Helmet>
			<StyledBox>

			</StyledBox>
			<RightSocialBar color='#FFE500'/>
		</>
	);
};

const StyledBox = styled(Box)`
	min-height: 100vh;
	background: url(${background});
	background-size: cover;
	background-position: center;
	position: relative;
	overflow: clip;
`
