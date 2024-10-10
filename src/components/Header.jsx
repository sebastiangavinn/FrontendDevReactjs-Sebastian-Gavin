import { FilterNav } from "./FilterNav";

export const Header = ({ filters, onFilterChange }) => {
  return (
    <header>
      <div className="w-full lg:w-1/2 p-5 space-y-6 mb-4">
        <h1 className="text-4xl font-semibold">Restaurants</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          nesciunt omnis facere fugit quibusdam placeat quo. Obcaecati magnam
          explicabo quasi ut alias rerum enim natus sequi cupiditate ex!
          Repudiandae, possimus!
        </p>
      </div>
      <FilterNav filters={filters} onFilterChange={onFilterChange} />
    </header>
  );
};
