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

    const handleKeyPress = (event) => {
        if (event.key ==="Enter") {
            handleSearch()
        }
    }

    return (
        <Grid container
              direction={'row'}
              spacing={1}
              justifyContent="flex-end"
              sx ={{ mt : 1, mb: 7}}
              onKeyDown={handleKeyPress}
        >
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
                <TextField
                    fullWidth
                    size='small'
                    placeholder="Tytuł lub autor"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    sx ={{ mt : 1}}
                    />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={2} >
                <BasicSelect
                    sx ={{ mt : 1}}
                    size='small'
                    value={searchCriteria}
                    label="Znajdź:"
                    handleChange={(e) => setSearchCriteria(e.target.value)}
                    items={searchCriteriaItems}
                />
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2} xl={1} >
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{ height: 40, mt: 1 }}
                    onClick={handleSearch}
                >
                    Szukaj
                </Button>
            </Grid>
        </Grid>
    );
};

export default SearchPanel;
