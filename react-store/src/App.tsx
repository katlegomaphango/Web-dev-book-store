import { Box, Container } from '@mui/material'
import './App.css'
import { Home, Navbar } from './Components'
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
      </Box>
    </>
  )
}

export default App
