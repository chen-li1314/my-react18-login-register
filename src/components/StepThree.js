import React from 'react';

const StepThree = () => {
  return (
    <div className="step-three">
      <h2>完善信息</h2>
      <form>
        <label>
          您的名称
          <input type="text" />
        </label>
        <label>
          企业名称
          <input type="text" />
        </label>
        <label>
          邮箱
          <input type="email" />
        </label>
        <label>
          设置密码
          <input type="password" />
        </label>
        <label>
          再次确认密码
          <input type="password" />
        </label>
        <button type="submit">下一步</button>
      </form>
    </div>
  );
};

export default StepThree;
