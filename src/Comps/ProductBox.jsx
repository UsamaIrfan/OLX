import React, {useState, useEffect} from 'react';
import '../Styles/ProductBox.css';
import Product from './Product';
import {motion} from 'framer-motion';
import DataCall from '../config/hooks/DataCall'
import AdItem from './SubComps/AdItem';
import kettleImage from '../Images/Application/kettle-desaturated._CB445243794_.svg'

function ProductBox({callCatagory}) {

   const {docs} = DataCall(callCatagory)
   const month = ['jan', 'feb', 'mar', 'apri', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec']

   const [list, setList] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {

      if (loading) {
         let _list = [] 
         for (let i = 0; i < 12; i++) {
            _list.push(<AdItem keyCheck={i} placeholder={true} />)
         }
         setList(_list)
      }
         

      return () => list

   }, [loading])

   return (
      <motion.div className="product__container">
         {!docs && list}
         {docs?.length < 1 && <div className="product__notFound">
            <img src={kettleImage} alt="Not Found Kettle SVG"/> 
            <p>No Products Found.</p>  
         </div>}
         {docs && docs.map(doc => {  
            let date = doc.createdAt?.toDate();
            return <Product 
               id={doc.id}
               price={"Rs " + doc.price}
               desc={doc.desc}
               location={doc.state}
               timeStamp={`${date?.getDate()} ${month[date?.getMonth() - 1]}`}
               image={doc.productImage}
               featured={false}
            />
         })}
         {/* <Product 
            id={1}
            price={2000}
            desc="This is product description and very durable."
            location="Malir, karachi"
            timeStamp="29 oct"
            image="https://apollo-singapore.akamaized.net/v1/files/7g3i7oxt7yue2-PK/image;s=300x600;q=60"
            featured
         />
         <Product 
            id={1}
            price={2000}
            desc="This is product description and very durable."
            location="Malir, karachi"
            timeStamp="29 oct"
            image="https://apollo-singapore.akamaized.net/v1/files/qymcfn1xceoc1-PK/image;s=300x600;q=60"
            featured
         />
         <Product 
            id={1}
            price={2000}
            desc="This is product description and very durable."
            location="Malir, karachi"
            timeStamp="29 oct"
            image="https://apollo-singapore.akamaized.net/v1/files/8212d96kwvar2-PK/image;s=300x600;q=60"
         />
         <Product 
            id={1}
            price={2000}
            desc="This is product description and very durable."
            location="Malir, karachi"
            timeStamp="29 oct"
            image="https://apollo-singapore.akamaized.net/v1/files/6p5ngdaggd062-PK/image;s=300x600;q=60"
            featured
         />
         <Product 
            id={1}
            price={2000}
            desc="This is product description and very durable."
            location="Malir, karachi"
            timeStamp="29 oct"
            image="https://apollo-singapore.akamaized.net/v1/files/71mf18g70rku3-PK/image;s=300x600;q=60"
            featured
         />
         <Product 
            id={1}
            price={2000}
            desc="This is product description and very durable."
            location="Malir, karachi"
            timeStamp="29 oct"
            image="https://apollo-singapore.akamaized.net/v1/files/djao2nt4hmd3-PK/image;s=300x600;q=60"
            featured
         />
         <Product 
            id={1}
            price={2000}
            desc="This is product description and very durable."
            location="Lahore, karachi"
            timeStamp="3 nov"
            image="https://apollo-singapore.akamaized.net/v1/files/ye249h333l6j1-PK/image;s=300x600;q=60"
         /> */}
      </motion.div>
   )
}

export default ProductBox
