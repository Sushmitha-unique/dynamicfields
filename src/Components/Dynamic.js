import React,{useState} from "react";
const Input = () =>{     
    return(
      <div className="Implement">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Age" />
            <button>Remove</button>
        </div>)
}
const Dynamic = () =>{
    const intvalue={
        name:'',
        age:''
    }
    const [value,setvalue]=useState(intvalue);
    const [add,setadd] = useState([]);
    function Addfun()
    {
    setadd(add.concat(<Input/>))
    }
    function Remfun()
    {
        setadd(add.slice(1))
    }
return(
    <div>
        <div className="Implement">
            <input type="text" placeholder="Name" value={value.name}  onChange={(e)=>setvalue({...value,name:e.target.value})}/>
            <input type="number" placeholder="Age" value={value.age}  onChange={(e)=>setvalue({...value,age:e.target.value})}/>
            <button onClick={Remfun}>Remove</button>
        </div>
        {add}
        <div>
        <button onClick={Addfun}>AddMore..</button>
        <button onClick={()=>console.log(value)}>Submit</button>
        </div>
        <div>
            <p>After clicking submit check console for data</p>
        </div>
    </div>
)
}
export default Dynamic;