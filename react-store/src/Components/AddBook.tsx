import { Box, Button, MenuItem, TextField, Typography } from "@mui/material"


const AddBook = () => {

    return (
        <>
        <Box my={10} width={"100%"} display={'flex'} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="h3">Add Book</Typography>
            <form style={{width: '20rem'}}>
                <Box mt={4}>
                    <TextField label="Title" name="title" fullWidth />
                </Box>
                <Box mt={3}>
                    <TextField label="Author" name="author" fullWidth />
                </Box>
                <Box mt={3}>
                    <TextField label="Description" name="description" multiline rows={4}  fullWidth />
                </Box>
                <Box mt={3}>
                    <TextField label="Price" name="price" fullWidth />
                </Box>
                <Box mt={3}>
                    <TextField label="Rating" name="rating" select fullWidth>
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