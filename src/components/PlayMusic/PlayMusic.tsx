import { styled, Button, Typography } from '@mui/material';
import {FC, useState, useEffect, useMemo} from 'react';

import playBtn from '../../assets/img/play.png';
import pauseBtn from '../../assets/img/pause.png';
import backSound from '../../assets/audio/atmospheric-tech.mp3';
import { lineHeight } from '@mui/system';

export const PlayMusic : FC = () => {
	const [play, setPlay] = useState(false);
	const audio = useMemo(() => new Audio(backSound), []);
	
	const togglePlay = () => {
		setPlay((play) => !play);
	};
	useEffect(() => {
		play ? audio.play() : audio.pause();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [play]);
	return(
		<PlayMusicWrapper>
			<StyledButton onClick={togglePlay}>
				<StyledImg>
					<img src={play ? pauseBtn : playBtn} alt="play" style={{width: '58px', height: '58px'}}/>
				</StyledImg>
				<Typography sx={{width: 40, lineHeight: 1}}>PLAY MUSIC</Typography>
			</StyledButton>
		</PlayMusicWrapper>
	)
	
};

const PlayMusicWrapper = styled('div')`
	position: absolute;
	left:  32px;
	bottom: 32px;
`;

const StyledImg = styled('div')`
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  background: transparent;
  // cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 660px) {
    transform: rotate(-90deg);
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  color: white;
  width: 147px;
`;