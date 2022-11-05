import { styled, Typography, Box } from '@mui/material';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_ABOUTUS } from '../utils/constants';
import { AdCard } from '../components/AdCard';

import ad1 from '../assets/img/adOne.png';
import ad2 from '../assets/img/adTwo.png';
import ad3 from '../assets/img/adThree.png';
import ad4 from '../assets/img/adFour.png';

import AboutUsImg from '../assets/img/about-us.png';

export const AboutUs = () => {
	const context = useContext(AppContext);

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
                    <Typography color='#181818' fontSize='0.5rem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    <Typography variant='h5' color='black'>OUR VISION</Typography> 
                    <Typography color='#181818' fontSize='0.5rem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <AdCard imgSrc={ad1}
                        title='SOCIAL GAMING PLATFORM INK RAISES ALMOST $19M IN FUNDING'
                        content='AUGUST 5, 2022 - Austin-based startup INK Games announced it has .cured 518.75 million in its latest round of fundraising.I1 plans to use this funding to build out its platform, as well as its Prize Kingdoms mobile game.'
                        hasReadMore={true}
                        />
                        <AdCard imgSrc={ad2}
                        title='SKATEBOARDER NYJAH HUSTON INVESTS IN INK GAMES<sup>TM</sup>'
                        content='NOV 1Z 2021 - Nyjah Huston, 2 2021 Summer Olympian and Me highest-paid skateboarder in the world, has announced his investment in INK Games, a gaming a. social platMrm Mat will use an influencer model to allow its users to track and monetize Meir viral reach.'
                        hasReadMore={true}
                        />
                        <AdCard imgSrc={ad3}
                        title='INK GAMES<sup>TM</sup> m QUICKLY CLOSES THEIR $9.5M SERIES A ROUND'
                        content='JUNE 22, 2021 - Inguencelnk, Inc. has raised $9.5M from HNW and strategic investors for development of Me revolutionary platform Mat will conned and pay an entire world of players Mrough INK Mb, allowing the user participate in the economy of games and wel. forever! '
                        hasReadMore={true}
                        />
                        <AdCard imgSrc={ad4}
                        title='INK GAMES<sup>TM</sup> SECURES NEW AUSTIN, TX HQ'
                        content='JULY Z 2021 - INK has officially outgrown our current development studio. As we continue to hire the industrys most talented, we&apos;re ready for our ned shift. We have started the build-out on our new date-of-Me-art headquarters at the Domain NORTHSIGE, in Austin, TX! '
                        hasReadMore={false}
                        />
                    </Box>
                </ContentWrapper>
			</StyledBox>
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
