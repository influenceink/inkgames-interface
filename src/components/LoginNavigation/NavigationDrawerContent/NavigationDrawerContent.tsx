import { Drawer as MuiDrawer, 
		styled, Box, Typography, 
		Checkbox, FormControlLabel, 
		Button, IconButton, FilledInput, InputAdornment } from '@mui/material';
import { FC, useState } from 'react';
import { NavHeader } from './NavHeader';
import { makeStyles } from '@mui/styles';
import { NavFooter } from './NavFooter';

import Logo from '../../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';

interface NavigationProps {
	handleClose: () => void;
	openDashboard: () => void;
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

export const NavigationDrawerContent = ({ handleClose, openDashboard }: NavigationProps) => {
	const classes = useStyles();
	const [passwordShown, setPasswordShown] = useState(false);
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	  };

	const handleSignIn = () => {
		handleClose();
		openDashboard();
	}
	return (
		<ContentWrapper className={classes.FlexColumn}>
			<NavHeader toggleNavigation={handleClose}/>
			<Box className={classes.FlexColumn} sx={{alignItems: 'center', gap: 5}}>
				<img src={Logo} alt='Logo'/>
				<Box className={classes.FlexColumn} sx={{width: '100%', alignItems: 'center', gap: 1}}>
					<Typography sx={{mb: 1}}>SIGN IN TO YOUR INK ACCOUNT</Typography>
					<Input placeholder='INK ID'/>
					<Input type={passwordShown ? "text" : "password"} placeholder='PASSWORD'
						endAdornment={
							<InputAdornment position="end">
							  <IconButton
								aria-label="toggle password visibility"
								onClick={togglePassword}
								edge="end">
								{passwordShown ? <VisibilityOff fontSize='small' htmlColor='grey'/> : <Visibility fontSize='small' htmlColor='grey'/>}
							  </IconButton>
							</InputAdornment>
						  }/>				
					<Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
						<FormControlLabel
							control={<Checkbox />} label="Remember Me"
							sx={{'& .MuiFormControlLabel-label':{fontSize: 12}}}/>
						<Link to='/'><Typography sx={{color: 'white', fontSize: '12px'}}>Forgot Password?</Typography></Link>
					</Box>
					<StyledButton colors={['#1D1471', '#271372', '#421277', '#6E117F', '#AB0F8B', '#E10E95']} onClick={handleSignIn}>
						SIGN IN
					</StyledButton>
					<Box display='flex' gap='10px'>
						<Typography fontSize='12px'>Don&apos;t have an INK account?</Typography>
						<Link to='/'><Typography fontSize='12px' color='white'>Sign Up</Typography></Link>
					</Box>
				</Box>
			</Box>
			<NavFooter />
		</ContentWrapper>
	);
};

const Input = styled(FilledInput)`
	background-color: #1A202D;
	color: white;
	width: 100%;
	border-radius: 8px;
	border: none;
	font-size: 13px;
	& input{
		padding: 10px;
	}
	&:before{
		border: none;
	}
`;

const ContentWrapper = styled(Box)`
	justify-content: space-between;
	height: 100%;
	margin: 20px;
	margin-top: 0px;
	max-width: 300px;
`;

const StyledButton = styled(Button)<GradientChipProps>(({ colors }) => ({
	color: 'white',
	width: '100%',
	marginTop: '10px',
	...(colors && {
		background: `linear-gradient(to right, ${colors.join(',')})`,
	}),
}));