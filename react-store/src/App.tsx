import { Box, Container } from '@mui/material'
import './App.css'
import { Navbar } from './Components'

function App() {

  return (
    <>
      <Box>
        <Navbar />
        <Container maxWidth='lg'>
          content
        </Container>
      </Box>
    </>
  )
}

export default App
