import React from 'react';

const StepOne = () => {
  return (
    <div className="step-one">
      <h2>设置账户</h2>
      <div>
        <img src="path_to_your_image/wechat_qr.png" alt="WeChat QR Code" />
        <p>打开 <span role="img" aria-label="wechat">微信</span> 扫码并关注公众号完成注册</p>
      </div>
      <a href="/other-registration-methods">其他注册方式</a>
    </div>
  );
};

export default StepOne;
