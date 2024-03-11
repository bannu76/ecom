import styled from "styled-components";


export const ProductList=styled.li`

    display:flex;
    flex-direction:column;
    padding:16px;
    width:26%;
    color:black;
    margin:6px;
    height:400px;
    font-family:Roboto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    line-height:1;
    border-radius:8px;

`
export const ProductImage=styled.img`
    height:200px;
    width:100%;
`
export const ProductHeading=styled.h1`
color:grey;
font-size:100%;

`
export const ProductRatingContainer=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:50%;
    background-color:${(props)=>props.icon==="icon"?"#2FAD70":"transaparent"};
    font-size:80%;
    color:${(props)=>props.icon==="icon"?"#ffffff":"transaparent"};
    border-radius:12px;
    height:22px;
    padding:6px;
    @media screen and (max-width:576px)
    {
        display:none;
    }
    
`

export const ProductRating=styled.p`
margin-right:8px;


`
export const ProductCount=styled.p`
color:grey;
margin-left:8px;

`

export const ProductPrice=styled.p`
    font-weight:800;
    font-size:100%;
    
`
