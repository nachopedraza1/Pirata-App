import { Route, Routes } from "react-router-dom"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { AuthRoutes } from "../Auth/Routes/AuthRoutes"
import { MainRoutes } from "../Main/Routes/MainRoutes"

export const AppRouter = () => {

  const { status } = useCheckAuth();

  return (
    <>
      <Routes>

        {
          (status === "authenticated")
            ? <Route path="/*" element={<MainRoutes />} />
            : <Route path="/auth/*" element={<AuthRoutes />} />
        }

        {
          (status === "not-authenticated")
            ? <Route path="/*" element={<MainRoutes />} /> : null
        }

      </Routes>
    </>
  )
}