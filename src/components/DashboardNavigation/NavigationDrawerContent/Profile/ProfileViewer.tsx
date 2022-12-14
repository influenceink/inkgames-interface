import { styled, Box, Button, FilledInput, Typography, 
    InputAdornment, IconButton, Divider, Modal } from '@mui/material';
import { FC, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import Cross from '../../../../assets/img/LoginNavCross.png';
import Coinbase from '../../../../assets/img/coinbase.png';
import Metamask from '../../../../assets/img/metamask.png';
import WalletConnect from '../../../../assets/img/walletconnect.png';
import Formatic from '../../../../assets/img/formatic.png';
import Portis from '../../../../assets/img/portis.png';

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

    const [passwordShown, setPasswordShown] = useState(false);
    const [selectWalletModalOpen, setSelectWalletModalOpen] = useState(false);
	const togglePassword = () => {
		// When the handler is invoked
		// inverse the boolean state of passwordShown
		setPasswordShown(!passwordShown);
	  };

    const toggleSelectWalletModal = () => {
        setSelectWalletModalOpen(!selectWalletModalOpen);
    }

	return(
        <Box className={classes.FlexColumn} sx={{gap: 2}}>
            <Box className={classes.FlexColumn} sx={{gap: 0.5}}>
                {!editable ? 
                    <>
                        <ProfileTypography value='Thom V Martinson' disabled/>
                        <ProfileTypography value='name@emailaddress.com' disabled/>
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
                        <Input value='Thom V Martinson' />
                        <Input value='name@emailaddress.com'/>
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
            <Box className={classes.FlexColumn} sx={{gap: 1, alignItems: 'center'}}>
                <Typography sx={{fontSize: '0.7rem'}}>NO WALLET CONNECTED</Typography>
                <StyledButton colors={['#1D1471', '#271372', '#421277', '#6E117F', '#AB0F8B', '#E10E95']} 
                    sx={{mt: 0, fontSize: '0.7rem'}}
                    onClick={toggleSelectWalletModal}
                >
                    CONNECT WALLET
                </StyledButton>
                <Box display='flex' gap='10px'>
                    <Typography fontSize='0.6rem'>Don&apos;t have a wallet?</Typography>
                    <Link to='/'><Typography fontSize='0.6rem' color='white'>Get one</Typography></Link>
                </Box>
            </Box>
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
                            <WalletBox colors={['#1A202D', '#0054FC']}>
                                <Typography sx={{fontSize: '0.7rem'}}>Coinbase</Typography>
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

const WalletBox = styled(Box)<GradientChipProps>(({ colors }) => ({
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