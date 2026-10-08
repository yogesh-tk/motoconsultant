import { Link } from "react-router-dom";
function Brands({ bikes }) { const brands = [...new Set(bikes.map(b => b.brand))]; return <main className="container section"><span className="eyebrow">BRANDWISE</span><h1>Choose your brand</h1><div className="brand-grid">{brands.map(b => <Link key={b} to={"/search?brand=" + encodeURIComponent(b)} className="brand-tile"><strong>{b}</strong><span>{bikes.filter(x => x.brand === b).length} bikes</span></Link>)}</div></main> }
export default Brands;
