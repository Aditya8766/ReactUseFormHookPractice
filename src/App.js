import { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userInfo, setUserInfo] = useState();//only for understanding purpose not related to forms
  const onSubmit = (data) => {
    setUserInfo(data)//not relate to forms
    console.log("data:::", data);
  }
  console.log("errors::", errors);
  return (
    <div className="registration">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>{/* not related to forms */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <div className="fields">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" {...register("name", { required: "name is required" })} />
            <p>{errors.name?.message}</p>
          </div>
          <div className="fields">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "This is not valid email" }
              })} />
            <p>{errors.email?.message}</p>
          </div>
          <div className="fields">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter Your Password"{...register("password", { required: "Password is required", minLength:{value:4, message:"password must be greater than four characters"}, maxLength:{value:10, message:"password cannot exceed to ten characters"} })} />
            <p>{errors.password?.message}</p>
          </div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default App;