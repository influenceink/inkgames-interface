import { styled, Box, Typography,
		Button, Divider, Collapse, Avatar, IconButton } from '@mui/material';
import { FC, useState } from 'react';
import { NavHeader } from './NavHeader';
import { makeStyles } from '@mui/styles';
import { NavFooter } from './NavFooter';

import CashSymbol from '../../../assets/img/cashsymbol.png';
import INKSymbol from '../../../assets/img/inksymbol.png';
import INKToken from '../../../assets/img/inktoken.png';
import DirectConnection from '../../../assets/img/directconnection.png';
import ViralConnection from '../../../assets/img/viralconnection.png';
import ZipCode from '../../../assets/img/zipcode.png';
import EditPhoto from '../../../assets/img/editphoto.png';

import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { ProfileViewer } from './Profile';
import React from 'react';

interface NavigationProps {
	handleClose: () => void;
	openZipcodeNavigation: () => void;
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

export const NavigationDrawerContent = ({ handleClose, openZipcodeNavigation }: NavigationProps) => {
	const classes = useStyles();

	const [openProfile, setOpenProfile] = useState(false);
	const toggleOpenProfile = () => {
		setOpenProfile(!openProfile);
	}

	const [editable, setEditable] = useState(false);
    const toggleEditable = () => {
        setEditable(!editable);
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
					{!editable ? <Avatar {...stringAvatar('THOM MARTINSON')}/> :
						<>
							<IconButton onClick={() => fileInput.current?.click()}>
								<Box sx={{position: 'relative', '&:hover img':{opacity: 1}}}>
									<Avatar {...stringAvatar('THOM MARTINSON')}/>
									<EditPhotoImg src={EditPhoto} alt='editphoto'/>
								</Box>
							</IconButton>
							<input accept="image/*" type="file" id="icon-button-file" style={{display: 'none'}} ref={fileInput}/>
						</>
					}
					<Typography fontSize='0.8rem'>THOM MARTINSON</Typography>
					<Typography fontSize='0.6rem' color='rgba(255,255,255,0.27)'>@thommartinson</Typography>
				</Box>
				<Box className={classes.FlexColumn} sx={{gap: 1, alignItems: 'center', width: '100%'}}>
					<ProfileButton onClick={toggleOpenProfile}>
						<Typography fontSize='0.7rem'>Profile</Typography>
						{!openProfile ? <ArrowDropDown /> : <ArrowDropUp />}
					</ProfileButton>
					<Collapse in={openProfile} sx={{width: '100%'}}>
						<ProfileViewer toggleEditable={toggleEditable} editable={editable}/>
					</Collapse>
					<Collapse in={!openProfile} sx={{width: '100%'}}>
						<Box className={classes.FlexColumn} sx={{gap: 1, alignItems: 'center', width: '100%'}}>
							<Box className={classes.FlexColumn} sx={{gap: 0.5, alignItems: 'center', width: '100%'}}>
								<BalanceBox>
									<Symbol src={CashSymbol} alt='cashsymbol'/>
									<Box className={classes.FlexColumn} sx={{alignItems: 'center', width: '100%'}}>
										<Typography sx={{fontSize: '1.5rem', lineHeight: 1}}>$459</Typography>
										<Typography sx={{fontSize: '0.7rem', color: '#62F61C'}}>CURRENT CASH BALANCE</Typography>
									</Box>
									<StyledButton>
										<ButtonTypography>TRANSFER</ButtonTypography>
									</StyledButton>
								</BalanceBox>
								<BalanceBox>
									<Symbol src={INKSymbol} alt='inksymbol'/>
									<Box className={classes.FlexColumn} sx={{alignItems: 'center', width: '100%'}}>
										<Box sx={{display: 'flex', alignItems: 'center'}}>
											<img src={INKToken} alt='ink token' width='20px'/>
											<Typography sx={{fontSize: '1.5rem', lineHeight: 1}}>&nbsp;2351</Typography>
										</Box>
										<Typography sx={{fontSize: '0.7rem', color: '#FF9D27'}}>CURRENT INK TOKEN BALANCE</Typography>
									</Box>
									<StyledButton sx={{borderBottomColor: '#FF9D27'}}>
										<ButtonTypography>TRANSFER</ButtonTypography>
									</StyledButton>
								</BalanceBox>
							</Box>
							<Divider sx={{width: '100%'}}/>
							<Box sx={{display: 'flex', width: '100%', alignItems:'center', justifyContent:'space-between'}}>
								<BalanceBox className={classes.FlexColumn} sx={{width: '48%', alignItems:'center', padding: '10px 0px'}}>
									<img src={DirectConnection} alt='DirectConnection' width='35px'/>
									<Typography sx={{fontSize: '1.3rem', lineHeight: 1}}>2534</Typography>
									<Typography sx={{fontSize: '0.7rem', color: '#6E6EF9'}}>DIRECT CONNECTIONS</Typography>
								</BalanceBox>
								<BalanceBox className={classes.FlexColumn} sx={{width: '48%', alignItems:'center', padding: '10px 0px'}}>
									<img src={ViralConnection} alt='ViralConnection' width='35px'/>
									<Typography sx={{fontSize: '1.3rem', lineHeight: 1}}>5365</Typography>
									<Typography sx={{fontSize: '0.7rem', color: '#E2FF10'}}>VIRAL CONNECTIONS</Typography>
								</BalanceBox>
							</Box>
							<Divider sx={{width: '100%'}}/>
							<BalanceBox>
								<Symbol src={ZipCode} alt='zipcodesymbol'/>
								<Box className={classes.FlexColumn} sx={{alignItems: 'center', width: '100%'}}>
									<Box sx={{display: 'flex', alignItems: 'center'}}>
										<Typography sx={{fontSize: '1.5rem', lineHeight: 1}}>17</Typography>
									</Box>
									<Typography sx={{fontSize: '0.7rem', color: '#FF1DB4'}}>TOTAL ZIP CODES OWNED</Typography>
								</Box>
								<StyledButton sx={{borderBottomColor: '#FF1DB4'}} onClick={()=>{handleClose(); openZipcodeNavigation();}}>
									<ButtonTypography sx={{color: 'white'}}>VIEW</ButtonTypography>
								</StyledButton>
							</BalanceBox>
							<Divider sx={{width: '100%'}}/>
						</Box>
					</Collapse>
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

const ProfileButton = styled(Button)`
	border: none;
	background-color: #1A202D;
	width: 100%;
	font-size: 0.7rem;
	display: flex;
	justify-content: space-between;
	color: white;
`;

const BalanceBox = styled(Box)`
	padding: 20px 0px;
	background-color: #1A202D;
	border-radius: 5px;
	width: 100%;
	position: relative;
`;

const Symbol = styled('img')`
	width: 50px;
	height: 50px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 10px;
`;

const StyledButton = styled(Button)`
	text-align: center;
	height: 0;
	position: absolute;
	border-bottom: 30px solid #62F61C;
	border-left: 20px solid transparent;
	box-sizing: content-box;
	right: 0;
	padding-top: 0px;
	padding-bottom: 4px;
	bottom: 0;
	min-width: 30px;
`;

const ButtonTypography = styled(Typography)`
	position: absolute;
	top: 13px;
	left: 50%;
	color: #1A202D;
	font-size: 0.5rem;
	transform: translateX(-60%);
`

const EditPhotoImg = styled('img')`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: .3s ease;
`