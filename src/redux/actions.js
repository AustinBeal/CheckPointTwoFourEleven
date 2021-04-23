export const addListing = (listing) => {
  return {
      type: 'ADD_LISTING',
      value: listing
  }
}

export const removeListing = (index) => {
  return {
      type: 'REMOVE_LISTING',
      value: index
  }
}

export const addUser = (user) => {
  return {
      type: 'ADD_USER',
      value: user
  }
}

export const removeUser = () => {
  return {
      type: 'REMOVE_USER',
      value: {}
  }
}

const geoCoords = (coords) => {
  return {
      type: "ADD_COORDS",
      value: coords
  }
}

export const getCoords = (address) => {
  return (dispatch) => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDszPuOyU4MPpUXEB4YAWTeTBMZ2q6GV50`)
          .then(res => res.json())
          .then(data => {
              let coords = {
                  lat: data.results[0].geometry.location.lat,
                  lng: data.results[0].geometry.location.lng
              }
              return dispatch(geoCoords(coords))})
  }
}

export const resetMap = () => {
  return {
      type: "RESET_COORDS",
      value: {}
  }
}