import { Home, LibraryAdd, LibraryBooks, List, MenuBook, MenuOpen } from "@mui/icons-material"
import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
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
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <>
            <Box onClick={handleDrawerToggle} sx={{width: '15rem', pl: 2 }}>
                <Typography 
                        variant="h6"
                        component='div'
                        sx={{ my: 1.5 }}
                        textAlign={'center'}
                    >
                        Menu
                </Typography>
                <Divider />
                    <Button
                        variant="text"
                        startIcon={<Home />}
                        color="inherit"
                        size="large"
                        onClick={() => navigate('/')}
                    >
                        Home
                    </Button>
                    <br />
                    <Typography 
                        variant="h6"
                        component='div'
                        sx={{ my: 1.5 }}
                        textAlign={'center'}
                    >
                        Books
                    </Typography>
                    <Divider />
                    <Button
                        variant="text"
                        startIcon={<List />}
                        color="inherit"
                        size="large"
                        onClick={() => navigate('/ViewAllBooks')}
                    >
                        View All
                    </Button>
                    <br />
                    <Button
                        variant="text"
                        startIcon={<LibraryAdd />}
                        color="inherit"
                        size="large"
                        onClick={() => navigate('/AddBook')}
                    >
                        Add book
                    </Button>
            </Box>
        </>
    )

    return (
        <>
        <MainBox>
            <AppBar component="nav" position="fixed">
                <Toolbar>
                    <MainContainer maxWidth='lg'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuOpen />
                            <Typography 
                                variant="h6"
                                component='div'
                                ml={1}
                            >
                                WeB Devbooks
                            </Typography>
                        </IconButton>
                        <LeftBox sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
                        <RightBox sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
            <Box component={'nav'}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none'},
                        '& .MuiDrawer': { boxSizing: 'border-box', width: 300}
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </MainBox>
        </>
    )
}

export default Navbar