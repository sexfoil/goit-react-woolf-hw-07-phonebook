import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'store/selector';
import { updateFilter } from 'store/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const updateValue = value => {
    dispatch(updateFilter(value));
  };

  return (
    <div className={css.search}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={evt => updateValue(evt.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
