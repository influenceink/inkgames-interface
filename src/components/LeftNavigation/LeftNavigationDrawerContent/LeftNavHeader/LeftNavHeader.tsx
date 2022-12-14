import { Drawer as MuiDrawer, styled, Box, Button, AppBar } from '@mui/material';
import { FC } from 'react';

import Logo from '../../../../assets/img/LeftNavLogo.png';
import Cross from '../../../../assets/img/LeftNavCross.png';

interface HeaderProps {
	toggleNavigation: () => void;
}

export const LeftNavHeader = ({toggleNavigation} : HeaderProps) => {
	return(
        <StyledAppBar>
            <HeaderWrapper>
                <Button>
                    <img src={Logo} alt='Logo'/>
                </Button>
                <Button onClick={toggleNavigation}>
                    <img src={Cross} alt='CrossBtn'/>
                </Button>
            </HeaderWrapper>
        </StyledAppBar>
    );
};

const HeaderWrapper = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin: 10px;
`;

const StyledAppBar = styled(AppBar)`
    background-color: white;
    box-shadow: none;
    width: 100%;
    position: sticky;
`;