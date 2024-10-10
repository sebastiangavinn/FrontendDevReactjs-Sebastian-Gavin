import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { useSelector } from "react-redux";

export const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loadData, setLoadData] = useState(8);

  const filters = useSelector((state) => state.filters);
  const filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      (!filters.isOpen || restaurant.currentOpenStatusCategory === "OPEN") &&
      (filters.price === "" || restaurant.priceTag === filters.price) &&
      (filters.categories === "" ||
        restaurant.establishmentTypeAndCuisineTags[0] === filters.categories)
    );
  });

  const handleLoadMore = () => {
    setLoadData((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `${import.meta.env.VITE_BASE_URL}/searchRestaurants`,
        params: {
          locationId: "304554",
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_API_KEY,
          "x-rapidapi-host": import.meta.env.VITE_HOSTNAME,
        },
      };

      try {
        const response = await axios.request(options);
        setRestaurants(response.data.data.data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="p-6 my-8 space-y-8">
      <h1 className="text-2xl">All Restaurants</h1>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.slice(0, loadData).map((restaurant, id) => (
          <Card
            key={id}
            id={restaurant.restaurantsId}
            image={restaurant.heroImgUrl}
            name={restaurant.name}
            rating={restaurant.averageRating}
            category={restaurant.establishmentTypeAndCuisineTags[0]}
            price={restaurant.priceTag}
            isOpen={restaurant.currentOpenStatusCategory}
          />
        ))}
      </section>
      <Button
        text="Load More"
        className="block m-auto w-1/2 lg:w-1/4"
        onClick={handleLoadMore}
      />
    </main>
  );
};
