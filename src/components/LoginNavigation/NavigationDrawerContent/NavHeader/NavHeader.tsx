import { Drawer as MuiDrawer, styled, Box, Button, AppBar } from '@mui/material';
import { FC } from 'react';

import Cross from '../../../../assets/img/LoginNavCross.png';

interface HeaderProps {
	toggleNavigation: () => void;
}

export const NavHeader = ({toggleNavigation} : HeaderProps) => {
	return(
        <StyledAppBar>
            <HeaderWrapper>
                <Button onClick={toggleNavigation} sx={{minWidth: 'initial'}}>
                    <img src={Cross} alt='CrossBtn'/>
                </Button>
            </HeaderWrapper>
        </StyledAppBar>
    );
};

const HeaderWrapper = styled(Box)`
    display: flex;
    width: 300px;
    margin: 10px;
    justify-content: flex-end;
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