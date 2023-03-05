import { Box, SearchFilter, SearchLabel } from './SearchBox.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setContactsFilter } from '../../redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  console.log(filter);

  const handleFilterChange = event =>
    dispatch(setContactsFilter(event.target.value));
  return (
    <Box>
      <SearchLabel htmlFor="filter">
        Find contacts by name
        <SearchFilter
          name="filter"
          type="text"
          // value={value}
          onChange={handleFilterChange}
        ></SearchFilter>
      </SearchLabel>
    </Box>
  );
};
