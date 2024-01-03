import React, {useState} from 'react';
import styled from 'styled-components/native';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  `;

const Input = styled.TextInput`
  flex: 1;
  border-width: 1px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 8px;
`;

const SearchBarButton = styled.Button``;

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchBarContainer>
      <Input
        placeholder="Enter Project Name"
        value={query}
        onChangeText={text => setQuery(text)}
      />
      <SearchBarButton title="Search" onPress={handleSearch} />
    </SearchBarContainer>
  );
};

export default SearchBar;
