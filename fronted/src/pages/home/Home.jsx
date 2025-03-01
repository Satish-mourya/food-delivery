import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'



const Home = () => {

  const [Category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu Category={Category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
