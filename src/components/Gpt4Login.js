import React, { useState } from 'react';
import './Gpt4Login.css';

function Gpt4Login() {
  const [activeTab, setActiveTab] = useState('account');

  const renderForm = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="form-container">
            <input type="text" placeholder="手机号" />
            <input type="password" placeholder="账户密码" />
            <button>立即登录</button>
          </div>
        );
      case 'wechat':
        return (
          <div className="form-container">
            <img src="/path-to-your-qr-code-image.png" alt="QR Code" />
          </div>
        );
      case 'sms':
        return (
          <div className="form-container">
            <input type="text" placeholder="手机号" />
            <div className="sms-container">
              <input type="text" placeholder="短信验证码" />
              <button>获取短信验证码</button>
            </div>
            <button>立即登录</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>登录您的指维系统</h1>
      </header>
      <div className="login-container">
        <div className="tab-container">
          <button className={activeTab === 'account' ? 'active' : ''} onClick={() => setActiveTab('account')}>
            账号密码登录
          </button>
          <button className={activeTab === 'wechat' ? 'active' : ''} onClick={() => setActiveTab('wechat')}>
            微信扫码登录
          </button>
          <button className={activeTab === 'sms' ? 'active' : ''} onClick={() => setActiveTab('sms')}>
            手机验证码登录
          </button>
        </div>
        {renderForm()}
      </div>
      <div className="register-link">
        还没有账户？ <a href="/register">立即注册</a>
      </div>
    </div>
  );
}

export default Gpt4Login;
