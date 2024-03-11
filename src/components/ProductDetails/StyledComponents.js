import styled from "styled-components";

export const DetailsContainer=styled.div`

display:flex;
flex-direction:row;
min-height:60vh;
width:100%;
align-item:center;
padding:10%;

@media screen and (max-width:576px)
{
    flex-direction:column;
    
    align-items:center;
    justify-content:center;

}

`
export const ImageContainer=styled.div`
    width:50%;
    margin-bottom:8px;

    @media screen and (max-width:576px)
    {
        width:100%;
    }

`
export const DetailingContainer=styled.div`
    width:50%;

    @media screen and (max-width:576px)
    {
        margin-top:10%;
        width:100%
    }
`
export const Image=styled.img`
    width:90%;

    height:100%;


`

export const CContainer=styled.div`
width:100%;
display:flex;
justify-content:center;
flex-direction:row;
align-items:center;
color:#000000;
    background-color:transparent;
`
export const CartContainer=styled.button`
    width:80%;
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items:center;
    color:${(props)=>props.buy==="buy"?"#ffffff":"#2FAD70"};
    border-radius:8px;
    border-style:solid;
    border-color:${(props)=>props.buy==="buy"?"#ffffff":"#2FAD70"};
    height:50px;
    background-color:${(props)=>props.buy==="buy"?"#2FAD70":"#fffff"};
`

export const RowContainer=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

`
export const RatingContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    border-style:solid;
    border-width:1px;
    border-color:grey;
    border-radius:8px;
    padding:6px;
    margin:8px;
`
export const ProductRatingContainer=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:50px;
    background-color:${(props)=>props.icon==="icon"?"#2FAD70":"transaparent"};
    font-size:80%;
    color:${(props)=>props.icon==="icon"?"#ffffff":"transaparent"};
    border-radius:12px;
    height:22px;
    padding:6px;
`
export const ProductRating=styled.p`
margin-right:8px
`
export const ProductCount=styled.p`
color:grey;
margin-left:8px;

`
export const ColumnContainer=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
border-style:solid;
border-width:1px;
border-color:grey;
border-radius:8px;
padding:6px;
margin:8px;

`
export const ProHeading=styled.h1`
    font-family:Roboto;
    font-size:34px;
    opacity:70%;

`

export const P=styled.p`
color:grey;
text-align:left;
`
export const Span=styled.span`
    font-weight:700;
`