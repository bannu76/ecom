import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ProductList,ProductImage,ProductHeading ,ProductPrice,ProductRating,ProductRatingContainer,ProductCount} from "./StyledComponents"
import "./index.css"
const ProductItem =(props)=>{


    
    
    const {item}=props
    const {rating}=item
    console.log(item)
    return  <ProductList>
        <Link className="link-class" to={`/products/${item.id}`}>
            <ProductImage src={item.image} alt={item.title}/>
            <ProductHeading>{item.title}</ProductHeading>
            <ProductPrice>{`Rs. ${item.price}`}</ProductPrice>
            <ProductRatingContainer>

                <ProductRatingContainer icon="icon">
                  <ProductRating>{rating.rate}</ProductRating>
                  {<FaStar  />}  
                </ProductRatingContainer>
                <ProductRatingContainer>
                    <ProductCount>
                        {rating.count}
                    </ProductCount>
                    <ProductCount>
                        Reviews
                    </ProductCount>    
                </ProductRatingContainer>                

            </ProductRatingContainer>
        </Link>
    </ProductList>
}
export default ProductItem