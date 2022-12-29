import { Navigate, Route, Routes } from "react-router-dom"
import { AddMatches, AddRivals, AddEsports, AddDateMatch, AddLeagues } from "../Modules"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/addmatches" element={< AddMatches />} />
            <Route path="/addrivals" element={< AddRivals />} />
            <Route path="/addesports" element={< AddEsports />} />
            <Route path="/adddate" element={< AddDateMatch />} />
            <Route path="/addleague" element={< AddLeagues />} />
            <Route path="/*" element={<Navigate to="/admincp/addmatches" />} />
        </Routes>
    )
}
