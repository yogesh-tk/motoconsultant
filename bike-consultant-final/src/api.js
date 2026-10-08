const API_URL = "https://dummyjson.com";

export async function loginUser(username, password) {
  const response = await fetch(API_URL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password, expiresInMins: 60 })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}

export async function getBikes() {
  const response = await fetch(API_URL + "/products/category/motorcycle?limit=30");
  if (!response.ok) {
    throw new Error("Could not fetch bikes");
  }
  const data = await response.json();
  return data.products || [];
}

export async function addBike(bike) {
  const response = await fetch(API_URL + "/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bike)
  });

  if (!response.ok) {
    throw new Error("Could not add bike");
  }
  return response.json();
}

export async function updateBike(id, bike) {
  const response = await fetch(API_URL + "/products/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bike)
  });

  if (!response.ok) {
    throw new Error("Could not update bike");
  }
  return response.json();
}

export async function deleteBike(id) {
  const response = await fetch(API_URL + "/products/" + id, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Could not delete bike");
  }
  return response.json();
}
