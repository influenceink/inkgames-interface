import React, { useState } from 'react';
import { AppBar, Box, Toolbar, styled, IconButton, Button } from '@mui/material';
import MenuIcon from '../../assets/img/MenuIcon.png';
import MenuIconHover from '../../assets/img/MenuIcon-hover.png';
import logo from '../../assets/img/Logo.png';    

import { makeStyles } from '@mui/styles';
import { HeaderNav } from './HeaderNav';

import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
	toggleNavigation: () => void;
	toggleLoginNavigation: () => void;
}

const useStyles = makeStyles((theme? : any) => ({
	MenuIconHover:{
	  "&:hover":{
		opacity: 1
	  }
	},
	MenuIcon:{
		opacity: 0
	}
  }));

export const Header = ({ toggleNavigation, toggleLoginNavigation }: HeaderProps) => {
	const classes = useStyles();
	const [showMenuIcon, setShowMenuIcon] = useState(false);

	const OnHoverMenuIcon = () => {
		setShowMenuIcon(true);
	}

	const OnHoverOutMenuIcon = () => {
		setShowMenuIcon(false);
	}

	return (
		<>
			<StyledAppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar disableGutters variant='dense'>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						sx={{ml: 2, mr: 4}}
						onClick={toggleNavigation}
					>
						<StyledMenuIconButton
							src={MenuIcon} alt='Menu Icon' className={showMenuIcon == true ? classes.MenuIcon : ''} />
						<StyledMenuIconButton
							src={MenuIconHover}
							alt='Menu Icon Hover'
							className={classes.MenuIconHover}
							sx={{opacity: 0}}
							onMouseEnter={OnHoverMenuIcon}
							onMouseOut={OnHoverOutMenuIcon}/>
					</IconButton>
					<NavLink to="/">
						<StyledLogo src={logo} alt="logo"/>
					</NavLink>
					<HeaderNav />
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { alignItems: 'center' } }}>
						<StyledUserAccountBtn onClick={toggleLoginNavigation} >
							TM
						</StyledUserAccountBtn>
					</Box>
				</Toolbar>
			</StyledAppBar>
		</>
	);
};

const StyledAppBar = styled(AppBar)`
	background: transparent;
	box-shadow: none;
	margin: 16px;
	width: 97%;
`;

const StyledMenuIconButton = styled('img')`
	position:absolute;
	width: 32px;
	height: 32px;
	-webkit-transition: opacity 0.5s ease-in-out;
	-moz-transition: opacity 0.5s ease-in-out;
	-o-transition: opacity 0.5s ease-in-out;
	transition: opacity 0.5s ease-in-out;
`;

const StyledLogo = styled('img')`
	padding-left: 24px;
	padding-right: 16px;
	border-left: 1px solid #ffffff;
	margin-top: 8px;
`;

const StyledUserAccountBtn = styled(Button)`
	border-radius: 50%;
	min-width: 50px;
	min-height: 50px;
	background-color: #494949;
	font-size: 20px;
	color: white;
	&:hover{
		background-color: #494949;
	}
`;