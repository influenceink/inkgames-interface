import { styled, Typography, Box } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';

import background from '../assets/img/home-bg.jpg';

export const Home = () => {
	const context = useContext(AppContext);

	return (
		<>
			<Helmet>
				<title>
					{PAGE_TITLE_HOME} | {APP_TITLE}
				</title>
			</Helmet>
			<StyledBox>

			</StyledBox>
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
