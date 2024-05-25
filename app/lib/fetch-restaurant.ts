"use server";

export async function fetchRestaurant(location: string, type: string) {
  console.log("running");

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&rankby=distance&type=${type}&key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  console.log(data);
}
