import React from 'react';
import { Input } from 'antd';
import SearchResults from './SearchResults';
import useSearchData from './hooks';

const { Search: SearchInput } = Input;

const Search: React.FC = () => {
  const [isActive, setActive] = React.useState(false);
  const [isSearchResultsVisible, setSearchResultsVisible] = React.useState(true);
  const [searchKey, setSearchKey] = React.useState();
  const { searchData, isPending } = useSearchData(searchKey);

  const handleSearchSubmit = (value: string) => {
    setSearchKey(value);
    setSearchResultsVisible(true);
  }

  return (
    <>
      <div className={`search-container${isActive ? ' search-active' : ''}`}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      >
        <SearchInput onSearch={handleSearchSubmit} />
      </div>
      {
        searchData && searchData.length > 0 &&
        <SearchResults
          data={searchData}
          loading={isPending}
          isVisible={isSearchResultsVisible}
          setVisibility={setSearchResultsVisible}
        />
      }
    </>
  );
}

export default Search;