import React from "react";

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="border-b-2 p-7 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="font-semibold whitespace-nowrap">
              Search Term:
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="w-full p-3 border rounded-lg"
              //value={sidebardata.searchTerm}
              //onChange={handleChange}
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 ">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2 ">
              <input
                type="checkbox"
                id="all"
                className="w-5"
                //onChange={handleChange}
                //checked={sidebardata.type === 'all'}
              />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rent"
                className="w-5"
                // onChange={handleChange}
                //  checked={sidebardata.type === 'rent'}
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="sale"
                className="w-5"
                // onChange={handleChange}
                // checked={sidebardata.type === 'sale'}
              />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="offer"
                className="w-5"
                // onChange={handleChange}
                // checked={sidebardata.offer}
              />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
                // onChange={handleChange}
                // checked={sidebardata.parking}
              />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
                //onChange={handleChange}
                // checked={sidebardata.furnished}
              />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select
              //onChange={handleChange}
              defaultValue={"created_at_desc"}
              id="sort_order"
              className="p-3 border rounded-lg"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to high</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>
          <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h1 className="p-3 mt-5 text-3xl font-semibold border-b text-slate-700">
          Listing results:
        </h1>
      </div>
    </div>
  );
}
