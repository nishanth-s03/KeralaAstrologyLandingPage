import { Box, Typography, Link, IconButton } from '@mui/material'
import {
  Facebook,
  Instagram,
  EmailOutlined,
  YouTube,
  CallOutlined,
  WhatsApp,
} from '@mui/icons-material'
import PropTypes from 'prop-types'

const Footer = ({ links }) => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'var(--dark)',
        color: 'white',
        padding: '2rem',
        mt: 'auto',
      }}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='flex-start'
        flexWrap='wrap'
      >
        <Box
          component={'a'}
          href={links.locationLink}
          target='_blank'
          color={'var(--light)'}
        >
          <Typography
            variant='h6'
            fontFamily={'var(--font-title)'}
            fontWeight={600}
            gutterBottom
          >
            Kerala Kuttichathan Jyothisyalaya
          </Typography>
          <Typography
            variant='body2'
            fontFamily={'var(--font-title)'}
            textTransform={'capitalize'}
          >
            Madhavan poduval (thantri),
            <br />
            Bunts Hostel,
            <br />
            Mangaluru, Karnataka - 575 003.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant='h6'
            fontFamily={'var(--font-title)'}
            gutterBottom
          >
            Quick Links
          </Typography>
          <Box
            display='flex'
            flexDirection='column'
          >
            <Link
              href='#home'
              color='inherit'
              underline='hover'
            >
              Home
            </Link>
            <Link
              href='#about'
              color='inherit'
              underline='hover'
            >
              About
            </Link>
            <Link
              href='#services'
              color='inherit'
              underline='hover'
            >
              Services
            </Link>
            <Link
              href='#contact'
              color='inherit'
              underline='hover'
            >
              Contact
            </Link>
          </Box>
        </Box>

        <Box>
          <Typography
            variant='h6'
            fontFamily={'var(--font-title)'}
            gutterBottom
          >
            Follow Us
          </Typography>
          <Box display='flex'>
            <IconButton
              color='inherit'
              href={`mailto:${links.email}`}
              aria-label='Email'
            >
              <EmailOutlined />
            </IconButton>

            <IconButton
              color='inherit'
              href={links.facebookLink}
              target='_blank'
              aria-label='Facebook'
            >
              <Facebook />
            </IconButton>

            <IconButton
              color='inherit'
              href={links.instagramLink}
              target='_blank'
              aria-label='Instagram'
            >
              <Instagram />
            </IconButton>

            <IconButton
              color='inherit'
              href={`tel:${links.phone}`}
              aria-label='Phone'
            >
              <CallOutlined />
            </IconButton>

            <IconButton
              color='inherit'
              href={`https://wa.me/${links.phone}/`}
              target='_blank'
              aria-label='WhatsApp'
            >
              <WhatsApp />
            </IconButton>

            <IconButton
              color='inherit'
              href={links.youtubeLink}
              target='_blank'
              aria-label='Youtube'
            >
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box
        mt={3}
        textAlign='center'
      >
        <Typography
          variant='body2'
          color='inherit'
          fontFamily={'var(--font-title)'}
        >
          &copy; {new Date().getFullYear()} Kerala Kuttichathan Jyothisyalaya.
          All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

Footer.propTypes = {
  links: PropTypes.shape({
    email: PropTypes.string.isRequired,
    facebookLink: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    locationLink: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    youtubeLink: PropTypes.string.isRequired,
  }),
}

export default Footer
