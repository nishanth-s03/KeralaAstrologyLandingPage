import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

import Navbar from './components/Navbar/Navbar'

import './App.css'
import CardGrid from './components/Grid/CardGrid'
import ServiceCard from './components/Card/ServiceCard'
import HomeCard from './components/Card/HomeCard'

import img from '/assets/116656.png'
import services from './data/services.json'
import links from './data/link.json'

const App = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const columns = isSmallScreen ? [0, 1, 2] : [0]

  return (
    <>
      <Navbar links={links} />

      <Box
        id='home'
        paddingTop={10}
        paddingInline={2}
      >
        <Typography
          variant='h4'
          fontFamily={'var(--font-title)'}
          fontWeight={600}
          align='center'
          gutterBottom
        >
          No. 1 Astrologer in Dakshina Kannada
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
            imageSrc='/assets/home/1395711.jpg'
            altTitle='Results'
            mainTitle='Guaranteed results'
            subTitle='100% results'
          />
          <HomeCard
            imageSrc='/assets/home/world.jpg'
            altTitle='Worldwide'
            mainTitle='Worldwide'
            subTitle='services'
          />
          <HomeCard
            imageSrc='/assets/home/116656.png'
            altTitle='Friendly'
            mainTitle='Friendly'
            subTitle='Astrologer'
          />
          <HomeCard
            imageSrc='/assets/home/students.jpg'
            altTitle='Results'
            mainTitle='Free'
            subTitle='for students'
          />
        </Box>
      </Box>

      <Box
        id='about'
        marginBlock={2}
        paddingInline={2}
        paddingTop={10}
      >
        <Typography
          variant='h4'
          fontFamily={'var(--font-title)'}
          fontWeight={600}
          align='center'
          color='var(--dark)'
          gutterBottom
        >
          About
        </Typography>
        <CardGrid />
      </Box>

      <Box
        id='services'
        padding={1}
        paddingBlock={5}
        paddingTop={10}
        width={'calc(100% - 1rem)'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography
          variant='h4'
          fontFamily={'var(--font-title)'}
          fontWeight={600}
          align='center'
          color='var(--dark)'
          gutterBottom
        >
          Services
        </Typography>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          gap={2}
        >
          {columns.map((topIndex) => (
            <Box
              key={`column-${topIndex}`}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              gap={2}
              width={isSmallScreen ? `calc(95%/${columns.length})` : '95%'}
            >
              {services
                .filter((_, index) => index % columns.length === topIndex)
                .map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service?.title}
                    description={service?.description}
                    image={service?.image ?? img}
                  />
                ))}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default App
