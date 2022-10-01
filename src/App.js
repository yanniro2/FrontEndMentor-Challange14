import "./index.css"
import bg from "./images/bg-intro-desktop.png"
import bgMoile from "./images/bg-intro-mobile.png"
import React from "react";
import Input from "./Input";
import data from "./Data"
function App()
{

  const inputComponent = data.map((datas) =>
  (
    <Input key={datas.id} placeholder={datas.name} message={datas.message} type={datas.type} />
  ));
  return (
    <div className="App w-screen h-screen flex items-center justify-center relative text-[#fff] font-Poppins text-ms ">
      <img src={bg} alt="bg img" className="w-full h-full fixed top-0 bottom-0 left-0 right-0 Mobile:hidden" />
      <img src={bgMoile} alt="bg img" className="w-full h-full fixed top-0 bottom-0 left-0 right-0 hidden Mobile:block" />
      <div className="bg-Red w-full h-full flex items-center justify-center Mobile:p-5">
        <div className="content w-[80%] h-[80%] flex items-center justify-evenly gap-[1rem] Mobile:flex-col Mobile:w-full Mobile:h-full Mobile:gap-5">
          {/* left */}
          <div className="left w-[50%] h-full flex flex-col justify-center gap-5 Mobile:w-full  Mobile:text-center Mobile:gap-2 Mobile:justify-evenly ">
            <h1 className="text-[2.5rem] font-2xl leading-tight Mobile:text-[2rem]">Learn to code by watching others</h1>
            <p className="Mobile:text-[.8rem]"> See how experienced developers solve problems in real-time. Watching scripted tutorials is great,but understanding how developers think is invaluable. </p>
          </div>
          {/* Right */}
          <div className="right w-[50%] h-full flex flex-col items-center justify-center gap-8 Mobile:w-full Mobile:gap-2 Mobile:!text-[.rem] Mobile:h-auto ">
            <button className="  bg-Blue w-full p-4 rounded-lg font-xl  drop-shadow-sm shadow-inner">
              Try it free 7 days <span className="font-ms"> then $20/mo. thereafter</span>
            </button>
            <div className="register w-full flex items-center justify-center flex-col gap-3 bg-[#fff] p-10 rounded-lg drop-shadow-sm Mobile:p-3">


              {inputComponent}
              {/* <input onChange={handleChange} type="text" name="" id="" className="w-full border-[1px] font-xl capitalize border-Grayish-Blue rounded p-3 placeholder:font-lg text-Dark-Blue" placeholder="Last Name" />
              <input onChange={handleChange} type="email" name="" id="" className="w-full border-[1px] font-xl capitalize border-Grayish-Blue rounded p-3 placeholder:font-lg text-Dark-Blue" placeholder="Email Address" />
              <input onChange={handleChange} type="password" name="" id="" className="w-full border-[1px] font-xl capitalize border-Grayish-Blue rounded p-3 placeholder:font-lg text-Dark-Blue" placeholder="Password" /> */}
              <button className=" bg-Green w-full p-3 rounded uppercase drop-shadow-sm font-xl  tracking-widest shadow-inner">Claim your free trial </button>
              <p className=" text-Grayish-Blue text-[10px] font-xl">By clicking the button, you are agreeing to our <span className="text-Red  font-2xl"> Terms and Services</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
