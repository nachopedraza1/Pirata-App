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
    const [value, setValue] = useState(1);

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
                    padding=" 32px 0px"
                    sx={{
                        width: "100%",
                        height: "50px",
                        backgroundColor: "backgraunds.secondary",
                        borderLeft: "5px solid",
                        borderColor: "primary.main",
                        marginBottom: "13px",
                        marginTop: "13px"
                    }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="ULTIMOS PARTIDOS" sx={{ fontFamily: "Aldrich", color: "white" }} disableRipple />
                        <Tab label="PROXIMOS PARTIDOS" sx={{ fontFamily: "Aldrich", color: "white" }} disableRipple />
                    </Tabs>
                </Box>

            </Box>
            <TabPanel value={value} index={0}>
                <MatchContainer />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UpcomingMatchesContainer />
            </TabPanel>
        </Box>
    );
}