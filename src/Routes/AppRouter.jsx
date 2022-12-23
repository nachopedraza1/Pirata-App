import { Route, Routes } from "react-router-dom"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { AuthRoutes } from "../Auth/Routes/AuthRoutes"
import { MainRoutes } from "../Main/Routes/MainRoutes"
import { AdminRoutes } from "../Admin/Routes/AdminRoutes"

export const AppRouter = () => {

  const { status } = useCheckAuth();

  return (
    <>
      <Routes>


        {
          (status === "not-authenticated")
            ? <Route path="/auth/*" element={<AuthRoutes />} /> : null
        }
        <Route path="/*" element={<MainRoutes />} />
        <Route path="/admincp/*" element={<AdminRoutes />} />

      </Routes>
    </>
  )
}