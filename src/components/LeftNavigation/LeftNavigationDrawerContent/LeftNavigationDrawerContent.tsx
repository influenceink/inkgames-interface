import { Drawer as MuiDrawer, styled, Box } from '@mui/material';
import { FC, useState } from 'react';
import { LeftNavGames } from './LeftNavGames';
import { LeftNavHeader } from './LeftNavHeader';
import { LeftNavMenu } from './LeftNavMenu';
import { LeftNavSocial } from './LeftNavSocial';
import { LeftNavFooter } from './LeftNavFooter';

interface NavigationProps {
	handleClose: () => void;
}

export const LeftNavigationDrawerContent = ({ handleClose }: NavigationProps) => {

	return (
		<ContentWrapper>
			<Box>
				<LeftNavHeader toggleNavigation={handleClose}/>
				<LeftNavMenu />
				<LeftNavGames />
			</Box>
			<Box sx={{display: 'flex', flexDirection: 'column'}}>
				<LeftNavSocial />
				<LeftNavFooter />
			</Box>
		</ContentWrapper>
	);
};

const ContentWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	color: black;
`;