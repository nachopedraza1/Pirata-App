
import { Navigate, Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "../../Ui"
import { Preloader } from "../../Ui/Components"

import { HomePage, ProjectPage, TeamsPage, MatchesPage } from "../Pages"

export const MainRoutes = () => {

    return (
        <>
            <Preloader />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/matches" element={<MatchesPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>
    )
}
