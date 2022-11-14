import { styled, Box, Button, FilledInput, Typography, 
    InputAdornment, IconButton, Divider, Modal } from '@mui/material';
import { FC, useState, useEffect, useContext, useCallback } from 'react';
import { makeStyles } from '@mui/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { SUPPORTED_NETWORKS } from '../../../../utils/constants';

import Cross from '../../../../assets/img/LoginNavCross.png';
import Coinbase from '../../../../assets/img/coinbase.png';
import Metamask from '../../../../assets/img/metamask.png';
import WalletConnect from '../../../../assets/img/walletconnect.png';
import Formatic from '../../../../assets/img/formatic.png';
import Portis from '../../../../assets/img/portis.png';
import WalletIcon from '../../../../assets/img/walleticon.png';
import { AuthContext, Web3Context } from '../../../../contexts';

interface ProfileViewerProps{
    editable: boolean;
    toggleEditable: () => void;
}

const useStyles = makeStyles((theme? : any) => ({
	FlexColumn : {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }
}));

type GradientChipProps = {
	colors?: string[];
  };

export const ProfileViewer = ({ editable, toggleEditable }: ProfileViewerProps) => {

    const classes = useStyles();

    const { account, connected, connect, chainId, switchNetwork } = useContext(Web3Context);
    const [passwordShown, setPasswordShown] = useState(false);
    const [selectWalletModalOpen, setSelectWalletModalOpen] = useState(false);
    
    const [network, setNetwork] = useState<string>(SUPPORTED_NETWORKS[0].name);

    const chainValidation = useCallback(() => {
        const reservedChain = SUPPORTED_NETWORKS.find((value) => value.name === network)?.chainId;
        return chainId === reservedChain;
      }, [chainId, network]);

	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	  };

    const toggleSelectWalletModal = () => {
        setSelectWalletModalOpen(!selectWalletModalOpen);
    }

    const [width, setWidth] = useState<number>(window.innerWidth);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		}
	}, []);

    const handleWalletConnect = async () => {
        if ((await connect!()) && !chainValidation()) {
          const reservedChain = SUPPORTED_NETWORKS.find((value) => value.name === network && value.enabled === true)
            ?.chainId;
          await switchNetwork(reservedChain);
        }
    };

	const isMobile = width <= 660;

    const {avatar, email, fullName} = useContext(AuthContext);

	return(
        <Box className={classes.FlexColumn} sx={{gap: 2}}>
            <Box className={classes.FlexColumn} sx={{gap: 0.5}}>
                {!editable ? 
                    <>
                        <ProfileTypography value={fullName} disabled/>
                        <ProfileTypography value={email} disabled/>
                        <ProfileTypography type={passwordShown ? "text" : "password"} value='Thom V Martinson' disabled
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={togglePassword}
                                    edge="end">
                                    {passwordShown ? <VisibilityOff fontSize='small' htmlColor='grey'/> : <Visibility fontSize='small' htmlColor='grey'/>}
                                </IconButton>
                                </InputAdornment>
                            }/>
                        <ProfileTypography value='+1 775 221 0344' disabled/>
                        <StyledButton colors={['#1D1471', '#271372', '#421277', '#6E117F', '#AB0F8B', '#E10E95']} onClick={toggleEditable} sx={{fontSize: '0.7rem'}}>
                            EDIT PROFILE
                        </StyledButton>
                    </> :
                    <>
                        <Input value={fullName} />
                        <Input value={email}/>
                        <Input type={passwordShown ? "text" : "password"} value='Thom V Martinson'
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={togglePassword}
                                    edge="end">
                                    {passwordShown ? <VisibilityOff fontSize='small' htmlColor='grey'/> : <Visibility fontSize='small' htmlColor='grey'/>}
                                </IconButton>
                                </InputAdornment>
                            }/>
                        <Input value='+1 775 221 0344'/>
                        <StyledButton colors={['#1D1471', '#271372', '#421277', '#6E117F', '#AB0F8B', '#E10E95']} onClick={toggleEditable} sx={{fontSize: '0.7rem'}}>
                            CONFIRM CHANGES
                        </StyledButton>
                    </>
                }
            </Box>
            <Divider sx={{width: '100%'}}/>
            {
                !isMobile ? 
                <Box className={classes.FlexColumn} sx={{gap: 1, alignItems: 'center'}}>
                    <Typography sx={{fontSize: '0.7rem'}}>NO WALLET CONNECTED</Typography>
                    <StyledButton colors={['#1D1471', '#271372', '#421277', '#6E117F', '#AB0F8B', '#E10E95']} 
                        sx={{mt: 0, fontSize: '0.7rem'}}
                        onClick={handleWalletConnect}
                    >
                        CONNECT WALLET
                    </StyledButton>
                    <Box display='flex' gap='10px'>
                        <Typography fontSize='0.6rem'>Don&apos;t have a wallet?</Typography>
                        <Link to='/'><Typography fontSize='0.6rem' color='white'>Get one</Typography></Link>
                    </Box>
                </Box> :
                <BalanceBox onClick={handleWalletConnect}>
                    <SymbolBox >
                        <img src={WalletIcon} alt='wallet icon' width='16px' height='16px'/>
                    </SymbolBox>
                    <Box className={classes.FlexColumn} sx={{alignItems: 'center', width: '100%'}}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Typography sx={{fontSize: '1.2rem', lineHeight: 1, color: 'white'}}>CONNECT WALLET</Typography>
                        </Box>
                        <Typography sx={{fontSize: '0.6rem', color: 'white'}}>You Don&apos;t have a wallet connected</Typography>
                    </Box>
                </BalanceBox>
            }
            
            <Divider sx={{width: '100%'}}/>
            <SelectWalletModal
                open={selectWalletModalOpen}
                onClose={toggleSelectWalletModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                container={() => document.getElementById('NavContent')}
            >
                <ModalBox>
                    <ModalHeaderWrapper>
                        <Button onClick={toggleSelectWalletModal} sx={{minWidth: '0px'}}>
                            <img src={Cross} alt='CrossBtn' style={{width: '16px'}}/>
                        </Button>
                    </ModalHeaderWrapper>
                    <ModalContentWrapper>
                        <Typography sx={{fontSize: '0.8rem'}}>CONNECT WALLET</Typography>
                        <Box className={classes.FlexColumn} sx={{gap: 1.5}}>
                            <WalletBox colors={['#1A202D', '#0054FC']} >
                                <Typography sx={{fontSize: '0.7rem'}} >Coinbase</Typography>
                                <WalletIconBox><img src={Coinbase} alt='Coinbase' height='20px'/></WalletIconBox>
                            </WalletBox>
                            <WalletBox colors={['#131416', '#D66D1C']}>
                                <Typography sx={{fontSize: '0.7rem'}}>MetaMask</Typography>
                                <WalletIconBox><img src={Metamask} alt='Metamask' height='20px'/></WalletIconBox>
                            </WalletBox>
                            <WalletBox colors={['#1A202D', '#2398FF']}>
                                <Typography sx={{fontSize: '0.7rem'}}>Wallet Connect</Typography>
                                <WalletIconBox><img src={WalletConnect} alt='WalletConnect' height='20px'/></WalletIconBox>
                            </WalletBox>
                            <WalletBox colors={['#1A202D', '#A023FF']}>
                                <Typography sx={{fontSize: '0.7rem'}}>Formatic</Typography>
                                <WalletIconBox><img src={Formatic} alt='Formatic' height='20px'/></WalletIconBox>
                            </WalletBox>
                            <WalletBox colors={['#1A202D', '#95A0C5']}>
                                <Typography sx={{fontSize: '0.7rem'}}>Portis</Typography>
                                <WalletIconBox><img src={Portis} alt='Portis' height='20px'/></WalletIconBox>
                            </WalletBox>
                        </Box>
                        <Typography sx={{fontSize: '0.6rem', padding: '0px 10px'}}>By connecting a wallet, you agree to INKs&apos; &nbsp;
                            <Link to='/' style={{color: 'white'}}>Terms of Service</Link>
                        &nbsp;and acknowledge that you have read and understand the INK
                        protocol Disclaimer.</Typography>
                    </ModalContentWrapper>
                </ModalBox>
            </SelectWalletModal>
        </Box>
    );
};

