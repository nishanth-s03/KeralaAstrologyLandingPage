import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

import Navbar from './components/Navbar/Navbar'

import './App.css'
import CardGrid from './components/Grid/CardGrid'
import ServiceCard from './components/Card/ServiceCard'

import img from '/assets/116656.png'
import services from './data/services.json'
import links from './data/link.json'
import Home from './components/home/Home'

const App = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const columns = isSmallScreen ? [0, 1, 2] : [0]

  return (
    <>
      <Navbar links={links} />

      <Box
        id='home'
        padding={2}
      >
        <Home
          isSmallScreen={isSmallScreen}
          links={links}
        />
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
              width={isSmallScreen ? `calc(93%/${columns.length})` : '93%'}
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

      {/* <Box
        id='testimonials'
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
          Happy Customers
        </Typography>
        <Box></Box>
      </Box> */}
    </>
  )
}

export default App
