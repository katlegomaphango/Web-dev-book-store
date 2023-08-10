import { Box, Button, Paper, Rating, Skeleton, Typography, styled } from "@mui/material"
import wallpaper from '/assets/wallpaper.jpg'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "../supaBaseClient"
import { ArrowCircleRight } from "@mui/icons-material"

const BodyBox = styled(Box)({
    backgroundColor: '#9DB2BF',
    padding: 20,
    borderRadius: 5
})

const HeroPaper = styled(Paper)({
    backgroundImage: `url(${wallpaper})`,
    width: '100%',
    height: '15rem',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
})

const HeroTitle = styled(Typography)({
    color: 'white',
    textAlign: 'center',
    
})

const HeroSub = styled(Typography)({
    color: 'white',
    textAlign: 'center',
    opacity: '0.3',
    fontStyle: 'italic'
})

const BodyTitle = styled(Typography)({
    textAlign: 'center'
})

const Home = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [top3, setTop3] = useState<any>([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('devBooks')
                .select('*')
                .order('date_Added', { ascending: false })
                .limit(3)

            if(error) throw error
            setTop3(data)
        }
        fetchData()
    }, [])

    return (
        <>
        <Box mt={10}>
            <HeroPaper>
                <HeroTitle variant="h3">
                    Web Development Book Store
                </HeroTitle>
                <HeroSub>
                    Shop online at the WebDev Book Store for amazing discounts on best-selling web development books!
                </HeroSub>
            </HeroPaper>
            <BodyBox mt={2}>
                <BodyTitle variant="h3">
                    New Releases
                </BodyTitle>
                <Box mt={2}>
                    {
                        top3.length === 0 ? (
                            <Box>
                                <Box mb={3}>
                                    <Skeleton sx={{width: {xs: '100%', md: '60%'}}} height={50} />
                                    <Skeleton sx={{width: {xs: '40%', md: '20%'}}} height={40} />
                                    <Skeleton sx={{width: {xs: '100%', md: '40%'}}} height={20} />
                                    <Skeleton sx={{width: {xs: '100%', md: '40%'}}} height={20} />
                                    <Skeleton sx={{width: {xs: '40%', md: '20%'}}} height={40} />
                                </Box>
                                <Box mb={3}>
                                    <Skeleton sx={{width: {xs: '100%', md: '60%'}}} height={50} />
                                    <Skeleton sx={{width: {xs: '40%', md: '20%'}}} height={40} />
                                    <Skeleton sx={{width: {xs: '100%', md: '40%'}}} height={20} />
                                    <Skeleton sx={{width: {xs: '100%', md: '40%'}}} height={20} />
                                    <Skeleton sx={{width: {xs: '40%', md: '20%'}}} height={40} />
                                </Box>
                                <Box mb={3}>
                                    <Skeleton sx={{width: {xs: '100%', md: '60%'}}} height={50} />
                                    <Skeleton sx={{width: {xs: '40%', md: '20%'}}} height={40} />
                                    <Skeleton sx={{width: {xs: '100%', md: '40%'}}} height={20} />
                                    <Skeleton sx={{width: {xs: '100%', md: '40%'}}} height={20} />
                                    <Skeleton sx={{width: {xs: '40%', md: '20%'}}} height={40} />
                                </Box>
                            </Box>
                        ) : 
                        (top3.map((book) => (
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
                        )))
                    }
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button variant="contained" onClick={() => navigate('/ViewAllBooks')}>
                        View All Books<ArrowCircleRight sx={{ml: 1}} />
                    </Button>
                </Box>
            </BodyBox>
            <Box my={4}>
                <BodyTitle variant="h4" my={4}>
                    Our Favorite Books
                </BodyTitle>
                <Typography variant="body1" sx={{fontStyle: 'italic'}}>
                    Section still under construction....
                </Typography>
            </Box>
        </Box>
        </>
    )
}

export default Home