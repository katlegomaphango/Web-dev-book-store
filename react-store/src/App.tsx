import { Box, Container } from '@mui/material'
import './App.css'
import { AddBook, Footer, Home, Navbar, ViewAllBooks, ViewBook } from './Components'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Box>
        <Navbar />
        <Container maxWidth='lg'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ViewBook/:id' element={<ViewBook />} />
            <Route path='/ViewAllBooks' element={<ViewAllBooks />} />
            <Route path='/AddBook' element={<AddBook />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </>
  )
}

export default App
