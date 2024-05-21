import { useState, useEffect } from 'react';
import axios from 'axios';

function WechatLogin() {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  useEffect(() => {
    // 请求后端获取微信二维码的数据
    axios.get('/api/wechat/qrcode')
      .then(response => {
        // 更新二维码图片的URL
        setQrCodeUrl(response.data.qrCodeUrl);
        // 开始轮询检查登录状态
        checkLoginStatus(response.data.qrCodeId);
      })
      .catch(error => console.error('Error fetching QR code:', error));
  }, []);

  // 轮询检查登录状态
  const checkLoginStatus = (qrCodeId) => {
    const intervalId = setInterval(() => {
      // 请求后端检查登录状态
      axios.get(`/api/wechat/login-status/${qrCodeId}`)
        .then(response => {
          // 更新登录状态
          setLoginStatus(response.data.status);
          // 如果登录成功，则停止轮询
          if (response.data.status === 'success') {
            clearInterval(intervalId);
          }
        })
        .catch(error => console.error('Error checking login status:', error));
    }, 3000); // 每隔3秒钟检查一次登录状态
  };

  return (
    <div>
        <div>123</div>
      {qrCodeUrl && <img src={qrCodeUrl} alt="WeChat QR Code" />}
      {loginStatus === 'success' && <p>登录成功！</p>}
      {loginStatus === 'failed' && <p>登录失败，请重试。</p>}
      {!qrCodeUrl && loginStatus !== 'success' && <p>等待扫码登录...</p>}
    </div>
  );
}

export default WechatLogin;
