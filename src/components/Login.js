import React, { useState } from 'react';
import './LoginPage.css'; // 假设这是你的样式文件，用于设置样式
import WechatLogin from './wechatLogin';
import PhoneLogin from './phoneLogin';
function LoginPage() {
  const [activeForm, setActiveForm] = useState('account'); // 初始显示账号密码登录表单

  const handleFormChange = (form) => {
    setActiveForm(form);
  };

  return (
    <div className="container">
      <h2>登录您的系统</h2>
      <div className="content">
        <div id='account' onClick={() => handleFormChange('account')}>账号密码登录
        {activeForm === 'account' && (
          <form id='accountForm'>
            <div className="form-group">
            
              <input type="text" id="username" name="username"placeholder="手机号码" />
            </div>
            <div className="form-group">
             
              <input type="password" id="password" name="password"placeholder="密码" />
            </div>
            <button type="submit">登录</button>
          </form>
        )}
        
        </div>
      

        <div id='wechat' onClick={() => handleFormChange('wechat')}>微信扫码登录
        {activeForm === 'wechat' && (
          <div>
            <WechatLogin />
          </div>
        )}
        </div>
        

        <div id='phone' onClick={() => handleFormChange('phone')}>手机验证码登录
        {activeForm === 'phone' && (
          <div>
              <PhoneLogin />
          </div>
        )}
        </div>
     
      </div>
      <p>还没有账号？<a href="/register">立即注册</a></p>
    </div>
  );
}

export default LoginPage;
