import { Box, Container, Typography } from "@mui/material"
import { Project } from "../components/project/project"
export const Projects = () => {
  return (
    <Container>
    <Typography variant="h5" sx={{fontWeight: 500 }} mb={1} mt={1}>projects</Typography>
    <Typography mb={2}>here are some of the few projects i've been working 
        on recently. feel free to reach out anytime if you 
        are curious about them or if you wanna collab on a 
        project!</Typography>
      <Box sx={{display: 'flex'}}>
        <Project />
      </Box>
    </Container>
  )
}