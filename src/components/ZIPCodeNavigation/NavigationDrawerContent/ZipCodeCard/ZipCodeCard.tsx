import { Drawer as MuiDrawer, styled, Box, Button, AppBar, Typography } from '@mui/material';

import pinkCard from '../../../../assets/img/card1.png';
import blueCard from '../../../../assets/img/card2.png';
import greenCard from '../../../../assets/img/card3.png';
import yellowCard from '../../../../assets/img/card4.png';

import { getZIPState } from '../../../../utils';

interface ZipCodeCardProp{
    code: any
}

export const ZipCodeCard = ({code} : ZipCodeCardProp) => {
    const randomCardImg = () => {
        if (Math.random() < 0.25) return pinkCard;
        if (Math.random() < 0.5) return blueCard;
        if (Math.random() < 0.75) return greenCard;
        return yellowCard;
    };
	return(
        <CardWrapper>
            <img src={randomCardImg()} alt='card' height='80px'/>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Typography fontSize='1.1rem' lineHeight='1'>{code}</Typography>
                <Typography fontSize='0.5rem'>{getZIPState(code)}</Typography>
                <Typography fontSize='0.6rem' color='#2398FF'>LEGENDARY</Typography>
            </Box>
        </CardWrapper>
    );
};

const CardWrapper = styled(Box)`
    width: 48%;
    border-radius: 10px;
    background-color: #1A202D;
    display: flex;
    align-items: center;
    padding: 10px 10px;
    justify-content: space-between;
`;