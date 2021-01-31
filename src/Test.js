import React, { useState } from 'react';

const Test = () => {
    const [test, setTest] = useState(1);
    const [aa, setaa] = useState("");
    // ここにクリックイベントを書きます
    const a = () => {
        setTest(test + 1);
    }
    const b = () => {
        setTest(test - 1);
    }
    const c = () => {
        setTest(test * 2);
    }
    const d = () => {
        setTest(test / 2);
    }
    const f = (event) => {
        console.log(event, "eventだよ");
        setaa(event.target.value);
    }
    return  <div>
        {/* clickを書きます　*/}
        clickされたら変化します　{test}
        <button onClick={a}>+</button>
         <button onClick={b}>-</button>
         <button onClick={c}>*</button>
         <button onClick={d}>/</button>
         <div>
          <div>
          <input onChange={f} 
          type="text"
          value={aa}
          placeholder="文字を入力してください">
          </input></div>
         </div>
        </div>;  
};

export default Test;
