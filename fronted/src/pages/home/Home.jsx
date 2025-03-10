import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
 



const Home = () => {

  const [Category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu Category={Category} setCategory={setCategory}/>
      <FoodDisplay/>
    </div>
  )
}

export default Home
