import { Navigate, Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "../../Ui"

import { HomePage, ProjectPage } from "../Pages"


export const MainRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>
    )
}
