import { useState } from "react";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { RestaurantList } from "../components/RestaurantList";

export const Home = () => {
  const [filters, setFilters] = useState({
    isOpen: false,
    price: "",
    categories: "",
  });

  const handleFilter = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <Header filters={filters} onFilterChange={handleFilter} />
      <RestaurantList filters={filters} />
    </Layout>
  );
};
