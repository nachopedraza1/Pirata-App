import { useState } from 'react';

import { Tabs, Tab, Box } from '@mui/material';

import { UpcomingMatchesContainer } from './UpcomingMatchesContainer';
import { MatchContainer } from './MatchContainer';

const TabPanel = (props) => {
    const { children, value, index, } = props;

    return (
        <Box>
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </Box>
    );
}


export const TabMatches = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        width: "100%",
                        height: "50px",
                        backgroundColor: "backgraunds.main",
                        borderLeft: "5px solid",
                        borderColor: "primary.main",
                        borderRadius: "5px",
                        marginBottom: "10px",
                        marginTop: "10px"
                    }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="PROXIMOS PARTIDOS" sx={{ fontFamily: "Aldrich", color: "white" }} />
                        <Tab label="ULTIMOS PARTIDOS" sx={{ fontFamily: "Aldrich", color: "white" }} />
                    </Tabs>
                </Box>

            </Box>
            <TabPanel value={value} index={0}>
                <UpcomingMatchesContainer />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MatchContainer />
            </TabPanel>
        </Box>
    );
}