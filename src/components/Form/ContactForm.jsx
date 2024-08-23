import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import { CallOutlined, EmailOutlined } from '@mui/icons-material'

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  ...props
}) => {
  return (
    <TextField
      label={label}
      name={name}
      size='small'
      type={type}
      value={value}
      onChange={onChange}
      sx={{ fontFamily: 'var(--font-title)' }}
      required
      {...props}
    />
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
}

const ContactForm = ({ links }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      contactNumber: '',
      email: '',
      message: '',
    })
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={1}
    >
      <Card sx={{ maxWidth: 350, aspectRatio: 1 / 1 }}>
        <CardContent>
          <Typography
            variant='h5'
            fontFamily={'var(--font-title)'}
            fontWeight={600}
            sx={{ textIndent: 5, mt: 1, marginInline: 0 }}
          >
            Contact Form
          </Typography>
          <Typography
            variant='body2'
            fontFamily={'var(--font-title)'}
            fontWeight={300}
            sx={{ textIndent: 5, mb: 2, marginInline: 0 }}
          >
            Ask your queries right away
          </Typography>
          <form
            onSubmit={handleSubmit}
            autoComplete='off'
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={1}
            >
              <Box
                display={'flex'}
                gap={1}
              >
                <InputField
                  label='Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  label='Contact Number'
                  name='contactNumber'
                  type='tel'
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </Box>
              <InputField
                label='Email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
              />
              <InputField
                label='How can we help?'
                name='message'
                multiline
                rows={3}
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type='submit'
                variant='outlined'
                color='inherit'
                sx={{
                  mt: 1,
                }}
              >
                Send message
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>

      <Divider
        flexItem
        orientation='horizontal'
      />

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
      >
        <Button
          startIcon={<EmailOutlined fontSize='small' />}
          color='inherit'
          href={`mailto:${links.email}`}
          aria-label='email'
          fullWidth
        >
          <Typography
            variant='caption'
            textTransform={'lowercase'}
            fontFamily={'var(--font-title)'}
          >
            {links.email}
          </Typography>
        </Button>
        <Button
          startIcon={<CallOutlined fontSize='small' />}
          color='inherit'
          href={`tel:${links.phone}`}
          aria-label='phone'
          fullWidth
        >
          <Typography
            variant='caption'
            textTransform={'lowercase'}
            fontFamily={'var(--font-title)'}
          >
            {links.phone}
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

ContactForm.propTypes = {
  links: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
}

export default ContactForm
