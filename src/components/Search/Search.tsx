import React from 'react';
import { Input, Icon } from 'antd';
import { SearchProps } from './types';
import SearchResults from './SearchResults';
import useSearchData from './hooks';

const { Search: SearchInput } = Input;

const Search: React.FC<SearchProps> = ({ setLayer }) => {
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
        <SearchInput onSearch={handleSearchSubmit} loading={isPending} />
      </div>
      {
        searchData && searchData.length > 0 &&
        <SearchResults
          data={searchData}
          loading={isPending}
          isVisible={isSearchResultsVisible}
          setVisibility={setSearchResultsVisible}
          setLayer={setLayer}
        />
      }
    </>
  );
}

export default Search;