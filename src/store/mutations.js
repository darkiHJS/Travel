const changeCity = function (state, city) {
  console.log(city)
  state.city = city
  try {
    localStorage.city = city
  } catch (e) {}
}

export default {
  changeCity
}
