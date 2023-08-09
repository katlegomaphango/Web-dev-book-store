import { Box, Container } from '@mui/material'
import './App.css'
import { Footer, Home, Navbar } from './Components'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Box>
        <Navbar />
        <Container maxWidth='lg'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </>
  )
}

export default App
