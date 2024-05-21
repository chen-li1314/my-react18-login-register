import React from 'react';

const StepTwo = () => {
  return (
    <div className="step-two">
      <h2>设置账户</h2>
      <form>
        <label>
          手机号码
          <input type="text" />
        </label>
        <label>
          短信验证码
          <input type="text" />
        </label>
        <button type="button">获取短信验证码</button>
        <button type="submit">下一步</button>
        <label>
          <input type="checkbox" />
          我接受网站使用条款
        </label>
      </form>
    </div>
  );
};

export default StepTwo;
