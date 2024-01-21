import React from "react";
import styles from "../style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

const PropertieCards = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* listing results for offer, sale and rent */}

      <section
        className={`propertie__cards max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 ${styles.paddingY} `}
      >
        {offerListings && offerListings.length > 0 && (
          <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-blue-800 mb-2">
                Explore Our Latest Offers
              </h2>
              <Link
                className="text-sm text-blue-600 hover:underline"
                to="/search?offer=true"
              >
                See All Offers
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {offerListings.map((listing) => (
                <div
                  key={listing._id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  {/* Add your ListingItem content here */}
                  <img
                    src={listing.image} // Example: Use the correct image source
                    alt={listing.title} // Example: Use the correct alt text
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">
                      {listing.title}
                    </h3>
                    <p className="text-gray-600">{listing.description}</p>
                    <Link
                      to={`/listing/${listing._id}`}
                      className="text-blue-500 hover:underline mt-2 block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PropertieCards;
