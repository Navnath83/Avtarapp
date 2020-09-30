import React from 'react';
import './Avtar.css';
import Avtarlist from './Avtarlist';
import 'tachyons';



const Avtar=(props)=>{

    const Avtarlistarray=[
{
    id:1,
    name:"navnath",
    work:"webdeveloper"
},{
    id:2,
    name:"ak",
    work:"webdeveloper"
},{
    id:2,
    name:"gp",
    work:"webdeveloper"
},{
    id:3,
    name:"ak",
    work:"webdeveloper"
}

    ] 

    const avtarcard1 = Avtarlistarray.map((avtarcard, i)=> {
return <Avtarlist key={i} id={Avtarlistarray[i].name}
                   name={Avtarlistarray[i].name}
                   work={Avtarlistarray[i].work}/>
    })

    

return (
<div className="mainpage">
<h1>UDAAN SALES AND SERVICES</h1>
{avtarcard1}

<button>click</button>


</div>)
}
export default Avtar;