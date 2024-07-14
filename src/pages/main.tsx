import { Container, Typography } from '@mui/material'
import './main.scss'

export const Main = () => {
  return (
    <Container>
      <div>
        <Typography>👋 Hey, hope your day is going well</Typography>
        <Typography mt={2}>I'm a 4th year CS student study CS + Business. </Typography>
        <Typography>Things I like to do</Typography>
      </div>
    </Container>
  )
}