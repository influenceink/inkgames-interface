import { Drawer as MuiDrawer, 
		styled, Box, Typography, 
		Checkbox, FormControlLabel, 
		Button, IconButton, FilledInput, InputAdornment } from '@mui/material';
import React, { FC, useState, useCallback, useContext } from 'react';
import { NavHeader } from './NavHeader';
import { makeStyles } from '@mui/styles';
import { NavFooter } from './NavFooter';

import { AuthContext } from '../../../contexts';
import { passwordToHash } from '../../../utils';

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
	const { signIn, resetPassword } = useContext(AuthContext);
	const [email, setEmail] = useState<string>('');
	const [loadingStatus, setLoading] = useState<boolean>(false);
	const [password, setPassword] = useState<string>('');
	const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
	const [errorEmitted, setErrorEmitted] = useState<boolean>(false);
	const [passwordShown, setPasswordShown] = useState(false);
	const [forgotPassword, setForgotPassword] = useState(false);
	const [reset, setReset] = useState(false);
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	  };
	
	const toggleForgotPassword = () => {
		setForgotPassword(!forgotPassword);
	};

	const handleSignIn = useCallback(async () => {
		setLoading(true);
		const signInRes = await signIn(email, passwordToHash(password), isRememberMe);
		if (!signInRes) {
		  setErrorEmitted(true);
		  setTimeout(() => setErrorEmitted(false), 3000);
		}
		else{
			handleClose();
			openDashboard();
		}
		setLoading(false);
		
	}, [handleClose, openDashboard, email, password, signIn, isRememberMe]);
	
	const handleEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(ev.target.value);
	};

	const handlePasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(ev.target.value);
	};

	const handleRememberMeChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setIsRememberMe(ev.target.checked);
	};

	const handleReset = async () => {
		setLoading(true);
		await resetPassword({ email });
		setReset(true);
		setLoading(false);
	};

	return (
		<ContentWrapper className={classes.FlexColumn}>
			<NavHeader toggleNavigation={handleClose}/>
			{!forgotPassword ? 
			<Box className={classes.FlexColumn} sx={{alignItems: 'center', gap: 5}}>
				<img src={Logo} alt='Logo'/>
				<Box className={classes.FlexColumn} sx={{width: '100%', alignItems: 'center', gap: 1}}>
					<Typography sx={{mb: 1}}>SIGN IN TO YOUR INK ACCOUNT</Typography>
					<Input
						placeholder='INK ID'
						value={email}
						onChange={handleEmailChange}
						onKeyUp={(e) => {
							if (e.key === 'Enter' || e.keyCode === 13) handleSignIn();
						}}
					/>
					<Input
						type={passwordShown ? "text" : "password"}
						placeholder='PASSWORD'
						value={password}
						onChange={handlePasswordChange}
						onKeyUp={(e) => {
						if (e.key === 'Enter' || e.keyCode === 13) handleSignIn();
						}}
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
							control={<Checkbox checked={isRememberMe} onChange={handleRememberMeChange}/>} label="Remember Me"
							sx={{'& .MuiFormControlLabel-label':{fontSize: 12}}}/>
						<Button onClick={toggleForgotPassword} sx={{textTransform: 'initial', textDecoration: 'underline'}}><Typography sx={{color: 'white', fontSize: '12px'}}>Forgot Password?</Typography></Button>
					</Box>
					<StyledButton colors={['#1D1471', '#271372', '#421277', '#6E117F', '#AB0F8B', '#E10E95']} onClick={handleSignIn} disabled={loadingStatus}>
						SIGN IN
					</StyledButton>
					<Typography sx={{ color: 'red' }} display={`${errorEmitted ? 'block' : 'none'}`}>
                		Email or password is wrong.
              		</Typography>
					<Box display='flex' gap='10px'>
						<Typography fontSize='12px'>Don&apos;t have an INK account?</Typography>
						<Link to='/'><Typography fontSize='12px' color='white'>Sign Up</Typography></Link>
					</Box>
				</Box>
			</Box> :
			<Box className={classes.FlexColumn} sx={{alignItems: 'center', gap: 5}}>
				{!reset ? 
					<>
					<Typography sx={{mb: 1}}>RESET PASSWORD</Typography>
					<Input
						placeholder='EMAIL'
						value={email}
						onChange={handleEmailChange}
						onKeyUp={(e) => {
							if (e.key === 'Enter' || e.keyCode === 13) handleReset();
						}}
					/>
					<StyledButton colors={['#1D1471', '#271372', '#421277', '#6E117F', '#AB0F8B', '#E10E95']} onClick={handleReset} disabled={loadingStatus}>
						SEND
					</StyledButton>
					</> :
					<>
					<Typography>We&apos;ve just sent a reset link to your email address.</Typography>
					</>
				}
				
			</Box>
			}
			
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
	@media screen and (max-width: 660px) {
		max-width: initial;
	}
`;

const StyledButton = styled(Button)<GradientChipProps>(({ colors }) => ({
	color: 'white',
	width: '100%',
	marginTop: '10px',
	...(colors && {
		background: `linear-gradient(to right, ${colors.join(',')})`,
	}),
}));