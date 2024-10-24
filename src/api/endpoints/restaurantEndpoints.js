const restaurantEndpoints = {
  getRestaurants: "/restaurants?populate=*",
  getRestaurantById: (id) => `/restaurants/${id}`,
  createRestaurant: "/restaurants",
  updateRestaurant: (id) => `/restaurants/${id}`,
  deleteRestaurant: (id) => `/restaurants/${id}`,

  // New endpoint for fetching restaurants by userId and projectId (adjust if you have a similar need)
  getRestaurantsByUserAndProject: (userId, projectId) =>
    `/restaurants?filters[assigned_to][$eq]=${userId}&filters[project][$eq]=${projectId}&populate=*`,

  getRestaurantsByUser: (userId, projectId) => `/restaurants?populate=*`,
};

export default restaurantEndpoints;
