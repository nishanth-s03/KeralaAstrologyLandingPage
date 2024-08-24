import { Box, Divider, Typography } from '@mui/material'
import ContactForm from '../Form/ContactForm'
import PropTypes from 'prop-types'

const ContactSection = ({ Logo, isSmallScreen, links }) => {
  return (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={3}
    >
      <Box flexDirection={'column'}>
        <Box
          display={'flex'}
          justifyContent={'flex-end'}
          alignItems={'flex-end'}
          gap={1}
        >
          <img
            src={Logo}
            alt='Logo'
            style={{
              width: '100%',
              paddingBlock: '0.5rem',
              maxWidth: 'calc(60px - 0.5rem)',
              objectFit: 'contain',
            }}
          />
          <Box flexDirection={'column'}>
            <Typography
              variant='body2'
              fontFamily={'var(--font-title)'}
            >
              Kerala Kuttichathan Jyothisyalaya
            </Typography>
            <Typography
              variant='h6'
              fontFamily={'var(--font-title)'}
              gutterBottom
            >
              Madhavan Poduval (Thanthri)
            </Typography>
            <Divider />
          </Box>
        </Box>
        <Box
          paddingBlock={2}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4817843623778!2d74.8486057!3d12.876712199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bc4e70f0a1f%3A0xdabecd1941b2207!2sKERALA%20KUTTICHATHAN%20JYOTHISHYARU!5e0!3m2!1sen!2sin!4v1724437718234!5m2!1sen!2sin'
            width={'100%'}
            style={{ border: 0, aspectRatio: 4 / 3 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Box>
      </Box>

      {isSmallScreen && (
        <Divider
          flexItem
          orientation='vertical'
        />
      )}

      <ContactForm links={links} />
    </Box>
  )
}

ContactSection.propTypes = {
  Logo: PropTypes.string,
  isSmallScreen: PropTypes.bool.isRequired,
  links: PropTypes.shape({
    email: PropTypes.string.isRequired,
    locationLink: PropTypes.string.isRequired,
  }).isRequired,
}

export default ContactSection
