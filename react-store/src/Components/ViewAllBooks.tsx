import { useEffect, useState } from "react"
import { supabase } from "../supaBaseClient"
import { Box, Rating, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const ViewAllBooks = () => {
    const [bookArr, setBookArr] = useState<any>([])

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('devBooks')
                .select()
                .order('title', { ascending: true })

            if(error) throw error
            if(data) setBookArr(data)
        }
        fetchData()
    }, [])

    return (
        <>
        <Box my={10}>
            <Typography variant="h3" sx={{textAlign: 'center'}}>
                Our Current Collection of WebDev Books
            </Typography>
            <Box mt={2}>
                {
                    bookArr.map((book) => (
                        <Box key={book.id} mb={3}>
                            <Link to={`/ViewBook/${book.book_id}`} style={{textDecoration: 'none'}}>
                                <Typography variant="h5">
                                    {book.title}
                                </Typography>
                            </Link>
                            <Typography variant="h6" my={2}>
                                R {book.price}
                            </Typography>
                            <Typography sx={{fontStyle: 'italic'}}>
                                Written by {book.author} <br />
                                Added to collection on {new Date(book.date_Added).toLocaleDateString()}
                            </Typography>
                            <Typography my={2}>
                                <Rating value={book.rating} readOnly sx={{color: 'black'}} />
                            </Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
        </>
    )
}

export default ViewAllBooks