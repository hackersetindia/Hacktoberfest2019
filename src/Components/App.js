import React,{useState} from 'react'
import {User} from './User'
import Repo from './Repo'
export default function App() {
    const [user,setuser]=useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        setuser(e.target.name.value)
    }
    return (
        <div className='ui container'>
            <form onSubmit={(e)=>onSubmit(e)}>
            <input type="text" name="name"/>
            <button>submit</button>
            </form>
            <User username={user}/>
            <Repo username={user}/>
        </div>
    )
}
