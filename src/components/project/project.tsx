import { Box, Chip, Paper, Typography } from "@mui/material"
import DailyUpdates from './DailyUpdates.png';
import FashionRecommendation from './FashionRecommendation.png'
import Neurosentry from './Neurosentry.png'

export const Project = () => {

  const neurosentryImg = `${Neurosentry}`
  const FashionRecommendationImg = `${FashionRecommendation}`
  const DailyUpdatesImg = `${DailyUpdates}`


  return (
    <div>
    <Paper variant="outlined" sx={{"&:hover": { boxShadow: 6 }, mb:2, maxWidth:'lg', maxHeight:'md', display: 'flex',   flexDirection: { xs: 'column', md: 'row' },}} elevation={5}>
      <Box sx={{ml:1, mr:1}}>
        <Typography variant="h6" sx={{ fontWeight: 500}} >Neurosentry</Typography>
        <Typography variant="h6" sx={{fontWeight: 300, mb: 1}}>a chrome extension</Typography>
        <Typography >Here's the mvp version of neurosentry, an application designed to help you understand your cognitive states and enhance productivity. The beta chrome extension allows you to connect to a BCI and measure your focus while working on a chromium based browser. The extension's dashboard gives you an simple way to glance at which sites you are most focused on when working and when you may need a break.
        </Typography>
        <Chip sx={{mt:1, mb:1, mr:1}} label="Twitter" color="primary" onClick={()=>{window.open('https://x.com/Anant_world/status/1799822620894044626',"_blank")}} />
      </Box>
      <Box component='img' sx={{width: '25%'}}
          src={neurosentryImg}>
      </Box>
    </Paper>
    <Paper variant="outlined" sx={{"&:hover": { boxShadow: 6 }, mb:2, maxWidth:'lg', maxHeight:'md', display: 'flex', flexDirection: { xs: 'column', md: 'row' },}} elevation={8}>
      <Box sx={{ml:1, mr:1}}>
        <Typography variant="h6" sx={{ fontWeight: 500}} >Fashion Recommentation using CLIP + Deepfashion Dataset</Typography>
        <Typography variant="h6" sx={{fontWeight: 300, mb: 1}}>a jupyter notebook</Typography>
        <Typography >The application generates embeddings from a dataset of over 300k images using Openai's CLIP model. These embeddings are uploaded into Pinecone and the juypter notebook can query the embeddings from Pinecone to recommend clothing based on an uploaded image. The dataset only has female clothing, looking to enhance this project by querying with a larger dataset.  
        </Typography>
        <Chip sx={{mt:1, mb:1, mr: 1}} label="Colab" color="primary" onClick={()=>{window.open('        https://colab.research.google.com/drive/1qrY8s2s_SvR19U51SOlDQIClA4CqoDUY?usp=sharing')}} />
        <Chip sx={{mt:1, mb:1, mr: 1}} label="Presentation" color="primary" onClick={()=>{window.open('https://docs.google.com/presentation/d/1_KnRXHKbEKzPEyrd9yvJq4T2mfHuiqz2Ux_W-NuHJdU/edit?usp=sharing')}} />
      </Box>
      <Box component='img' sx={{width: '25%'}}
          src={FashionRecommendationImg}>
      </Box>
    </Paper>
    <Paper variant="outlined" sx={{"&:hover": { boxShadow: 6 }, mb:2, maxWidth:'lg', maxHeight:'md', display: 'flex', flexDirection: { xs: 'column', md: 'row' },}} elevation={8}>
      <Box sx={{ml:1, mr:1}}>
        <Typography variant="h6" sx={{ fontWeight: 500}} >Daily Updates</Typography>
        <Typography variant="h6" sx={{fontWeight: 300, mb: 1}}>a web app</Typography>
        <Typography >An application to keep you accountable on what you have been working. Users are able to add votes and see other people's updates over time. Additionally, there is an option to upvote a given post, which will rank the post higher in everyone's feed. 
        </Typography>
        <Chip sx={{mt:1, mb:1, mr:1}} label="Website" color="primary" onClick={()=>{window.open('https://daily-updates-1.web.app/')}} />
      </Box>
      <Box component='img' sx={{width: '25%'}}
        src={DailyUpdatesImg}>
      </Box>
    </Paper>
    
    </div>
  )
}