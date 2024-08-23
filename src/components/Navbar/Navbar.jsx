import { useState } from 'react'
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  PlaceOutlined,
  MenuOutlined,
  EmailOutlined,
  FacebookOutlined,
  Instagram,
  YouTube,
  WhatsApp,
  CallOutlined,
} from '@mui/icons-material'
import Logo from '/assets/Mahakali_Maa.webp'
import PropTypes from 'prop-types'

const FloatingBar = ({ phone }) => {
  return (
    <Box
      position={'fixed'}
      bottom={'50%'}
      right={0}
      zIndex={999}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      padding={0.5}
      border={'1px solid var(--light)'}
      borderRight={0}
      borderRadius={'1rem 0 0 1rem'}
      sx={{ background: 'var(--dark)', boxShadow: '0 0 4px var(--light)' }}
    >
      <IconButton
        href={`wa.me/${phone}`}
        target='_blank'
      >
        <WhatsApp htmlColor='var(--light)' />
      </IconButton>
      <Divider
        flexItem
        orientation='horizontal'
        sx={{ borderColor: 'var(--light)' }}
      />
      <IconButton
        href={`tel:${phone}`}
        target='_blank'
      >
        <CallOutlined htmlColor='var(--light)' />
      </IconButton>
    </Box>
  )
}

FloatingBar.propTypes = {
  phone: PropTypes.string.isRequired,
}

const Menubar = ({ anchorEl, handleClose, open }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem
        component='a'
        onClick={handleClose}
        href='#home'
      >
        Home
      </MenuItem>
      <MenuItem
        component='a'
        onClick={handleClose}
        href='#about'
      >
        About
      </MenuItem>
      <MenuItem
        component='a'
        onClick={handleClose}
        href='#services'
      >
        Services
      </MenuItem>
      <MenuItem
        component='a'
        onClick={handleClose}
        href='#contact'
      >
        Contact
      </MenuItem>
    </Menu>
  )
}

Menubar.propTypes = {
  anchorEl: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf(Element),
  ]),
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

const Header = ({ links }) => {
  return (
    <Box
      paddingInline={1}
      paddingBlock={0.5}
      display={'flex'}
    >
      {/* display in mobile view only */}
      <Box
        display={{ xs: 'flex', sm: 'none' }}
        flex={1}
        gap={1}
      >
        <IconButton
          size='small'
          href={links.locationLink}
          target='_blank'
          aria-label='location'
        >
          <PlaceOutlined />
        </IconButton>

        <Divider
          flexItem
          orientation='vertical'
        />

        <IconButton
          size='small'
          href={`mailto:${links.email}`}
          aria-label='email'
        >
          <EmailOutlined />
        </IconButton>
      </Box>

      {/* displays in non-mobile view  */}
      <Box
        display={{ xs: 'none', sm: 'flex' }}
        flex={1}
        gap={1}
      >
        <Button
          startIcon={<PlaceOutlined fontSize='small' />}
          color='inherit'
          href={links.locationLink}
          target='_blank'
          aria-label='location'
        >
          <Typography
            variant='caption'
            textTransform={'capitalize'}
          >
            Near Bunts Hostel, Mangaluru
          </Typography>
        </Button>

        <Divider
          flexItem
          orientation='vertical'
        />

        <Button
          startIcon={<EmailOutlined fontSize='small' />}
          color='inherit'
          href={`mailto:${links.email}`}
          aria-label='email'
        >
          <Typography
            variant='caption'
            textTransform={'lowercase'}
          >
            {links.email}
          </Typography>
        </Button>
      </Box>

      <Box
        display={'flex'}
        gap={1}
      >
        <IconButton
          size='small'
          href={links.facebookLink}
          target='_blank'
          title='Facebook'
          aria-label='facebook'
        >
          <FacebookOutlined />
        </IconButton>
        <IconButton
          size='small'
          href={links.instagramLink}
          target='_blank'
          title='Instagram'
          aria-label='instagram'
        >
          <Instagram />
        </IconButton>
        <IconButton
          size='small'
          href={links.youtubeLink}
          target='_blank'
          title='YouTube'
          aria-label='youtube'
        >
          <YouTube />
        </IconButton>
      </Box>
    </Box>
  )
}

Header.propTypes = {
  links: PropTypes.shape({
    locationLink: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    facebookLink: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    youtubeLink: PropTypes.string.isRequired,
  }).isRequired,
}

const Navbar = ({ links }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      <Header links={links} />
      <FloatingBar phone={links.phone} />
      <AppBar
        position='sticky'
        color='transparent'
        sx={{
          top: 0,
          background:
            'radial-gradient(farthest-corner at 50% 0, transparent, #f2f2f2cc)',
          backdropFilter: 'blur(0.5rem)',
        }}
      >
        <Toolbar>
          <Box
            display={'flex'}
            flex={1}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <img
              src={Logo}
              alt='Logo'
              style={{
                width: '100%',
                paddingBlock: '0.5rem',
                paddingInlineEnd: '0.25rem',
                maxWidth: 'calc(50px - 0.5rem)',
                objectFit: 'contain',
              }}
            />
            <Typography
              variant={isSmallScreen ? 'h5' : 'body1'}
              component={'div'}
              noWrap
              fontFamily={'var(--font-title)'}
              fontWeight={600}
              textTransform={'capitalize'}
              display={'flex'}
              flexDirection={'column'}
            >
              Kerala Kuttichathan Jyothisyalaya
              <Typography
                variant='caption'
                fontFamily={'var(--font-title)'}
                textTransform={'capitalize'}
                component={'span'}
              >
                Madhavan poduval (thantri)
              </Typography>
            </Typography>
          </Box>
          <IconButton
            onClick={handleClick}
            aria-label='menu dropdown'
          >
            <MenuOutlined />
          </IconButton>
        </Toolbar>
        <Menubar
          anchorEl={anchorEl}
          handleClose={handleClose}
          open={open}
        />
      </AppBar>
    </>
  )
}

Navbar.propTypes = {
  links: PropTypes.shape({
    locationLink: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    facebookLink: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    youtubeLink: PropTypes.string.isRequired,
  }).isRequired,
}

export default Navbar
