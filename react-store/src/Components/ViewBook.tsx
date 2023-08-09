import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { supabase } from '../supaBaseClient'
import { Box, Rating, Typography } from "@mui/material"



const ViewBook = () => {
    const { id } = useParams()
    const [book, setBook] = useState({
        book_id: 0,
        title: '',
        price: 0,
        author: '',
        date_Added: Date.now(),
        rating: 0,
        description: ''
    })

    useEffect(()=>{
        const fetchBook = async () => {
            const { data, error } = await supabase
                .from('devBooks')
                .select()
                .eq('book_id', id)
            
            if(error) throw error
            console.log(data)
            setBook(data[0])
        }

        fetchBook()
    }, [])

    return (
        <>
            <Box my={10}>
                <Typography variant="h3">Book Details</Typography>
                <Typography variant="h3">
                    <Link to={`/ViewBook/${book.book_id}`} style={{textDecoration: "none"}}>
                        {book.title}
                    </Link>
                </Typography>
                <Typography variant="h5" my={2}>
                    R {book.price.toFixed(2)}
                </Typography>
                <Typography sx={{fontStyle: 'italic'}}>
                    Written by {book.author} <br />
                    Added to collection on {book.date_Added}
                </Typography>
                <Typography my={2}>
                    <Rating value={book.rating} readOnly sx={{color: 'black'}} />
                </Typography>
                <Typography variant="h4" my={2}>
                    Description
                </Typography>
                <Typography>
                    {book.description}
                </Typography>
            </Box>
        </>
    )
}

export default ViewBook