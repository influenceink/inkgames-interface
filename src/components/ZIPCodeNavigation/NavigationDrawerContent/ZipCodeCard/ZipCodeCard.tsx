import { Drawer as MuiDrawer, styled, Box, Button, AppBar, Typography } from '@mui/material';

import Card from '../../../../assets/img/card2.png';

export const ZipCodeCard = () => {
	return(
        <CardWrapper>
            <img src={Card} alt='card' height='80px'/>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Typography fontSize='1.1rem' lineHeight='1'>54236</Typography>
                <Typography fontSize='0.5rem'>Hollywood, CA</Typography>
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