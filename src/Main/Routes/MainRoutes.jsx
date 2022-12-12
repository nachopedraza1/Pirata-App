import { Navigate, Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "../../Ui"

import { HomePage, ProjectPage } from "../Pages"
import { TeamsPage } from "../Pages/TeamsPage"


export const MainRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>
    )
}
