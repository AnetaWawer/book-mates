import React from 'react';
import {Box, Typography} from "@mui/material";

const NoPage = () => {
    return (
        <Box sx = {{height: 500}}>
        <Typography color="primary"
                    align="center"
                    gutterBottom={true}
                    variant="h1" component="p">
            przykro mi, ta strona nie istnieje
        </Typography>
        </Box>
    );
};

export default NoPage;