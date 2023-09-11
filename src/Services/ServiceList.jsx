import React from 'react'
import ServiceCard from './ServiceCard'
import{ Col }from'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServiceData =[
    {
        imgUrl: weatherImg,
        title:"Calculate Weather",
        desc:"We provide you with reliable and up-to-date information on the weather conditions of any destination in the world. We help you plan your ideal holiday with our weather in travel agency website service. Visit our website today and start your journey with us."
    },
    {
        imgUrl: guideImg,
        title:"Best Tour Guide",
        desc:"You are looking for a cultural tour, an adventure tour, a family tour, or a solo tour, we can help you find the perfect tour for you. We are more than just a tour guide. We are your travel companion. Visit our website today and start your adventure with us."
    },
    {
        imgUrl: customizationImg,
        title:"Customization",
        desc:"You are looking for a romantic getaway, a family vacation, a solo adventure, or a group tour, we can help you create the perfect holiday for you. We are more than just a travel agency. We are your travel partner. Visit our website today and start your customization with us."
    }
]
const ServiceList = () => {
  return(
  <>
  {
    ServiceData.map((item,index)=>(
    <Col lg='3' key={index}> 
        <ServiceCard item={item}/>
    </Col>
  ))}
  
  </>
  )
}

export default ServiceList;