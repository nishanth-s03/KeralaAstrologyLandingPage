import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from '/assets/vintage-4167444.svg'

const CardGrid = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 2,
        width: { xs: 'calc(100% - 1rem)', sm: 'calc(90% - 2rem)' },
        marginInline: 'auto',
      }}
    >
      <CardMedia
        component={'img'}
        image={Image}
        alt='Astrology_Poster'
        width={'100%'}
        sx={{
          maxWidth: 300,
          paddingInlineStart: { xs: 0, sm: 2 },
          marginInline: { xs: 'auto', sm: 0 },
          aspectRatio: 1 / 1,
          objectFit: 'contain',
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flex: 1,
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Card
          sx={{
            width: 'calc(100% - 1rem)',
            padding: 1,
            background: 'var(--dark)',
            color: 'var(--light)',
            fontFamily: 'var(--font-title)',
          }}
        >
          <Typography
            variant='h5'
            fontFamily={'var(--font-title)'}
            fontWeight={600}
            gutterBottom
          >
            Story
          </Typography>
          <Typography
            variant='body1'
            fontFamily={'var(--font-title)'}
            fontWeight={600}
          >
            Kerala Kuttichathan Jyothisyalaya
          </Typography>
          <Typography
            variant='body2'
            fontFamily={'var(--font-title)'}
            gutterBottom
          >
            Madhavan Poduval (Thantri) who present oneself from a family of
            astrologists and features a rich amount of data throughout. He has
            studied astrology from his forefathers as his prime subjects
          </Typography>
        </Card>

        <Box
          width={'100%'}
          display={'flex'}
          gap={1}
        >
          <Card
            sx={{
              padding: 1,
              background: 'var(--dark)',
              color: 'var(--light)',
              fontFamily: 'var(--font-title)',
            }}
          >
            <Typography
              variant='h5'
              fontFamily={'var(--font-title)'}
              fontWeight={600}
              gutterBottom
            >
              Mission
            </Typography>
            <Typography
              variant='body2'
              fontFamily={'var(--font-title)'}
              gutterBottom
            >
              {`Madhavan Poduval (Thantri) alongside his father and forefathers have
            to preserve their lives by lending a hand to people with their Vedic
            puja's, prayers and rituals based social conduct on Hindu customs
            and other religions.`}
            </Typography>
          </Card>

          <Card
            sx={{
              padding: 1,
              background: 'var(--dark)',
              color: 'var(--light)',
              fontFamily: 'var(--font-title)',
              minWidth: 'calc(20% + 1rem)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h5'
              fontFamily={'var(--font-title)'}
              fontWeight={600}
            >
              403
            </Typography>
            <Typography
              variant='body2'
              fontFamily={'var(--font-title)'}
              textTransform={'uppercase'}
              gutterBottom
            >
              Founded
            </Typography>
            <Typography
              variant='h5'
              fontFamily={'var(--font-title)'}
              fontWeight={600}
            >
              1001+
            </Typography>
            <Typography
              variant='body2'
              fontFamily={'var(--font-title)'}
              textTransform={'uppercase'}
              gutterBottom
            >
              clients
            </Typography>
          </Card>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardGrid
