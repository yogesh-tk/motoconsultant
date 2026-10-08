import { Filter, RotateCcw, Search } from "lucide-react";
import { brands, bikeTypes } from "../data/brands";

function FilterBar({ filters, setFilters }) {
  function changeFilter(name, value) {
    setFilters({ ...filters, [name]: value });
  }

  function resetFilters() {
    setFilters({ search: "", brand: "All Brands", type: "All Types", maxPrice: "1000000" });
  }

  return (
    <div className="filter-panel">
      <div className="filter-title"><Filter size={18} /> Find your bike</div>
      <div className="filter-grid">
        <label className="search-field wide">
          <Search size={18} />
          <input value={filters.search} onChange={(e) => changeFilter("search", e.target.value)} placeholder="Search bike, model or brand" />
        </label>
        <select value={filters.brand} onChange={(e) => changeFilter("brand", e.target.value)}>
          {brands.map((brand) => <option key={brand}>{brand}</option>)}
        </select>
        <select value={filters.type} onChange={(e) => changeFilter("type", e.target.value)}>
          {bikeTypes.map((type) => <option key={type}>{type}</option>)}
        </select>
        <select value={filters.maxPrice} onChange={(e) => changeFilter("maxPrice", e.target.value)}>
          <option value="1000000">Any price</option>
          <option value="100000">Under ₹1 Lakh</option>
          <option value="150000">Under ₹1.5 Lakh</option>
          <option value="200000">Under ₹2 Lakh</option>
          <option value="300000">Under ₹3 Lakh</option>
        </select>
        <button className="reset-btn" onClick={resetFilters}><RotateCcw size={16} /> Reset</button>
      </div>
    </div>
  );
}

export default FilterBar;
