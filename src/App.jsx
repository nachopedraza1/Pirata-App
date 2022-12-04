import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { onLoadMatches } from "./Redux/Thunks"
import { AppRouter } from "./Routes/AppRouter"

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onLoadMatches())
  }, [])

  return (
    <AppRouter />
  )
}
