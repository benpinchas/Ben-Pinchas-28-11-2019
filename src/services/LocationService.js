import StorageService from './StorageService'
const FAVORITE_LOCATIONS_STORAGE_KEY = 'FAVORITE_LOCATIONS_0'

function createFavorites() {
  return [
    {
      Key: '215854',
      LocalizedName: 'Tel Aviv'
    },
    {
      Key: '300597',
      LocalizedName: 'Singapore'
    },
    {
      Key: '328328',
      LocalizedName: 'London'
    },
  ]
}

function getFavoriteLocations() {
  let favorites = StorageService.load(FAVORITE_LOCATIONS_STORAGE_KEY)
  if (!favorites) { //the app launched for the first time, set initial places
    favorites = createFavorites()
    saveFavoriteLocations(favorites)
  }
  return favorites
}

function saveFavoriteLocations(locationDetails) {
  return StorageService.store(FAVORITE_LOCATIONS_STORAGE_KEY, locationDetails)
}

export default {
  getFavoriteLocations,
  saveFavoriteLocations
}