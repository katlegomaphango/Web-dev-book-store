import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { supabase } from '../supaBaseClient'
import { Box, Rating, Skeleton, Typography } from "@mui/material"



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
            setBook(data[0])
        }

        fetchBook()
    }, [])

    return (
        <>
            <Box my={10}>
                <Typography variant="h3">Book Details</Typography>

                {
                    book.book_id == 0 ? (
                        <>
                            <Skeleton animation="wave" sx={{width: {xs: '100%', md: '60%'}}} height={60} />
                            <Skeleton animation="wave" sx={{width: {xs: '40%', md: '30%'}}} height={60} />
                            <Skeleton animation="wave" sx={{width: {xs: '100%', md: '40%'}}} height={20} />
                            <Skeleton animation="wave" sx={{width: {xs: '100%', md: '40%'}}} height={20} />
                            <Skeleton animation="wave" sx={{width: {xs: '40%', md: '20%'}}} height={40} />
                            <Typography variant="h4" my={2}>
                                Description
                            </Typography>
                            <Skeleton animation="wave" sx={{width: {xs: '100%', md: '80%'}}} height={100} />
                        </> 
                    ) : (
                        <>
                            <Typography variant="h3">
                                <Link to={`/ViewBook/${book.book_id}`} style={{textDecoration: "none"}}>
                                    {book.title}
                                </Link>
                            </Typography>
                            <Typography variant="h5" my={2}>
                                R {book.price}
                            </Typography>
                            <Typography sx={{fontStyle: 'italic'}}>
                                Written by {book.author} <br />
                                Added to collection on {new Date(book.date_Added).toLocaleDateString()}
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
                        </>
                    )
                }
                
            </Box>
        </>
    )
}

export default ViewBook