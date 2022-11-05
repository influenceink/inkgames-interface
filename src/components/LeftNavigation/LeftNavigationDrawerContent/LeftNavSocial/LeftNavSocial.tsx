import { Drawer as MuiDrawer, styled, Box, Button, AppBar } from '@mui/material';
import { FC } from 'react';

import facebook from '../../../../assets/img/icon-facebook.png';
import twitter from '../../../../assets/img/icon-twitter.png';
import instagram from '../../../../assets/img/icon-instagram.png';

export const LeftNavSocial : FC = () => {
	return(
        <StyledBox>
            <a href="https://www.facebook.com/INKGamesOfficial" target="_blank" rel="noreferrer">
                <img src={facebook} alt='facebook' />
            </a>
            <a href="https://www.twitter.com/inkgames" target="_blank" rel="noreferrer">
                <img src={twitter} alt='twitter' />
            </a>
            <a href="https://www.instagram.com/inkgamesofficial" target="_blank" rel="noreferrer">
                <img src={instagram} alt='instagram' />
            </a>
        </StyledBox>
    );
};

const StyledBox = styled(Box)`
    display: flex;
    margin: 15px 15px 0px 15px;
    gap: 10px;
`