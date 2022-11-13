import { styled, Box, Button, AppBar, Typography } from '@mui/material';
import React from 'react';

interface AdCardProps {
    imgSrc: string,
    title: React.ReactNode,
    content: string,
    hasReadMore?: boolean | true
}

export const AdCard = ({imgSrc, title, content, hasReadMore} : AdCardProps) => {
	return(
        <CardWrapper>
            <img src={imgSrc} alt={imgSrc} width='100%' />
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, ml: 1, mr: 1, alignItems: 'flex-start'}}>
                {title}
                <Typography fontSize = '0.6rem' color='#181818'>{content}</Typography>
                {hasReadMore && 
                    <>
                        <StyledButton>
                            READ MORE
                        </StyledButton>
                    </>
                }
            </Box>
        </CardWrapper>
    );
};

const CardWrapper = styled(Box)`
    width: 24%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border: 1px solid #ebe8e8;
`;

const StyledButton = styled(Button)`
    border-radius: 10px;
    background-color: black;
    font-size: 0.5rem;
    color: white;
`;