// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React,{useState} from 'react'




const App=()=>{

  const[data,setData]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  })

  const {username,email,password,confirmPassword}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler=e=>{
    e.preventDefault();
    if(password === confirmPassword){
      console.log(data);
    }
    else{
      console.log("Password do not match");
    }
    
  }
  return (
    <div>
      <center>
      <form onSubmit={submitHandler}>
                    <h1>SignUp</h1>
                   
                        <input type="text" name="username" value={username} placeholder="Full Name" onChange={changeHandler}/><br/>
                   
                        <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler}/><br/>

                  
                        <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler}/><br/>

                        <input type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm password" onChange={changeHandler}/><br/>

                  
                    {/* <div id="message" class="status" style="display:none;"></div> */}
                    <button name="submit" type="submit">SignUp</button>
                </form>

      </center>

    </div>
  )
    
  
}


export default App;
