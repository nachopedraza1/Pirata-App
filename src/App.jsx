import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { onLoadEsports, onLoadMatches, onLoadPosts, onLoadRivals, onLoadUpcomingMatches } from "./Redux/Thunks";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { AppRouter } from "./Routes/AppRouter"

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({once: true});
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
