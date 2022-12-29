import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"

import { useCheckAuth } from "../hooks/useCheckAuth"

import { AuthRoutes } from "../Auth/Routes/AuthRoutes"
import { MainRoutes } from "../Main/Routes/MainRoutes"
import { AdminRoutes } from "../Admin/Routes/AdminRoutes"

import { Preloader } from "../Ui/Components"

export const AppRouter = () => {

  const { status } = useCheckAuth();

  const { displayName, uid, } = useSelector(state => state.auth);

  return (
    <>
      <Preloader />
      <Routes>
        {
          (status !== "authenticated")
            ? <Route path="/auth/*" element={<AuthRoutes />} /> : null
        }
        <Route path="/*" element={<MainRoutes />} />

        {
          status === "authenticated" &&
            displayName === "adminbelgrano" &&
            uid === "MxMcbyiHMxeOHTSoXIs1Kmsqic33"
            ?
            <Route path="/admincp/*" element={<AdminRoutes />} /> : null
        }

      </Routes>
    </>
  )
}