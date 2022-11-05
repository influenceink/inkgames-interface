import { Drawer as MuiDrawer, styled, Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const LeftNavMenu : FC = () => {
	return(
        <MenuWrapper>
            <StyledButton>
                <Typography>PRODUCTS</Typography>
                <ArrowDropDownIcon />
            </StyledButton>
            <StyledButton>
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
    width: 400px;
    margin: 15px;
`;

const StyledButton = styled(Button)`
    background-color: #FAFAFA;
    display: flex;
    justify-content: space-between;
    color: black;
`;