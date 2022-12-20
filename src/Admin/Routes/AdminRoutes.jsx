import { Navigate, Route, Routes } from "react-router-dom"
import { AdminPanelLayout } from "../Layout/AdminPanelLayout"
import { AddMatches, AddRivals, AddEsports, AddDateMatch } from "../Modules"

export const AdminRoutes = () => {
    return (
        <AdminPanelLayout>
            <Routes>
                <Route path="/addmatches" element={< AddMatches />} />
                <Route path="/addrivals" element={< AddRivals />} />
                <Route path="/addesports" element={< AddEsports />} />
                <Route path="/adddate" element={< AddDateMatch />} />
                <Route path="/*" element={<Navigate to="/admincp/addmatches" />} />
            </Routes>
        </AdminPanelLayout>
    )
}
