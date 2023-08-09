import { Copyright } from "@mui/icons-material"
import { Container, Typography, styled } from "@mui/material"

const FooterText = styled(Typography)({
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Footer = () => {
    return (
        <>
            <hr />
            <div>
                <Container maxWidth='lg' sx={{paddingTop: 3, paddingBottom: 3}}>
                    <FooterText>
                        Created by 
                        <a href="https://katlegomaphango.co.za" target="_blank" style={{marginLeft: 8}}>
                            Katlego Maphango
                        </a>
                        <Copyright sx={{marginLeft: 2, marginRight: 1}} /> 2023 - WebDev Book Store
                    </FooterText>
                </Container>
            </div>
        </>
    )
}

export default Footer