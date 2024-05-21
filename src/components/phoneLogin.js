// PhoneLogin.js

function PhoneLogin() {
    return (
      <div>
        <form id="phoneForm">
          <div className="form-group">
          
            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="请输入手机号码" />
          </div>
          <div className="form-group">
           
            <input type="text" id="verificationCode" name="verificationCode" placeholder="请输入验证码" />
            <button type="button">获取验证码</button>
          </div>
          <button type="submit">登录</button>
        </form>
      </div>
    );
  }
  
  export default PhoneLogin;
  