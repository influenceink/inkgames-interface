import { Drawer as MuiDrawer, styled, Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const LeftNavFooter : FC = () => {
	return(
        <StyledBox>
            <Typography sx={{fontSize: 9}}>INK GAMES<sup>TM</sup>. All rights reserved.</Typography>
            <Link to='/terms-condition'>
                Terms & Conditions | Privacy Policy
            </Link>
        </StyledBox>
    );
};

const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin: 0px 15px;
    font-size: 9px;
`