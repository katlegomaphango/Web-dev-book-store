import { Copyright } from "@mui/icons-material"
import { Container, Typography, styled } from "@mui/material"

const FooterText = styled(Typography)({
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
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
                        <p>
                            Created by
                            <a href="https://katlegomaphango.co.za" target="_blank" style={{marginLeft: 8}}>
                                Katlego Maphango
                            </a>
                        </p>
                        <p style={{display: 'flex', justifyContent: 'center'}}>
                            <Copyright sx={{marginRight: 1}} /> 2023 - WebDev Book Store
                        </p>
                    </FooterText>
                </Container>
            </div>
        </>
    )
}

export default Footer