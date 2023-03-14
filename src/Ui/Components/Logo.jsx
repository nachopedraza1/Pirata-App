import { Box } from "@mui/material"
import { Link } from "react-router-dom"

export const Logo = ({ size, p, pt, pb }) => {
    return (
        <Box textAlign="center" padding={p} paddingTop={pt} paddingBottom={pb} >
            <Link to="/">
                <img src="/assets/images/logo.png" alt="Belgrano Esports" width={size} />
            </Link>
        </Box>
    )
}
