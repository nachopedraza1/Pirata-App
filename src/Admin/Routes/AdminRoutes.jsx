import { Navigate, Route, Routes } from "react-router-dom"
import { AddMatches, AddRivals, AddEsports } from "../Modules"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="/admincp/addmatches" />} />
            <Route path="addmatches" element={< AddMatches />} />
            <Route path="addrivals" element={< AddRivals />} />
            <Route path="addesports" element={< AddEsports />} />
        </Routes>
    )
}
