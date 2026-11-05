import React, { useEffect, useState } from 'react'
import { employeeDashboardData } from '../assets/data'
import { adminDahboardData } from '../assets/data'
import Loading from '../components/Loading'
import Employeedashboard from '../components/Employeedashboard'
import Admindashboard from '../components/Admindashboard'

const Dashboard = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

 useEffect(()=>{
  /*setData(employeeDashboardData) */
  setData(adminDahboardData)
  setTimeout(()=>{
    setLoading(false)
  },1000)
 },[])

 if(loading) return <Loading />
 if(!data) return <p>failed to fetch dashboard</p>

 if(data.role === "ADMIN"){
  return <Admindashboard data={data}/>
 } else {
  return  <Employeedashboard data={data} />
 }

}

export default Dashboard