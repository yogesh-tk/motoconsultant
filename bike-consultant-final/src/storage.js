const BIKE_KEY = "motora_local_bikes";
const FAV_KEY = "motora_favourites";

export function getLocalBikes() {
  try { return JSON.parse(localStorage.getItem(BIKE_KEY) || "[]"); }
  catch (error) { return []; }
}

export function saveLocalBikes(bikes) {
  localStorage.setItem(BIKE_KEY, JSON.stringify(bikes));
}

export function getFavourites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); }
  catch (error) { return []; }
}

export function saveFavourites(items) {
  localStorage.setItem(FAV_KEY, JSON.stringify(items));
}

export function saveImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxWidth = 1280;
        const scale = image.width > maxWidth ? maxWidth / image.width : 1;
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.onerror = () => reject(new Error("Could not read the image."));
      image.src = reader.result;
    };
    reader.onerror = () => reject(new Error("Could not upload the image."));
    reader.readAsDataURL(file);
  });
}
