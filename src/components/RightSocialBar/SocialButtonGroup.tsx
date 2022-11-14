import { Typography, Box, styled, useMediaQuery, Color } from '@mui/material';
import { Twitter, Facebook, Instagram, YouTube } from '@mui/icons-material';

interface SocialButtonGroupProps {
  color: string
}

export const SocialButtonGroup = ({color} : SocialButtonGroupProps) => {
  const sm = useMediaQuery('(max-width: 660px)');
  return (
    <>
      <SocialWrapper>
        <SocialButton href="https://www.twitter.com/inkgames" target="_blank" rel="noreferrer">
          <Twitter sx={{color: {color}}}/>
        </SocialButton>
        <SocialButton href="https://www.facebook.com/INKGamesOfficial" target="_blank" rel="noreferrer">
          <Facebook sx={{color: {color}}}/>
        </SocialButton>
        <SocialButton href="https://www.instagram.com/inkgamesofficial" target="_blank" rel="noreferrer">
          <Instagram sx={{color: {color}}}/>
        </SocialButton>
        <SocialButton href="https://www.youtube.com/channel/UCzu24Zhl-t2Fw2gEG5sGLGg" target="_blank" rel="noreferrer">
          <YouTube sx={{color: {color}}}/>
        </SocialButton>
      </SocialWrapper>
    </>
  );
};
const SocialWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  gap: 30px;
  padding: 40px 20px;
  @media screen and (max-width: 660px) {
    padding: 20px 10px;
  }
`;
const SocialButton = styled('a')`
  display: flex;
  margin: 0 1px;
  transform: rotate(90deg);
  @media screen and (max-width: 660px) {
    img {
      width: 16px;
    }
  }
`;
