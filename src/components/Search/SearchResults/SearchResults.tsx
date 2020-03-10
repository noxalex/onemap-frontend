import React from 'react';
import { Card, Icon, List } from 'antd';

import { SearchResultsProps } from '../types';


const SearchResults: React.FC<SearchResultsProps> = ({ data, isVisible, loading, setVisibility, setLayer }) => {
  const [selectedItem, setSelectedItem] = React.useState<number>();
  if (!isVisible) return null;

  return (
    <div className="search-results">
      <Icon type="close-circle" onClick={() => setVisibility(false)} />
      <Card size="small" title="Результаты поиска:">
        {loading ?
          <Icon type="loading" style={{ fontSize: 24, color: '#40a9ff' }} />
          : <List>
            {data.map(item =>
              (<List.Item key={item.id}
                onClick={() => { setLayer(JSON.parse(item.geoJSON)); setSelectedItem(item.id) }}
                className={`search-result-item${item.id === selectedItem ? ' item-active' : ''}`}>
                <span>{item.name}</span>
              </List.Item>)
            )}
          </List>
        }
      </Card>
    </div>
  );
}

export default SearchResults;