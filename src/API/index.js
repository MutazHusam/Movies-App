import axios from "axios"
export const baseApi = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export const CRUDRequests = {
    get: async(url) => { return await baseApi.get(url,{})},
    delete: async(url) => { return await baseApi.delete(url,{},{})},
    post: async(url) => { return await baseApi.post(url,{},{})},
    put: async(url) => { return await baseApi.put(url,{},{})}
  }
