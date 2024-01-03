import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {CustomButton, SearchBar, Container, Typography} from '../../components';
import {goBack} from '../../navigation/navigation';
import {useSelector} from 'react-redux';
import {Select} from '../../store';
import styled from 'styled-components/native';
const ItemContainer = styled.View`
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 15px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const RepositoryListScreen = () => {
  const repositoryData = useSelector(Select.getProjectDetails)?.data;
  console.log('first###', repositoryData);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = async (username: string) => {
    const trimmedQuery = username.trim();

    if (trimmedQuery === '') {
      // If the search query is empty, show all data
      setFilteredData([]);
    } else {
      // Filter the repositories based on the search query
      const filteredRepositories = repositoryData.filter(item =>
        item.name.toLowerCase().includes(trimmedQuery.toLowerCase()),
      );
      setFilteredData(filteredRepositories);
    }
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      {repositoryData === null ? (
        <Typography title="Data is Null" color="danger" size="md" />
      ) : (
        <FlatList
          data={filteredData.length > 0 ? filteredData : repositoryData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ItemContainer>
              <Typography
                title={item.name}
                size="1x"
                color="primaryTextColor"
                fontWeight={'bold'}
              />
              <Typography
                title={`Stars: ${item.stargazers_count}`}
                size="lg"
                color="primaryTextColor"
                fontWeight="500"
              />
              <Typography
                title={`Forks: ${item.forks_count}`}
                size="lg"
                color="primaryTextColor"
                fontWeight="500"
              />
              <Typography
                title={`Language: ${item.language}`}
                size="lg"
                color="primaryTextColor"
                fontWeight="500"
              />
              <Typography
                title={`Description: ${item.description}`}
                size="lg"
                color="primaryTextColor"
                fontWeight="500"
              />
              <Typography
                title={`clone_url: ${item.clone_url}`}
                size="lg"
                color="primaryTextColor"
                fontWeight="500"
              />
            </ItemContainer>
          )}
        />
      )}

      <CustomButton
        height={50}
        style={{marginTop: 10}}
        title="Go Back"
        onPress={() => goBack()}
      />
    </Container>
  );
};
export default RepositoryListScreen;
