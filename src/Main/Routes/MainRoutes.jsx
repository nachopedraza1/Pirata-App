import { useSelector } from "react-redux"
import { Navigate, Route, Routes, Link } from "react-router-dom"

import { ContactPage, HomePage, ProjectPage, TeamsPage } from "../Pages"

import { Footer, Navbar } from "../../Ui"
import { Settings } from "@mui/icons-material"
import { Box, Fab } from "@mui/material"

export const MainRoutes = () => {

    const { displayName, uid, status } = useSelector(state => state.auth)

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />

            {
                status === "authenticated" &&
                    displayName === "adminbelgrano" &&
                    uid === "MxMcbyiHMxeOHTSoXIs1Kmsqic33"
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
