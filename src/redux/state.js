export const state = {
  user: {},
  listings: [
      {
          id: 0,
          name: "The Vegan Yacht",
          description: "Resturant",
          hours: "12pm - 8 pm",
          location: {
              address: '2000 Southern Oaks Dr, Austin, TX 78745',
              lat: 30.218826162037093,
              lng:  -97.79578008529282,
          }
      },
      {
          id: 1,
          name: "Taquiera Morales",
          description: "Resturant",
          hours: "7 am - 11 pm",
          location: {
              address: '1415 W William Cannon Dr, Austin, TX 78745',
              lat: 30.20145222847041,
              lng:  -97.80032981850188,
          }
      },
      {
        id: 2,
        name: "Austin Art Garage",
        description: "Art Gallery",
        hours: "12pm - 6pm",
        location: {
            address: '2200 S Lamar Blvd UNIT J, Austin, TX 78704',
            lat: 30.24808929453527, 
            lng:  -97.77275263777378,
        }
    },
    {
        id: 3,
        name: "Saps Fine Thai Cuisine",
        description: "Restaurant",
        hours: "11am - 10pm",
        location: {
            address: '2200 S Lamar Blvd UNIT J, Austin, TX 78704',
            lat: 30.24808929453527, 
            lng:  -97.77275263777378,
        }
    },
  ],
  map: {
      lat: 0,
      lng: 0
  },
  mapOps: {
      key: "AIzaSyB7FA3yrzCnOj9kwX7UU7Zz1DJJiHfgYQQ",
      zoom: 11
  }
}