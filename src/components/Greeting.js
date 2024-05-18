import React, { useState } from "react";

const Greeting = () => {
  const [text, setText] = useState(false);
  const changeTextHandler = () => {
    setText(true);
  };
  return (
    <div>
      <div>Hello World</div>
     {!text  &&<p>It's good to see you.</p>} 
      {text && <p>Changed!</p>}

      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
