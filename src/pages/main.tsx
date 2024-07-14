import { Box, Chip, Container, List, ListItem, Typography } from '@mui/material'
import './main.scss'

export const Main = () => {
  return (
    <Container>
      <div>
        <Typography>👋 Hey, hope your day is going well</Typography>
        <Typography mt={2}>I'm a Engineer + Designer, exploring the future of human augmentation. I'm also a 4th year CS student study CS + Business.</Typography>
        <Typography mt={2}>Here are a few areas I have conviction in:</Typography>
        <Typography sx={{fontWeight:'300'}}>• Neurotech</Typography>
        <Typography sx={{fontWeight:'300'}}>• Forms of Communication</Typography>
        <Typography sx={{fontWeight:'300'}}>• Biosensors</Typography>
        <Typography mt={2}>What I like to do in my free time</Typography>
        <Typography sx={{fontWeight:'300'}}>• Tennis</Typography>
        <Typography sx={{fontWeight:'300'}}>• Exploring nature + hiking</Typography>
        <Typography sx={{fontWeight:'300'}}>• Design/Art/anything creative</Typography>
        <Typography sx={{fontWeight:'300'}}>• Breathwork + Mindfulness</Typography>
        <Typography sx={{fontWeight:'500'}} mt={2}>Best ways to reach me</Typography>
        <Typography sx={{fontWeight:'300'}}>anant.k1226 (at) gmail (dot) com</Typography>
        <Typography sx={{ml:3, mt:1, mb:2, fontWeight:'300'}}>or</Typography>
        <Chip sx={{fontWeight:'300'}}label="Twitter" color="primary"variant="outlined" onClick={()=>{window.open('https://x.com/Anant_world')}} />
      </div>
    </Container>
  )
}