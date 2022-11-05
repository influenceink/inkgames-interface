import { Drawer as MuiDrawer, styled, Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NavFooter : FC = () => {
	return(
        <StyledBox>
            <Link to='/terms-condition' style={{color: 'white'}}>
                Terms & Conditions | Privacy Policy
            </Link>
        </StyledBox>
    );
};

const StyledBox = styled(Box)`
    display: flex;
    align-items: center;
    margin: 0px 15px;
    font-size: 9px;
    justify-content: center;
    color: white;
`