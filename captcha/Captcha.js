// this Captcha write white React
import React, { useState, useEffect } from "react";

function Captcha() {
  const [captchaText,setCaptchaText] = useState("");
  const [inputValue, setInputValue] = useState("");



  const generateCaptcha = () => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    const choices = [...charset];
    const array = [];
    for (let i = 0; i <3;  i += 1) {
      const randomIndex = Math.floor(Math.random() * choices.length);
      const randomItem = choices.splice(randomIndex, 1)[0];
      array.push(randomItem);
    }
    // for (let i = 0; i < 5; i++) {
     
    
    
    //   var rand = choices[Math.floor(Math.random() * choices.length)];
    //   array.push(rand);
        
    // }

    setCaptchaText(array.join(" "));
  };
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = captchaText.replace(/\s+/g, "");
    console.log(code);
    if (inputValue.toLocaleLowerCase() === code.toLocaleLowerCase()) {
      alert("OK");
      generateCaptcha();
      setInputValue("");
    } else {
      alert("FAILED");
      generateCaptcha();
      setInputValue("");
    }
  };

  return (
    <>
      <h1>Security Code : {captchaText}</h1>

      <form>
        <input
          type="text"
          placeholder="case sensitive..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </>
  );
}

export default Captcha;
