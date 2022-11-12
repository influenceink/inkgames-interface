import { styled, Box, Button, Typography } from '@mui/material';
import { FC } from 'react';

import Game1 from '../../../../assets/img/Game1.png';
import Game2 from '../../../../assets/img/Game2.png';
import Game3 from '../../../../assets/img/Game3.png';

export const LeftNavGames : FC = () => {
	return(
        <MenuWrapper>
            <StyledButton>
                <StyledImage src={Game1} alt='Game1'/>
            </StyledButton>
            <StyledButton>
                <StyledImage src={Game2} alt='Game2'/>
            </StyledButton>
            <StyledButton>         
                <StyledImage src={Game3} alt='Game3'/>
            </StyledButton>
        </MenuWrapper>    
    );
};

const MenuWrapper = styled(Box)`
    display: flex;
    gap: 5px;
    flex-direction: column;
    width: 400px;
    margin: 15px;
    @media screen and (max-width: 660px) {
		width: initial;
	}
`;

const StyledButton = styled(Button)`
    display: flex;
    justify-content: space-between;
    color: black;
`;

const StyledImage = styled('img')`
    width: 100%;
    padding: 0;
`;