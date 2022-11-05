import { styled, Typography, Box } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_CRYPTOCLUB } from '../utils/constants';

import background from '../assets/img/cryptoclub-bg.jpg';

export const Cryptoclub = () => {
	const context = useContext(AppContext);

	return (
		<>
			<Helmet>
				<title>
					{PAGE_TITLE_CRYPTOCLUB} | {APP_TITLE}
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
