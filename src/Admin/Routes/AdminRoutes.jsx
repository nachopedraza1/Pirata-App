import { Navigate, Route, Routes } from "react-router-dom"
import { AddMatches } from "../Modules"
import { AddRivals } from "../Modules/AddRivals"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="addmatches" element={< AddMatches />} />
            <Route path="addrivals" element={< AddRivals />} />
            <Route path="/*" element={<Navigate to="/admincp/addmatches" />} />
        </Routes>
    )
}
