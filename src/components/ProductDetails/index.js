
import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa";
import { DetailsContainer,P,Span,ProductRating,ColumnContainer,ProHeading,ProductCount,ProductRatingContainer,RowContainer,RatingContainer,DetailingContainer,ImageContainer,Image,CContainer ,CartContainer} from "./StyledComponents"
import {  useParams } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";


const ProductDetails =(props)=>{

    const [isLoading,setLoading]=useState(true)
    const [product,setProduct]=useState()
    const [errorMsg,seterrorMsg]=useState()

    useEffect(()=>{
            getData()
    },[])

    const params=useParams()

    const {id}=params



    const getData= async()=>{

        const options={
            method:"get"
        }
        
        const response = await fetch(`https://fakestoreapi.com/products/${id}`,options)
        

        if(response.ok)
        {
                const data= await response.json()
                console.log(data)
                setProduct(data)
                setLoading(false)
        }
        else{

            seterrorMsg("Network Api Call Failed")
            
        }

    }

    const renderImageContainer=()=>{
        return <ImageContainer>

            <Image src={product.image} alt={product.title}/>
            <CContainer>
                <CartContainer>
                    <IoCartOutline/>
                    <p>Add To Cart</p>
                </CartContainer>
                <CartContainer buy="buy">
                    
                    <p>Buy Now</p>
                </CartContainer>
            </CContainer>
            
        </ImageContainer>
    }
    
    const renderDetailingContainer=()=>{
        return <DetailingContainer>

                <RatingContainer>
                    <RowContainer>

                        <p>{`Rs ${product.price}`}</p>
                    </RowContainer>

                <ProductRatingContainer>    
                    <ProductRatingContainer icon="icon">
                    <ProductRating>{product.rating.rate}</ProductRating>
                    {<FaStar  />}  
                    </ProductRatingContainer>    
                    <ProductRatingContainer>
                        <ProductCount>
                            {product.rating.count}
                        </ProductCount>
                        <ProductCount>
                            Reviews
                        </ProductCount>    
                </ProductRatingContainer>
                </ProductRatingContainer> 



                </RatingContainer>

                <ColumnContainer>

                    <ProHeading>
                        Product Details
                    </ProHeading>

                    <P><Span>Name:</Span>{`  ${product.title}`}</P>
                    <P><Span>Description:</Span>{`   ${product.description}`}</P>
                    <P><Span>Category:</Span>{`  ${product.category}`}</P>
                </ColumnContainer>

        </DetailingContainer>
    }

    return isLoading===false&& <DetailsContainer>

        {renderImageContainer()}
        {renderDetailingContainer()}
        
        
    </DetailsContainer>
}
export default ProductDetails