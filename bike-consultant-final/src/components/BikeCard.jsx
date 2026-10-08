import { Phone, MessageCircle, Heart, Pencil, Trash2 } from "lucide-react";

function BikeCard({ bike, user, favourite, onFavourite, onEdit, onDelete }) {
  const phone = bike.sellerPhone || bike.phone || "919876543210";
  const whatsapp = phone.replace(/[^0-9]/g, "");
  return <article className="bike-card">
    <div className="bike-image-wrap"><img src={bike.thumbnail} alt={bike.title} /><button className={favourite ? "fav active" : "fav"} onClick={() => onFavourite(bike.id)}><Heart size={18} fill={favourite ? "currentColor" : "none"} /></button>{bike.ownerId && <span className="uploaded-tag">User Upload</span>}</div>
    <div className="bike-card-body">
      <div className="bike-top"><span className="brand-label">{bike.brand}</span><span>{bike.year}</span></div>
      <h3>{bike.title}</h3><p className="bike-meta">{bike.km} km · {bike.fuel} · {bike.type}</p>
      <strong className="price">₹{Number(bike.price || 0).toLocaleString("en-IN")}</strong>
      <p className="location">📍 {bike.location}</p>
      <div className="card-actions"><a href={"tel:" + phone} className="call"><Phone size={16}/> Call</a><a href={"https://wa.me/" + whatsapp} target="_blank" rel="noreferrer" className="whatsapp"><MessageCircle size={16}/> WhatsApp</a></div>
      {user && user.role === "admin" && <div className="admin-actions"><button onClick={() => onEdit(bike)}><Pencil size={15}/> Update</button><button onClick={() => onDelete(bike.id)}><Trash2 size={15}/> Delete</button></div>}
    </div>
  </article>;
}
export default BikeCard;
