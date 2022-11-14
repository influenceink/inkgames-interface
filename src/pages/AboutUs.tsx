import { styled, Typography, Box } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { APP_TITLE, PAGE_TITLE_ABOUTUS } from '../utils/constants';
import { AdCard } from '../components/AdCard';
import { RightSocialBar } from '../components/RightSocialBar';

import ad1 from '../assets/img/adOne.png';
import ad2 from '../assets/img/adTwo.png';
import ad3 from '../assets/img/adThree.png';
import ad4 from '../assets/img/adFour.png';

import AboutUsImg from '../assets/img/about-us.png';

export const AboutUs = () => {

	return (
		<>
			<Helmet>
				<title>
					{PAGE_TITLE_ABOUTUS} | {APP_TITLE}
				</title>
			</Helmet>
			<StyledBox>
                <Box height='40vh' sx={{background:`url(${AboutUsImg})`, backgroundSize: 'cover'}} width='100%'>
                </Box>
                <ContentWrapper>
                    <Typography variant='h5' color='black'>ABOUT INK GAMES</Typography> 
                    <Typography color='#181818' fontSize='0.6rem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    <Typography variant='h5' color='black'>OUR VISION</Typography> 
                    <Typography color='#181818' fontSize='0.6rem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        <AdCard imgSrc={ad1}
                        title={<Typography fontSize='0.8rem' color='black' fontWeight='600'>SOCIAL GAMING PLATFORM INK RAISES ALMOST $19M IN FUNDING</Typography>}
                        content='AUGUST 5, 2022 - Austin-based startup INK Games announced it has secured $18.75 million in its latest round of fundraising.It plans to use this funding to build out its platform, as well as its Prize Kingdoms mobile game.'
                        hasReadMore={true}
                        />
                        <AdCard imgSrc={ad2}
                        title={<Typography fontSize='0.8rem' color='black' fontWeight='600'>SKATEBOARDER NYJAH HUSTON INVESTS IN INK GAMES<sup>TM</sup></Typography>}
                        content='NOV 12 2021 - Nyjah Huston, a 2021 Summer Olympian and the highest-paid skateboarder in the world, has announced his investment in INK Games, a gaming and social platform that will use an influencer model to allow its users to track and monetize their viral reach.'
                        hasReadMore={true}
                        />
                        <AdCard imgSrc={ad3}
                        title={<Typography fontSize='0.8rem' color='black' fontWeight='600'>INK GAMES<sup>TM</sup> QUICKLY CLOSES THEIR $9.5M SERIES A ROUND</Typography>}
                        content="JUNE 22, 2021 - Inguencelnk, Inc. has raised $9.5M from HNW and strategic investors for development of the revolutionary platform that will connect and pay an entire world of players through INK ID's, allowing the user participate in the economy of games and web3. forever! "
                        hasReadMore={true}
                        />
                        <AdCard imgSrc={ad4}
                        title={<Typography fontSize='0.8rem' color='black' fontWeight='600'>INK GAMES<sup>TM</sup> SECURES NEW AUSTIN, TX HQ</Typography>}
                        content="JULY 2 2021 - INK has officially outgrown our current development studio. As we continue to hire the industry's most talented, we're ready for our next shift. We have started the build-out on our new state-of-the-art headquarters at the Domain NORTHSIDE, in Austin, TX! "
                        hasReadMore={false}
                        />
                    </Box>
                </ContentWrapper>
			</StyledBox>
            <RightSocialBar color='#202020'/>
		</>
	);
};

const StyledBox = styled(Box)`
	min-height: 100vh;
	background-color: white;
	background-size: cover;
	background-position: center;
	position: relative;
	overflow: clip;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
`;

const ContentWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 16px;
`
