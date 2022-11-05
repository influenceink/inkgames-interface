import { Button, styled, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom'; 

export const HeaderNav = () => (
	<StyledNavbar>
		<StyledLink to='/'>HOME</StyledLink>
        <StyledLink to='/games'>GAMES</StyledLink>
        <StyledLink to='/vision'>VISION</StyledLink>
        <StyledLink to='/order'>ORDER</StyledLink>
        <StyledLink to='/contact-us' sx={{borderRight: 0}}>CONTACT US</StyledLink> 
	</StyledNavbar>
);

const StyledLink = styled(Link)`
    font-size: 15px;
    color: white;
    text-decoration: none;
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
    border-right: 1px solid white;
`

const StyledNavbar = styled('div')`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
        display: none;
    }
    align-items: center;
`;