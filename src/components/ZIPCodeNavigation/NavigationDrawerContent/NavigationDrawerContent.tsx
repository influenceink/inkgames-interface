import { styled, Box, Typography,
		Button, Divider, Collapse, Avatar, IconButton } from '@mui/material';
import { FC, useState } from 'react';
import { NavHeader } from './NavHeader';
import { makeStyles } from '@mui/styles';
import { NavFooter } from './NavFooter';
import { ZipCodeCard } from './ZipCodeCard';

import ZipCode from '../../../assets/img/zipcode.png';

import React, {useContext} from 'react';
import { AuthContext } from '../../../contexts';

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
	
	const {zipCodes} = useContext(AuthContext);

	return (
		<ContentWrapper className={classes.FlexColumn} id='NavContent'>
			<NavHeader toggleNavigation={handleClose}/>
			<Box className={classes.FlexColumn} sx={{gap: 2, alignItems: 'center', height: '100%'}}>
				<Box className={classes.FlexColumn} sx={{gap: 0.5, alignItems: 'center'}}>
					<img src={ZipCode} alt='zipcode'/>
					<Typography fontSize='1.3rem' lineHeight='1'>{zipCodes.length}</Typography>
					<Typography fontSize='0.6rem' color='#FF1DB4'>TOTAL ZIP CODES OWNED</Typography>
				</Box>
				<Box sx={{display:'flex', gap: '16px 8px', alignItems: 'center', width: '100%', flexWrap: 'wrap'}}>
					{zipCodes.map((code: any, index: number) => {
						<ZipCodeCard key={index} code={code}/>
					})}
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
	@media screen and (max-width: 660px) {
		max-width: initial;
	}
`;