let defaultCity = '湖州'
try { // 防止用户禁用localStorage 而报错
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
