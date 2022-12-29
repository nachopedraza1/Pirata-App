import { Link as RouterLink } from 'react-router-dom'

import { Box, Container, Divider, Grid, List, Typography, Link, Button } from '@mui/material'
import { Email, Phone } from '@mui/icons-material'

import { Glitch, Logo, SocialButtons } from './Components'

const navItems = [{ text: "INICIO", ref: "" }, { text: "EL PROYECTO", ref: "project" }, { text: "ESPORTS", ref: "teams" }, { text: "CONTACTO", ref: "contact" }]

export const Footer = () => {
    return (
        <Box bgcolor="backgraunds.main" borderTop="2px solid #2192FF">
            <Container maxWidth="lg">
                <Grid container justifyContent="space-between" alignItems="center" padding={4} >
                    <Grid item xs={12} md={3} display="flex" justifyContent="center" >
                        <Logo size="150px" />
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center" position="relative">
                        <List sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                            {navItems.map((item) => (
                                <Link component={RouterLink} to={`/${item.ref}`} underline="none" key={item.text}>
                                    <Button disableTouchRipple sx={{ color: '#fff', "&:hover": { color: "primary.main" } }}>
                                        {item.text}
                                    </Button>
                                </Link>
                            ))}
                        </List>

                        <List sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", position: "absolute", top: "80%" }}>

                            <Button size='small' href='mailto:belgranoegames@gmail.com' disableTouchRipple startIcon={<Email sx={{ color: "primary.main" }} />} sx={{ color: 'gray', "&:hover": { color: "primary.main" }, fontSize: "12px" }}>
                                belgranoegames@gmail.com
                            </Button>

                            <Button size='small' disableTouchRipple startIcon={<Phone sx={{ color: "primary.main" }} />} sx={{ color: 'gray', "&:hover": { color: "primary.main" } }}>
                                0351-4967008
                            </Button>

                        </List>
                    </Grid>

                    <Grid item xs={12} md={3} display="flex" justifyContent="center" paddingTop={{ xs: 5, md: 0 }}>
                        <img src="/assets/images/logocabrepublica.png" alt="" width="100%" style={{ maxWidth: "250px" }} />
                    </Grid>
                </Grid>

                <Divider sx={{
                    color: "white",
                    "&::before, &::after": {
                        borderColor: "secondary.light",
                    },
                }} >
                    <img src="/assets/images/belgrano-calavera-white.png" width="50px" alt="" />
                </Divider>


                <Grid container justifyContent="space-between" padding={3} >
                    <Grid item display="flex" flexDirection="column" alignItems="center" xs={12} >
                        <SocialButtons />
                        <Typography variant='p' maxWidth="20x" fontSize={10} fontWeight="bold" color="gray">@Copyright.Todos los derechos reservados.</Typography>
                        <Glitch />
                    </Grid>

                </Grid>
            </Container>
            <Box height="25px" bgcolor="backgraunds.black" textAlign="end">
                <Typography></Typography>
            </Box>
        </Box >
    )
}
