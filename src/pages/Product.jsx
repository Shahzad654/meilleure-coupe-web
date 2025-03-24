import React, { useMemo } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { catProducts } from '../utils/cats'
// import { rabbitProducts } from '../utils/rabbit'
import { birdProducts } from '../utils/birds'
// import { fishProducts } from '../utils/fish'
// import { dogProducts } from '../utils/dogs'

export default function Product() {
  const { category } = useParams();
  console.log(category)

  const catP = useMemo(() => {
    return category === "Cats" ? catProducts.filter((product) => product.category === category) : [];
  }, [category]);

//   const dogP = useMemo(() => {
//     return category === "Dogs" ? dogProducts.filter((product) => product.category === category) : [];
//   }, [category]);

  const birdP = useMemo(() => {
    return category === "Birds" ? birdProducts.filter((product) => product.category === category) : [];
  }, [category]);

//   const fishP = useMemo(() => {
//     return category === "Fish" ? fishProducts.filter((product) => product.category === category) : [];
//   }, [category]);   

//   const rabbitP = useMemo(() => {
//     return category === "Rabbit" ? rabbitProducts.filter((product) => product.category === category) : [];
//   }, [category]);



  return (
    <>
    <Navbar/>
    <StyledProduct>
        <div className="main_container">
            {catP.map((product) => (
                <div className="product_card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
            {/* {dogP.map((product) => (
                <div className="product_card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                </div>
            ))} */}
            {birdP.map((product) => (
                <div className="product_card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                </div>
            ))}     
            {/* {fishP.map((product) => (
                <div className="product_card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                </div>
            ))} */}
            {/* {rabbitP.map((product) => (
                <div className="product_card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                </div>
            ))} */}
            
        </div>
    </StyledProduct>
    <Footer/>
      
    </>
  )
}

const StyledProduct = styled.div`
    
`
