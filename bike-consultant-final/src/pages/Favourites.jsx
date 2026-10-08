import BikeCard from "../components/BikeCard";
function Favourites({ bikes, favourites, user, onFavourite, onEdit, onDelete }) { const list = bikes.filter(b => favourites.includes(b.id)); return <main className="container section"><span className="eyebrow">SAVED</span><h1>My Favourites</h1><div className="bike-grid">{list.map(b => <BikeCard key={b.id} bike={b} user={user} favourite={true} onFavourite={onFavourite} onEdit={onEdit} onDelete={onDelete}/>)}</div>{!list.length && <div className="empty">No favourites yet. Save bikes you like.</div>}</main> }
export default Favourites;
