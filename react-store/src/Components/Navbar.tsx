import { Home, LibraryAdd, LibraryBooks, List, MenuBook } from "@mui/icons-material"
import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const MainBox = styled(Box)({
    flexGrow: 1
})

const MainContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const LeftBox = styled(Box)({
    display: 'flex',
    alignItems: 'center'
})

const RightBox = styled(Box)({
    display: 'flex',
    alignItems: 'center'
})

const Navbar = () => {
    const [anchorEl, setAnchorEl] =useState<null | HTMLElement>(null)
    const navigate = useNavigate()
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <MainBox>
            <AppBar position="fixed">
                <Toolbar>
                    <MainContainer maxWidth='lg'>
                        <LeftBox>
                            <Button 
                                variant="text"
                                startIcon={<LibraryBooks />}
                                color="inherit"
                                size="large"
                            >
                                <Typography 
                                    variant="h6"
                                    component='div'
                                >
                                    WeB Dev books
                            </Typography>
                            </Button>
                        </LeftBox>
                        <RightBox>
                            <Button
                                variant="text"
                                startIcon={<Home />}
                                color="inherit"
                                size="large"
                                onClick={() => navigate('/')}
                            >
                                Home
                            </Button>
                            <div>
                                <Button
                                    id="menu-button"
                                    variant="text"
                                    color="inherit"
                                    size="large"
                                    startIcon={<MenuBook />}
                                    onClick={handleClick}
                                >
                                    Books
                                </Button>
                                <Menu 
                                    open={open}
                                    onClose={handleClose}
                                    anchorEl={anchorEl}
                                    MenuListProps={{
                                        'aria-labelledby': 'menu-button'
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link to={'/ViewAllBooks'} style={{textDecoration: "none", display: 'flex'}}>
                                            <List sx={{mr: 1}} />
                                            View All
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link to={'/AddBook'} style={{textDecoration: 'none', display: 'flex'}}>
                                            <LibraryAdd sx={{mr: 1}} />
                                            Add book
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </div>
                        </RightBox>
                    </MainContainer>
                </Toolbar>
            </AppBar>
        </MainBox>
        </>
    )
}

export default Navbar