import React, { useState } from 'react';
import './Gpt4Registr.css';

// Step One Component
const StepOne = ({ onNext }) => {
  return (
    <div className="step-one">
      <h2>设置账户</h2>
      <div>
        <p>打开 <span role="img" aria-label="wechat">微信</span> 扫码并关注公众号完成注册</p>
        <img src="/path_to_your_image/wechat_qr.png" alt="WeChat QR Code" />
      </div>
      <button onClick={onNext}>其他注册方式</button>
    </div>
  );
};

// Step Two Component
const StepTwo = ({ onNext, onPrevious, setFormData, formData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add verification logic here
    onNext();
  };

  return (
    <div className="step-two">
      <h2>设置账户</h2>
      <form onSubmit={handleSubmit}>
        <label>
          手机号码
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>
        <label>
          短信验证码
          <input type="text" name="verificationCode" value={formData.verificationCode} onChange={handleChange} />
        </label>
        <button type="button">获取短信验证码</button>
        <label>
          <input type="checkbox" name="acceptTerms" onChange={handleChange} />
          我接受网站使用条款
        </label>
        <button type="submit">下一步</button>
        <button type="button" onClick={onPrevious}>上一步</button>
      </form>
    </div>
  );
};

// Step Three Component
const StepThree = ({ onPrevious, setFormData, formData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('注册成功');
  };

  return (
    <div className="step-three">
      <h2>完善信息</h2>
      <form onSubmit={handleSubmit}>
        <label>
          您的名称
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          企业名称
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        </label>
        <label>
          邮箱
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          设置密码
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          再次确认密码
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </label>
        <button type="submit">下一步</button>
        <button type="button" onClick={onPrevious}>上一步</button>
      </form>
    </div>
  );
};

// Main Registration Component
const Gpt4Registr = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    verificationCode: '',
    acceptTerms: false,
    name: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const previousStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div className="registration">
      {step === 1 && <StepOne onNext={nextStep} />}
      {step === 2 && (
        <StepTwo
          onNext={nextStep}
          onPrevious={previousStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 3 && (
        <StepThree
          onPrevious={previousStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
    </div>
  );
};

export default Gpt4Registr;
