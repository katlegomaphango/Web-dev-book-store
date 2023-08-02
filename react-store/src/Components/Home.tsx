import { Box, Paper, Typography, styled } from "@mui/material"
import wallpaper from '/assets/wallpaper.jpg'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "../supaBaseClient"

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
        <Box mt={2}>
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
                            </Box>
                        ))
                    }
                </Box>
            </BodyBox>
            Home
        </Box>
        </>
    )
}

export default Home