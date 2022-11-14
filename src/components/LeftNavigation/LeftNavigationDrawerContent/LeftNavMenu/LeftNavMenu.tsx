import { Drawer as MuiDrawer, styled, Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useHistory } from 'react-router-dom';

export const LeftNavMenu : FC = () => {
    const history = useHistory();
	return(
        <MenuWrapper>
            <StyledButton>
                <Typography>PRODUCTS</Typography>
                <ArrowDropDownIcon />
            </StyledButton>
            <StyledButton onClick={() => {history.push('/about-us')}}>
                <Typography>ABOUT US</Typography>
                <ArrowDropDownIcon />
            </StyledButton>
            <StyledButton>         
                <Typography>BUSINESS</Typography>
                <ArrowDropDownIcon />
            </StyledButton>
            <StyledButton>         
                <Typography>NEWS</Typography>
                <ArrowDropDownIcon />
            </StyledButton>
            <StyledButton>         
                <Typography>SHOP</Typography>
                <ArrowDropDownIcon />
            </StyledButton>
        </MenuWrapper>    
    );
};

const MenuWrapper = styled(Box)`
    display: flex;
    gap: 5px;
    flex-direction: column;
    margin: 15px;
`;

const StyledButton = styled(Button)`
    background-color: #FAFAFA;
    display: flex;
    justify-content: space-between;
    color: black;
`;