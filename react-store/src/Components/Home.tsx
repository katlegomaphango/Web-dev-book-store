import { Box, Button, Paper, Rating, Typography, styled } from "@mui/material"
import wallpaper from '/assets/wallpaper.jpg'
import { Link } from "react-router-dom"
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
                        top3.map((book) => (
                            <Box key={book.id} mb={3}>
                                <Link to={'/'} style={{textDecoration: 'none'}}>
                                    <Typography variant="h5">
                                        {book.title}
                                    </Typography>
                                </Link>
                                <Typography variant="h6">
                                    R {book.price}
                                </Typography>
                                <Typography sx={{fontStyle: 'italic'}}>
                                    Written by {book.author} <br />
                                    Added to collection on {book.date_Added}
                                </Typography>
                                <Typography>
                                    <Rating value={book.rating} readOnly />
                                </Typography>
                            </Box>
                        ))
                    }
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button variant="contained">
                        View All Books<ArrowCircleRight sx={{ml: 1}} />
                    </Button>
                </Box>
            </BodyBox>
            <Box mt={2}>
                <BodyTitle variant="h4">
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