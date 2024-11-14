import BestSelling from '@/app/components/bestselling/bestsell'
import ProductDetails from '@/app/components/productdetails/productdetails'
import React from 'react'

 async function DynamicProduct({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
  return (
    <div>
      <ProductDetails Cardid={id}/>
      <BestSelling/>
     
    </div>
  )
}

export default  DynamicProduct
