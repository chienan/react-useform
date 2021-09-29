import './App.css';
import React from "react";
import { useForm } from "react-hook-form";


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Account</label>
          <input type="text"
                 {...register('email', {required: true})}/>
          {errors.email && <span className="warn">請輸入帳號</span>}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="text"
                 {...register('password', {required: true})}/>
          {errors.password && <span className="warn">請輸入密碼</span>}
        </div>
        <div className="form-control radio-button-section">
          <label>RememberMe</label>
          <input type="checkbox"
                 className="radio-button"
                 {...register('rememberMe', {required: false})}/>
        </div>
          <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
