import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux"
import { onLoadEsports, onLoadMatches, onLoadPosts, onLoadRivals, onLoadUpcomingMatches } from "./Redux/Thunks";

import { AppRouter } from "./Routes/AppRouter"

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onLoadMatches())
    dispatch(onLoadRivals())
    dispatch(onLoadEsports())
    dispatch(onLoadPosts())
    dispatch(onLoadUpcomingMatches());
  }, [])

  return (
    <AppRouter />
  )
}
