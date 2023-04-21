import { useState } from 'react';
import styled from 'styled-components';
import BasicSelect from './BasicSelect';


const StyledSearchPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
  background-color: #fff;

  & > * {
    margin: 5px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    & > * {
      margin: 0;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin: 0;
    }

    & > *:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const SearchInput = styled.input`
  width: 60%;
  height: 40px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SearchButton = styled.button`
  height: 40px;
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 600px) {
    margin-top: 5px;
    width: 100%;
  }
`;

const SearchPanel = ({ searchCriteriaItems, onSearch }) => {
    const [searchInput, setSearchInput] = useState('');
    const [searchCriteria, setSearchCriteria] = useState(searchCriteriaItems[0].value);

    const handleSearch = () => {
        onSearch(searchInput, searchCriteria);
    };

    return (
        <StyledSearchPanel>
            <SearchInput
                type="text"
                placeholder="Tytuł lub autor"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                />
                <BasicSelect
                    labelId="search-by-label"
                    id="searchCriteria"
                    value={searchCriteria}
                    label="Znajdź:"
                    handleChange={(e) => setSearchCriteria(e.target.value)}
                    items={searchCriteriaItems}
                />
                <SearchButton onClick={handleSearch}>Szukaj</SearchButton>
        </StyledSearchPanel>
    );
};

export default SearchPanel;
