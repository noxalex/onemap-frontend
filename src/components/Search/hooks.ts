import React from 'react';
import { notification } from 'antd';

const useSearchData = (query: string) => {
  const [isPending, setPending] = React.useState(false);
  const [searchData, setSearchData] = React.useState();

  React.useEffect(() => {
    if (!query) return;
    setPending(true);
    (async () => {
      try {
        const result = await fetch(`http://onemap.md/search?key=${query}`).then(response => response.json());
        setSearchData(result);
        setPending(false);
      } catch (e) {
        notification.error({
          placement: 'bottomRight',
          message: 'Ошибка поиска',
        });
      }
    })();
  }, [query])

  return {
    searchData,
    isPending
  }
}

export default useSearchData;