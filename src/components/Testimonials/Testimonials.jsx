import { useState, useEffect } from 'react'
import { Box, Tabs, Tab, Avatar, Typography } from '@mui/material'

const testimonials = [
  {
    comment:
      'The financial predictions were incredibly clear and practical, offering me a solid roadmap to enhance my financial situation. ',
    username: 'Mahesh',
  },
  {
    comment:
      'Health issues were a constant worry until I received compassionate guidance and effective remedies that improved my well-being. Feeling grateful for the positive change. ',
    username: 'Jane Smith',
  },
  {
    comment:
      'I was separated from my love for the last 2 years. Guruji solved my problem within 48 hrs, Now I am really happy. ',
    username: 'Alex Johnson',
  },
]

const Testimonials = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  // Auto-switching logic
  useEffect(() => {
    const switchInterval = setInterval(() => {
      setSelectedTab((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(switchInterval)
  }, [setSelectedTab])

  return (
    <Box>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        centered
      >
        {testimonials.map((testimonial, index) => (
          <Tab
            key={index}
            icon={<Avatar>{testimonial.username[0]}</Avatar>}
            aria-label={testimonial.username}
          />
        ))}
      </Tabs>
      <Box
        // marginTop={3}
        padding={2}
        borderRadius={2}
        bgcolor={'var(--light)'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <Typography
          variant='h6'
          fontWeight={600}
        >
          {testimonials[selectedTab].username}
        </Typography>
        <Typography
          variant='body1'
          fontStyle='italic'
          marginTop={1}
        >
          {`"${testimonials[selectedTab].comment}"`}
        </Typography>
      </Box>
    </Box>
  )
}

export default Testimonials
