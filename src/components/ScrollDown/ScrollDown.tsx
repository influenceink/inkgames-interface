import { styled, Button, Typography } from '@mui/material';
import {FC, useContext, useCallback, useState} from 'react';
import { Web3Context } from '../../contexts';
import { SUPPORTED_NETWORKS } from '../../utils/constants';

export const ScrollDown : FC = () => {

	const { account, connected, connect, chainId, switchNetwork } = useContext(Web3Context);
	const [network, setNetwork] = useState<string>(SUPPORTED_NETWORKS[0].name);

	const chainValidation = useCallback(() => {
		const reservedChain = SUPPORTED_NETWORKS.find((value) => value.name === network)?.chainId;
		return chainId === reservedChain;
	  }, [chainId, network]);

	const handleWalletConnect = async () => {
		if ((await connect!()) && !chainValidation()) {
		  const reservedChain = SUPPORTED_NETWORKS.find((value) => value.name === network && value.enabled === true)
			?.chainId;
		  await switchNetwork(reservedChain);
		}
	  };

	return(
		<PlayMusicWrapper>
			<StyledButton onClick={handleWalletConnect}>
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
	@media screen and (max-width: 660px) {
		visibility: hidden;
	  }
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