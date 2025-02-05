import axios from "axios";
import { ElMessage } from "element-plus";
import useUserStore from '@/stores/modules/user'
//创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  //baseURL: '/api/',
  //baseURL: '',
  timeout: 5000
})
//请求拦截器
request.interceptors.request.use(config => {
  console.log('Full URL:', config.baseURL + config.url);
  //从用户仓库中获取token，如果token存在，则将token添加到请求头中
  const token = useUserStore().token
  if (token) {
    config.headers.token = token
  }
  return config;
});
//响应拦截器
request.interceptors.response.use((response) => {
  console.log(response);
  if (response.data.code !== 200) {
    console.log('错误信息：', response.data.data.message);
    return Promise.reject(new Error(response.data.data.message));
  }
  return response.data;
}, (error) => {
  //处理网络错误
  let msg = '';
  const status = error.response.status;
  switch (status) {
    case 401:
      msg = "token过期";
      break;
    case 403:
      msg = '无权访问';
      break;
    case 404:
      msg = "请求地址错误";
      break;
    case 500:
      msg = "服务器出现问题";
      break;
    default:
      msg = "无网络";

  }
  ElMessage({
    type: 'error',
    message: msg
  })
  return Promise.reject(error);
});
export default request;
