import { Box, Button, Typography } from '@mui/material'
import CallOutlined from '@mui/icons-material/CallOutlined'

import HomeCard from '../Card/HomeCard'
import PropTypes from 'prop-types'

const Home = ({ isSmallScreen, links }) => {
  const urlToImage = isSmallScreen
    ? 'url(/assets/zodiac.webp)'
    : 'url(/assets/zodiac-mobile.webp)'

  return (
    <>
      <Box
        height={'calc(85vh - 4rem)'}
        width={'100%'}
        borderRadius={1}
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'flex-end', sm: 'flex-start' }}
        alignItems={'flex-end'}
        mb={5}
        sx={{
          background: `var(--dark) ${urlToImage}`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'color-dodge',
          filter: 'drop-shadow(0 2px 4px #111111cc)',
        }}
      >
        <Box
          width={isSmallScreen ? 'calc(50% - 1rem)' : 'calc(100% - 1rem)'}
          height={isSmallScreen ? 'calc(100% - 1rem)' : 'calc(50% - 1rem)'}
          padding={1}
          borderRadius={1}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            background: '#111111ee',
            backgroundBlendMode: 'multiply',
          }}
        >
          <Typography
            variant='h5'
            fontFamily={'var(--font-title)'}
            fontWeight={700}
            color={'var(--light)'}
            align='center'
          >
            Permanent Instant Solutions
          </Typography>
          <Typography
            variant='subtitle1'
            fontFamily={'var(--font-title)'}
            color={'var(--light)'}
            align='center'
            gutterBottom
          >
            By Madhavan Poduval(Tantri)
          </Typography>
          <Typography
            variant='h6'
            fontFamily={'var(--font-title)'}
            fontWeight={600}
            color={'var(--light)'}
            align='center'
            gutterBottom
          >
            An opportunity to change your life
          </Typography>
          <Button
            variant='outlined'
            href={`tel:${links.phone}`}
            startIcon={<CallOutlined />}
            sx={{ color: 'var(--light)', borderColor: 'var(--light)' }}
          >
            Call now
          </Button>
          <Typography
            variant='body1'
            fontFamily={'cursive'}
            color={'var(--light)'}
            mt={4}
            align='center'
            component={'a'}
            href={links.locationLink}
            target='_blank'
          >
            ಕೇರಳ ಕುಟ್ಟಿಚಾತನ್ ಜ್ಯೋತಿಷ್ಯಾಲಯ <br /> ಬಂಟ್ಸ್ ಹಾಸ್ಟೆಲ್, ಮಂಗಳೂರು.
          </Typography>
        </Box>
      </Box>
      <Typography
        variant='h4'
        fontFamily={'var(--font-title)'}
        fontWeight={600}
        align='center'
        gutterBottom
      >
        {`India's Famous Astrologer`}
      </Typography>
      <Box
        display={'flex'}
        flex={1}
        flexWrap={'wrap'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={1}
      >
        <HomeCard
          imageSrc='/assets/home/1395711.webp'
          altTitle='Results'
          mainTitle='Guaranteed results'
          subTitle='100% results'
        />
        <HomeCard
          imageSrc='/assets/home/world.webp'
          altTitle='Worldwide'
          mainTitle='Worldwide'
          subTitle='services'
        />
        <HomeCard
          imageSrc='/assets/116656.webp'
          altTitle='Friendly'
          mainTitle='Friendly'
          subTitle='Astrologer'
        />
        <HomeCard
          imageSrc='/assets/services/love_problem.webp'
          altTitle='Results'
          mainTitle='Discount'
          subTitle='on love problems'
        />
      </Box>
    </>
  )
}

Home.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
  links: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    locationLink: PropTypes.string.isRequired,
  }),
}

export default Home
