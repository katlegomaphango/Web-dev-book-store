import { Box, Paper, Typography, styled } from "@mui/material"
import wallpaper from '/assets/wallpaper.jpg'

const MainBox = styled(Box)({
    marginTop: 20
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

const Home = () => {
    return (
        <>
        <MainBox>
            <HeroPaper>
                <HeroTitle variant="h3">
                    Web Development Book Store
                </HeroTitle>
                <HeroSub>
                    Shop online at the WebDev Book Store for amazing discounts on best-selling web development books!
                </HeroSub>
            </HeroPaper>
            Home
        </MainBox>
        </>
    )
}

export default Home