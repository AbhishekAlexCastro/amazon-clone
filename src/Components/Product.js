import styled from 'styled-components'
const Product = (props) => {
    console.log(props.title)
    return ( 
        <Container>
           <Title>
                {props.title}
           </Title>
           <Price>
                Rs.{props.price}.00
           </Price>
           <Rating>
                {
                Array(props.rating).fill().map(rating=><p style={{display:'inline'}}>⭐</p>)
                
                }
           </Rating>
           <Image src={props.image}/>
           <ActionSection>
                <AddToCartButton>Add to Cart</AddToCartButton>
           </ActionSection>
        </Container>
     );
}
 
export default Product;

const Container=styled.div`
    background-color:white;
    z-index:100;
    flex:1;
    padding:20px;
    margin:10px;
    max-height:400px;
    display:flex;
    flex-direction:column;
`

const Title =styled.span``
const Price =styled.span`
    font-weight:500;
    margin-top:3px;
`
const Rating =styled.div``
const Image =styled.img`
    max-height:200px;
    object-fit:contain;
`
const AddToCartButton =styled.button`
    width:100px;
    background-color:#f0c14b;
    border 2px solid #a88734;
    border-radius:2px;
`

const ActionSection=styled.div`
    margin:10px;
    display:flex;
    align-items:center;
    justify-content:center;
`