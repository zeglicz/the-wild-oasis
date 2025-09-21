import { useSearchParams } from 'react-router-dom';
import Select from './Select';

/* eslint-disable react/prop-types */
function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      searchParams.set('sortBy', e.target.value);
      return newParams;
    });
  }

  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
