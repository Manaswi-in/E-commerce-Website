import React ,{useContext, useEffect, useState} from 'react'
import ProductItem from './ProductItem';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

   useEffect(() => {
    if (products && products.length > 0) {
        const bestProducts = products.filter(item => item.bestSeller);
        setBestSeller(bestProducts.slice(0, 5));
    }
}, [products]);

  return (
    <div className='my-10'>
      <div className = 'text-center py-8 text-3xl'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our best-selling products that customers love and keep coming back for more</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'> 
        {
            bestSeller.map((item,index) => (
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            )
          )
        }
      </div>
    </div>
  )
}

export default BestSeller
