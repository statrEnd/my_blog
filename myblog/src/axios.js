// axios.js

import axios from 'axios';

// 创建一个 axios 实例
const instance = axios.create({
    baseURL: 'http://localhost:3000/webapi', // 设置默认的 baseURL
    timeout: 5000, // 设置请求超时时间
    // 在这里可以添加其他的配置项，比如 headers、拦截器等
});

// 暴露出该实例
export default instance;