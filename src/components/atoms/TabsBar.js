import React from 'react';
import {Box, Typography} from "@mui/material";

const TabsBar = (props) => {
    const { children, value, index} = props;
    return (
            <div>
                {value === index && (
                    <Box sx={{ p: 3, justifyContent: 'center'}}>
                        <Typography component={'div'}>{children}</Typography>
                    </Box>
                )}
            </div>
    );
}

export default TabsBar;