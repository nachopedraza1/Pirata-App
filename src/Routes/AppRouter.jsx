import { Route, Routes } from "react-router-dom"

import { Navbar } from "../Ui/Navbar"

import { AuthRoutes } from "../Auth/Routes/AuthRoutes"
import { MainRoutes } from "../Main/Routes/MainRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<MainRoutes />} />
      </Routes>
    </>
  )
}