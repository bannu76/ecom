import { useEffect, useState, } from "react"
import { HomeContainer,Heading } from "./StyledComponets"
import ProductItem from "../ProductItem"



const Home=()=>{

    const [loading,setLoading]=useState(true)
   
    const [productList,setProductList]=useState([])
    const [errror,setError]=useState("")
    useEffect(()=>{
        getData()
    },[])

    const getData= async()=>{

        const options={
            method:"get",
        }
        const response=await fetch("https://fakestoreapi.com/products/",options)
        

        if(response.ok)
        {
            const resData= await response.json()
           
            setProductList(resData)
            setLoading(false)
        }
        else{
            setError("Network Api Call Failed")
            setLoading(true)
        }

    }


    
    return loading===false &&
    <div>
        <Heading>Products</Heading>
        <HomeContainer>
            {productList.map((item)=><ProductItem item={item}/>)}
          
        </HomeContainer>
    </div>
}
export default Home