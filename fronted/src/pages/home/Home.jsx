import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appdownload/AppDownload'
 



const Home = () => {

  const [Category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu Category={Category} setCategory={setCategory}/>
      <FoodDisplay Category={Category} setCategory={setCategory}/>
      <AppDownload/>
    </div>
  )
}

export default Home
