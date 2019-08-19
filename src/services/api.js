const axios = require('axios')

const baseUrl = "http://localhost:3000"

// https://mysterious-island-13273.herokuapp.com

const api = axios.create({
  baseURL: baseUrl,
});

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  console.log(resp.data)
  localStorage.setItem('user', resp.data.user.id)
  return resp.data.user
}

export const registerUser = async (data) => {
  const resp = await api.post('/users/', { user: data })
  console.log(resp.data)
  return resp.data
}





export const logoutUser = async () => {
  api.defaults.headers.common.authorization = ""
  localStorage.setItem('user', '')
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/users/verify');
    return resp.data
  }
  return false;
}

export const savePreset = async (user_id, data) => {
  const resp = await api.post(`/users/${user_id}/presets`, { preset: data })
  console.log(resp.data)
  return resp.data
}
export const updatePreset = async (user_id, preset_id, data) => {
  const resp = await api.put(`/users/${user_id}/presets/${preset_id}`, { preset: data })
  console.log(resp.data)
  return resp.data
}
export const getPresets = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/presets`)
  console.log(resp.data)
  return resp.data
}

export const showPreset = async (user_id, preset_id) => {
  const resp = await api.get(`/users/${user_id}/presets/${preset_id}`)
  console.log(resp.data)
  return resp.data
}

export const deletePreset = async (user_id, preset_id) => {
  const resp = await api.delete(`/users/${user_id}/presets/${preset_id}`)
  console.log(resp)
}

