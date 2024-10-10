import axios from "axios";
import { useParams } from "react-router-dom";
import { Layout } from "./Layout";
import { useEffect, useState } from "react";
import { ButtonLink } from "./ui/ButtonLink";

export const Detail = () => {
  const [restaurant, setRestaurant] = useState({});
  const { restaurantId } = useParams();

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      const options = {
        method: "GET",
        url: `${import.meta.env.VITE_BASE_URL}/getRestaurantDetailsV2`,
        params: { restaurantsId: restaurantId },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_API_KEY,
          "x-rapidapi-host": import.meta.env.VITE_HOSTNAME,
        },
      };

      try {
        const response = await axios.request(options);
        if (!response.data || !response.data.data) {
          throw new Error("No restaurant data found");
        }
        setRestaurant(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching restaurant detail from API:", error);
        setRestaurant({ location: { name: "Error fetching data" } });
      }
    };
    fetchRestaurantDetail();
  }, [restaurantId]);

  return (
    <div className="mx-auto w-1/2 my-12">
      <h1 className="text-2xl font-bold text-[#002b57]">
        {restaurant?.location?.neighborhood?.name || "Loading..."}
        <span className="flex text-xl text-[#002b57]">
          {restaurant?.overview?.rating
            ? "★".repeat(restaurant.overview.rating)
            : ""}
          {restaurant?.overview?.rating
            ? "☆".repeat(5 - restaurant.overview.rating)
            : ""}
        </span>
      </h1>
      <section className="mt-4">
        <h2 className="mb-2 text-lg font-semibold">Review from all user</h2>
        <div className="flex flex-col gap-5">
          {restaurant?.rating?.ratingQuestions?.map((question) => (
            <div
              className="border border-[#002b57] rounded-md px-4 py-2"
              key={question.name}
            >
              <h3>
                {question.name} - {question.rating}
              </h3>
            </div>
          )) || <p>Loading reviews...</p>}
        </div>
      </section>
      <ButtonLink
        href="/"
        text="Back to homepage"
        className="w-1/2 mx-auto mt-5"
      />
    </div>
  );
};
