import { useSelector, useDispatch } from "react-redux";
import { setFilter, clearFilters } from "../lib/redux/store/filtersSlice";

export const FilterNav = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleRadioChange = (e) => {
    dispatch(setFilter({ name: "isOpen", value: e.target.checked }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ name, value }));
  };

  return (
    <div className="flex flex-row justify-between items-center p-6 border-y-2">
      <div className="flex items-center gap-5">
        <p>Filter By:</p>
        <div className="bg-white border-b-[1px] border-gray-300 py-2 space-x-3">
          <input
            type="radio"
            name="isOpen"
            checked={filters.isOpen}
            onChange={handleRadioChange}
          />
          <label htmlFor="radio" name="isOpen">
            Open Now
          </label>
        </div>
        <select
          name="price"
          id="price"
          value={filters.price}
          onChange={handleSelectChange}
          className="bg-white border-b-[1px] border-gray-300 py-2 space-x-3"
        >
          <option value="">Price</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
        <select
          name="categories"
          id="categories"
          value={filters.categories}
          onChange={handleSelectChange}
          className="bg-white border-b-[1px] border-gray-300 py-2 space-x-3"
        >
          <option value="">Categories</option>
          <option value="Chinese">Chinese</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
        </select>
      </div>
      <button
        className="uppercase border py-2 px-8 text-sm text-gray-300 font-semibold"
        onClick={() => dispatch(clearFilters())}
      >
        clear all
      </button>
    </div>
  );
};
