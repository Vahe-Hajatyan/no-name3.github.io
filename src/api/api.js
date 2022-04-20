import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    //"API-KEY": "895e5b3b-2728-48a9-be0a-b21a133b7a4a",
    "API-KEY": '72174b49-1331-4fdf-99bf-34b4c366bb10', //vah
  },
})

export const usersAPI = {
  getUser(currentPage = 1, pageSize = 21) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then( response => {
        return response.data
    })
  },
  follow(userId){
    return instance.post(`follow/${userId}`,{},)
  },
  unfollow(userId){
    return instance.delete(`follow/${userId}`)
  },
};

export const ContentAPI = {
  getContent(userId) {
    return instance.get(`profile/`+ userId).then( response => {
        return response.data
    })
  },
  getStatus(userId) {
    return instance.get(`profile/status/`+ userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status})
  },
};

export const authAPI = {
  getHeader() {
    return instance.get(`auth/me`).then( response => {
        return response.data
    })
  },
  Login(email, password, rememberMe = false, captcha = null,) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  Logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptcha() {
    return instance.get(`security/get-captcha-url`)
  },
};
