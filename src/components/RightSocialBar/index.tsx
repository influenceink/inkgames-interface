import { FC, useState } from 'react';
import { Button, styled, Typography } from '@mui/material';
import { SocialButtonGroup } from './SocialButtonGroup';

interface RightSocialBarProps {
  color: string
}

const COLORS: Record<RightSocialBarProps['color'], string> = {

}

export const RightSocialBar = ({color} : RightSocialBarProps) => {
  return (
    <RightBarWrapper>
      <SocialButtonGroup color={color}/>
    </RightBarWrapper>
  );
};

const RightBarWrapper = styled('div')`
  position: fixed;
  right: 0px;
  top: 0px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: flex-end;
  @media screen and (max-width: 660px) {
    justify-content: flex-end;
  }
`;
