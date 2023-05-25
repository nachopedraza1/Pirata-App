import { useSelector } from "react-redux"
import { Navigate, Route, Routes, Link } from "react-router-dom"

import { Preloader } from "../../Ui/Components"
import { Footer, Navbar } from "../../Ui"

import { Settings } from "@mui/icons-material"
import { Box, Fab } from "@mui/material"

import { ContactPage, HomePage, JoinTeamPage, ProjectPage, TeamsPage } from "../Pages"

export const MainRoutes = () => {

    const { displayName, uid, status } = useSelector(state => state.auth)

    return (
        <>
            <Navbar />
            <Preloader />
            <Routes >
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/join" element={<JoinTeamPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />

            {
                status === "authenticated" &&
                    displayName === "adminbelgrano" &&
                    uid === "wPFAuUclMjQxkBKoQQP0wbP4DT73"
                    ?
                    <Box component={Link} to="/admincp/*" position="fixed" zIndex={1} color="white" top="13vh" right={30}>
                        <Fab color="primary" aria-label="add" >
                            <Settings />
                        </Fab>
                    </Box>
                    : null
            }
        </>
    )
}
