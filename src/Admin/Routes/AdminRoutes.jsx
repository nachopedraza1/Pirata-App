import { Navigate, Route, Routes } from "react-router-dom"
import { Preloader } from "../../Ui/Components"
import { AddMatches, AddRivals, AddEsports, AddDateMatch, AddLeagues, Applicants } from "../Modules"

export const AdminRoutes = () => {
    return (
        <>
            <Preloader />
            <Routes>
                <Route path="/addmatches" element={< AddMatches />} />
                <Route path="/addrivals" element={< AddRivals />} />
                <Route path="/addesports" element={< AddEsports />} />
                <Route path="/adddate" element={< AddDateMatch />} />
                <Route path="/addleague" element={< AddLeagues />} />
                <Route path="/applicants" element={< Applicants />} />
                <Route path="/*" element={<Navigate to="/admincp/addmatches" />} />
            </Routes>
        </>
    )
}
