import React from 'react';
import { Card, Icon } from 'antd';

import { SearchResultsProps } from '../types';


const SearchResults: React.FC<SearchResultsProps> = ({ data, isVisible, loading, setVisibility }) => {

  if (!isVisible) return null;

  return (
    <div className="search-results">
      <Icon type="close-circle" onClick={() => setVisibility(false)} />
      <Card size="small" title="Результаты поиска:">
        {loading ?
          <Icon type="loading" style={{ fontSize: 24, color: '#40a9ff' }} /> :
          data.map(item => (<p>{item.name}</p>))
        }
      </Card>
    </div>
  );
}

export default SearchResults;