import { Box, Typography } from '@mui/material'

import Navbar from './components/Navbar/Navbar'

import './App.css'
import CardGrid from './components/Grid/CardGrid'
import ServiceCard from './components/Card/ServiceCard'

import img from '/assets/116656.png'
import services from './data/services.json'

const links = {
  locationLink: 'https://www.google.com/maps/place/https://g.co/kgs/fMNaEU2',
  email: 'info@kerakakuttichathanjyothisyalaya.com',
  facebookLink: 'https://facebook.com',
  instagramLink: 'https://instagram.com',
  youtubeLink: 'https://youtube.com',
  phone: +911234567890,
}

const App = () => {
  return (
    <>
      <Navbar links={links} />

      <Box
        id='about'
        marginBlock={2}
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
        <CardGrid />
      </Box>

      <Box
        id='services'
        padding={1}
        paddingBlock={5}
        width={'calc(100% - 1rem)'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ backgroundColor: 'var(--dark)' }}
      >
        <Typography
          variant='h4'
          fontFamily={'var(--font-title)'}
          fontWeight={600}
          align='center'
          color='var(--light)'
          gutterBottom
        >
          Services
        </Typography>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexWrap={'wrap'}
          gap={2}
          paddingBlockStart={5}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service?.title}
              description={service?.description}
              image={service?.image ?? img}
            />
          ))}
        </Box>
      </Box>
    </>
  )
}

export default App
