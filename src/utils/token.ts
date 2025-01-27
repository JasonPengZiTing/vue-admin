//封装本地存储数据和获取数据的方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token);
}
//获取本地存储的token
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN');
}
//清除本地存储的token
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN');
}
