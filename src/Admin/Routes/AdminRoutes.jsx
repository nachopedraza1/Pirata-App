import { Route, Routes } from "react-router-dom"
import { AddMatches } from "../Modules"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={< AddMatches />} />
        </Routes>
    )
}
