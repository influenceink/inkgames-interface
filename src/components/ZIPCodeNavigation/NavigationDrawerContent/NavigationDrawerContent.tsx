import { styled, Box, Typography,
		Button, Divider, Collapse, Avatar, IconButton } from '@mui/material';
import { FC, useState } from 'react';
import { NavHeader } from './NavHeader';
import { makeStyles } from '@mui/styles';
import { NavFooter } from './NavFooter';
import { ZipCodeCard } from './ZipCodeCard';

import ZipCode from '../../../assets/img/zipcode.png';

import React from 'react';

interface NavigationProps {
	handleClose: () => void;
}

const useStyles = makeStyles((theme? : any) => ({
	FlexColumn : {
        display: 'flex',
        flexDirection: 'column'
    }
}));

type GradientChipProps = {
	colors?: string[];
  };

export const NavigationDrawerContent = ({ handleClose }: NavigationProps) => {
	const classes = useStyles();

	const [openProfile, setOpenProfile] = useState(false);
	const toggleOpenProfile = () => {
		setOpenProfile(!openProfile);
	}

	function stringAvatar(name: string) {
		return {
		  sx: {
			background: `linear-gradient(to right, #1D1471, #271372, #421277, #6E117F, #AB0F8B, #E10E95)`,
			color: 'white',
			width: '64px',
			height: '64px',
			fontSize: '30px'
		  },
		  children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
		};
	}

	const fileInput = React.useRef<HTMLInputElement>(null);
	
	return (
		<ContentWrapper className={classes.FlexColumn} id='NavContent'>
			<NavHeader toggleNavigation={handleClose}/>
			<Box className={classes.FlexColumn} sx={{gap: 2, alignItems: 'center', height: '100%'}}>
				<Box className={classes.FlexColumn} sx={{gap: 0.5, alignItems: 'center'}}>
					<img src={ZipCode} alt='zipcode'/>
					<Typography fontSize='1.3rem' lineHeight='1'>17</Typography>
					<Typography fontSize='0.6rem' color='#FF1DB4'>TOTAL ZIP CODES OWNED</Typography>
				</Box>
				<Box sx={{display:'flex', gap: '16px 8px', alignItems: 'center', width: '100%', flexWrap: 'wrap'}}>
					<ZipCodeCard />
					<ZipCodeCard />
					<ZipCodeCard />
					<ZipCodeCard />
					<ZipCodeCard />
					<ZipCodeCard />
				</Box>
			</Box>
			<NavFooter />
		</ContentWrapper>
	);
};

const ContentWrapper = styled(Box)`
	justify-content: space-between;
	height: 100%;
	margin: 20px;
	margin-top: 0px;
	max-width: 300px;
`;