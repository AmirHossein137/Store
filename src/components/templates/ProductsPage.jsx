import React from 'react'
import SideBar from '../modules/SideBar'
import ProductInfo from '../modules/ProductInfo'

const ProductsPage = () => {
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-2'>
        <SideBar />
      </div>
      <div className='col-span-10'>
        <ProductInfo />
      </div>
    </div>
  )
}

export default ProductsPage