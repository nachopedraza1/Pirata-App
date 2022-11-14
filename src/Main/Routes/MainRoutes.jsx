import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../Ui/Navbar"
import { HomePage } from "../Pages/HomePage"

export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>

    )
}
