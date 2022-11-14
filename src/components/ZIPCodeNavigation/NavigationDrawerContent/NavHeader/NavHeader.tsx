import { Drawer as MuiDrawer, styled, Box, Button, AppBar } from '@mui/material';
import { FC } from 'react';
import { ArrowBack } from '@mui/icons-material';

import Cross from '../../../../assets/img/LoginNavCross.png';

interface HeaderProps {
    handleClose: () => void;
	toggleNavigation: () => void;
}

export const NavHeader = ({toggleNavigation, handleClose} : HeaderProps) => {
	return(
        <StyledAppBar>
            <HeaderWrapper>
                <Button onClick={toggleNavigation} sx={{minWidth: 'initial'}}>
                    <ArrowBack sx={{color: 'white', fontSize: '2rem', stroke: 'white', strokeWidth: '2'}}/>
                </Button>
                <Button onClick={handleClose} sx={{minWidth: 'initial'}}>
                    <img src={Cross} alt='CrossBtn'/>
                </Button>
            </HeaderWrapper>
        </StyledAppBar>
    );
};

const HeaderWrapper = styled(Box)`
    display: flex;
    width: 300px;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
    @media screen and (max-width: 660px) {
		width: initial;
        margin-right: 0px;
	}
`;

const StyledAppBar = styled(AppBar)`
    background-color: #232324;
    box-shadow: none;
    width: 100%;
    position: sticky;
`;