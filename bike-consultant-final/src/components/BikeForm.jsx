import { useEffect, useState } from "react";
import { X, Upload } from "lucide-react";
import { saveImage } from "../storage";

function BikeForm({ editingBike, onClose, onSave }) {
  const [form, setForm] = useState(editingBike || { title: "", brand: "", price: "", year: "2025", km: "", type: "Sport", fuel: "Petrol", location: "Madurai", sellerPhone: "", description: "", thumbnail: "" });
  const [preview, setPreview] = useState(editingBike ? editingBike.thumbnail : "");
  const [saving, setSaving] = useState(false);
  useEffect(() => { if (editingBike) setForm(editingBike); }, [editingBike]);
  function change(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  async function imageChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return alert("Please select an image file.");
    if (file.size > 5 * 1024 * 1024) return alert("Image should be below 5MB.");
    const url = await saveImage(file);
    setPreview(url); setForm({ ...form, thumbnail: url });
  }
  async function submit(e) {
    e.preventDefault();
    if (!form.thumbnail) return alert("Please upload a bike photo.");
    setSaving(true); await onSave(form); setSaving(false);
  }
  return <div className="modal-backdrop"><div className="modal"><button className="close" onClick={onClose}><X/></button><h2>{editingBike ? "Update Bike" : "Upload Your Bike"}</h2><p className="muted">Add clear details so buyers can contact you.</p><form onSubmit={submit}>
    <label>Bike photo<input type="file" accept="image/jpeg,image/png,image/webp" onChange={imageChange}/></label>{preview && <img className="upload-preview" src={preview} alt="Bike preview"/>}
    <div className="form-grid"><label>Bike name<input name="title" value={form.title || ""} onChange={change} required /></label><label>Brand<input name="brand" value={form.brand || ""} onChange={change} required /></label><label>Price<input type="number" name="price" value={form.price || ""} onChange={change} required /></label><label>Year<input name="year" value={form.year || ""} onChange={change}/></label><label>Kilometres<input name="km" value={form.km || ""} onChange={change}/></label><label>Type<select name="type" value={form.type || "Sport"} onChange={change}><option>Sport</option><option>Commuter</option><option>Cruiser</option><option>Scooter</option><option>Adventure</option></select></label><label>Fuel<select name="fuel" value={form.fuel || "Petrol"} onChange={change}><option>Petrol</option><option>Electric</option></select></label><label>Location<input name="location" value={form.location || ""} onChange={change}/></label></div>
    <label>Phone number<input name="sellerPhone" value={form.sellerPhone || ""} onChange={change} placeholder="919876543210" required /></label><label>Description<textarea name="description" value={form.description || ""} onChange={change}/></label><button className="primary-btn" disabled={saving}><Upload size={17}/>{saving ? "Saving..." : editingBike ? "Update Bike" : "Publish Bike"}</button>
  </form></div></div>;
}
export default BikeForm;