const Input = styled(FilledInput)`
	background-color: #1A202D;
	color: white;
	width: 100%;
	border-radius: 8px;
	border: none;
	font-size: 0.7rem;
	& input{
		padding: 10px;
	}
	&:before{
		border: none;
	}
`;

const ProfileTypography = styled(FilledInput)`
    font-size: 0.7rem;
    border-radius: 8px;
	border: none;
    & input{
		padding: 10px;
	}
	&.Mui-disabled:before{
		border: none;
	}
    &.Mui-disabled{
        background-color: transparent;
        color: #BBBBBB;
    }
`;

const StyledButton = styled(Button)<GradientChipProps>(({ colors }) => ({
	color: 'white',
	width: '100%',
	marginTop: '10px',
	...(colors && {
		background: `linear-gradient(to right, ${colors.join(',')})`,
	}),
}));

const ModalBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    background-color: #131416;
    padding: 4px;
    color: white;
    display: flex;
    flex-direction: column;
`;

const SelectWalletModal = styled(Modal)`
    position: absolute;
    & .MuiBackdrop-root{
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const ModalHeaderWrapper = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

const ModalContentWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin: 20px 10px;
`;

const WalletBox = styled(Button)<GradientChipProps>(({ colors }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
	color: 'white',
    padding: '5px 5px 5px 15px',
	...(colors && {
		background: `linear-gradient(to left, ${colors.join(',')})`,
	}),
}));

const WalletIconBox = styled(Box)`
    width: 30px;
    height: 25px;
    display: flex;
    align-items:center;
    justify-content: center;
`;

const BalanceBox = styled(Button)`
	padding: 20px 0px;
	border-radius: 5px;
	width: 100%;
	position: relative;
    background: linear-gradient(to right, #1D1471, #271372, #421277, #6E117F, #AB0F8B, #E10E95);
`;

const SymbolBox = styled(Box)`
	width: 40px;
	height: 40px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 10px;
	border-radius: 50%;
	background-color: #0B1B3F;
    display: flex;
    align-items: center;
    justify-content: center;
`;