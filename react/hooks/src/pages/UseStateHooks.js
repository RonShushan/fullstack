import React, { useState } from 'react';

//imrs
//rfce


function UseStateHooks() {

  
  const [Num, setNum] = useState(22);
  const [NumsArray, setNumsArray] = useState([1,2,3,4,5]);
  
  const [MyName, setMyName] = useState('abc');
  
  //let num = 10;
  
  const changeNumber = (num) => {
    setNum(num);

    // let n = [...NumsArray];
    // n.push(num)
    // setNumsArray(n);
    setNumsArray([...NumsArray,num])
  }

  return (
    <>
        <div>UseStateHooks</div>

        <button type='button' onClick={()=> 
            {
                changeNumber(Num+1);
                setMyName('shay');
            }
        }>Add Number</button>
        <button type='button' onClick={()=>setMyName('shay')}>Change my Name</button>
        {/* <input type='text' onChange={(e)=>setMyName(e.target.value)} /> */}
        <div>
            <div>My Number is : {Num}</div>
            <div> My name is : {MyName}</div>
        </div>
        <hr/>

        {
            NumsArray.map((n,i)=><div key={i}>{n}</div>)
        }
    </>
  )
}

export default UseStateHooks