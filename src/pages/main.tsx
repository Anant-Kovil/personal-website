import { Chip, Container, Typography } from '@mui/material'
import './main.scss'

export const Main = () => {
  return (
    <Container>
      <div>
        <Typography>👋 Hey, hope your day is going well. I'm a Engineer + Designer, exploring the future of human augmentation through devices. I'm also a 4th year student studying CS + Business.</Typography>
        <Typography mt={3}>Building Sunny, an Intelligent Companion designed for elders. Visit <a href="https://sunnycares.org">sunnycares.org</a> to learn more</Typography>
        <Typography mt={3}>Current areas of interest:</Typography>
        <Typography sx={{fontWeight:'300'}}>• Voice User Interfaces - VUI</Typography>
        <Typography sx={{fontWeight:'300'}}>• Forms of Communication</Typography>
        <Typography sx={{fontWeight:'300'}}>• Biosensors</Typography>
        <Typography mt={2}>What I like to do in my free time</Typography>
        <Typography sx={{fontWeight:'300'}}>• Tennis</Typography>
        <Typography sx={{fontWeight:'300'}}>• Exploring nature + hiking</Typography>
        <Typography sx={{fontWeight:'300'}}>• Design/Art/anything creative</Typography>
        <Typography sx={{fontWeight:'300'}}>• Breathwork (hmu for recs)</Typography>
        <Typography sx={{fontWeight:'500'}} mt={2} mb={2}>Best ways to reach me</Typography>
        <Chip sx={{fontWeight:'300'}}label="Twitter" color="primary"variant="filled" onClick={()=>{window.open('https://x.com/Anant_world')}} />
      </div>
    </Container>
  )
}