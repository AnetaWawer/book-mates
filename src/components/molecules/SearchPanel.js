import {useState} from 'react';
import BasicSelect from './BasicSelect';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


const SearchPanel = ({ searchCriteriaItems, onSearch }) => {
    const [searchInput, setSearchInput] = useState('');
    const [searchCriteria, setSearchCriteria] = useState(searchCriteriaItems[0].value);

    const handleSearch = () => {
        onSearch(searchInput, searchCriteria);
    };

    return (
        <Grid container
              direction={'row'}
              spacing={1}
              sx={{py: 2}}
              justifyContent="flex-end"
        >
            <Grid item xs={12} sm={12} md={3} lg={3} xl={4}>
                <TextField
                    fullWidth
                    type="text"
                    placeholder="Tytuł lub autor"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={2} xl={1}>
                <BasicSelect
                        labelId="search-by-label"
                        id="searchCriteria"
                        value={searchCriteria}
                        label="Znajdź:"
                        handleChange={(e) => setSearchCriteria(e.target.value)}
                        items={searchCriteriaItems}
                    />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={1} xl={1}>
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{ py: 1.8 }}
                    onClick={handleSearch}>
                    Szukaj
                </Button>
            </Grid>
        </Grid>
    );
};

export default SearchPanel;
