import { Box, Button, MenuItem, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { supabase } from "../supaBaseClient"
import { useNavigate } from "react-router-dom"


const AddBook = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        price: 0,
        rating: 0,
        date_Added: new Date(Date.now())
    })

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            date_Added: new Date(Date.now()),
            [event.target.name]: event.target.value,
        }))
    }

    const handleAddBook = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const {error} = await supabase
            .from('devBooks')
            .insert(formData)

        if(error) throw error
        navigate('/')
    }

    console.log(formData)

    return (
        <>
        <Box my={10} width={"100%"} display={'flex'} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="h3">Add Book</Typography>
            <form style={{width: '20rem'}} onSubmit={handleAddBook}>
                <Box mt={4}>
                    <TextField label="Title" name="title" fullWidth onChange={handleInput} />
                </Box>
                <Box mt={3}>
                    <TextField label="Author" name="author" fullWidth onChange={handleInput} />
                </Box>
                <Box mt={3}>
                    <TextField label="Description" name="description" multiline rows={4}  fullWidth onChange={handleInput} />
                </Box>
                <Box mt={3}>
                    <TextField label="Price" name="price" fullWidth onChange={handleInput} />
                </Box>
                <Box mt={3}>
                    <TextField type="number" value={formData.rating} label="Rating" name="rating" select fullWidth onChange={handleInput}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </TextField>
                </Box>

                <Box mt={3}>
                    <Button variant="contained" type="submit">Add Book</Button>
                </Box>
            </form>
        </Box>
        </>
    )
}

export default AddBook