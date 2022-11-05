import { styled, Button, Typography } from '@mui/material';
import {FC} from 'react';


export const ScrollDown : FC = () => {
	return(
		<PlayMusicWrapper>
			<StyledButton>
				<StyledTypography>SCROLL DOWN</StyledTypography>
				<Line />
			</StyledButton>
		</PlayMusicWrapper>
	)
};

const PlayMusicWrapper = styled('div')`
	position: absolute;
	right: 8px;
	bottom: 32px;
`;

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  color: white;
  min-width: 32px;
  padding: 0px;
`;

const StyledTypography = styled(Typography)`
	writing-mode: tb-rl;
	transform: rotate(-180deg);
	font-size: 13px;
`;

const Line = styled('div')`
  max-height: 40px;
  height: 40px;
  width: 2px;
  background-color: white;
`;