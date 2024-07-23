import React from 'react'
import { Star } from 'lucide-react';

const Card = ({ data }) => {

    return (
        <div className='grid grid-cols-12 gap-4'>
            {data?.map((item) => (
                <div key={item.id} className='col-span-4'>
                    <div className='shadow-lg border flex flex-col gap-4 border-gray-300 p-3 rounded-lg'>
                        <div>
                            <img src={item.img} alt={item.title} className='w-full object-contain h-56' />
                        </div>
                        <span className='font-bold text-lg text-slate-800'>{item.title}</span>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <Star className='text-yellow-500' width={16} />
                                <Star className='text-yellow-500' width={16} />
                                <Star className='text-yellow-500' width={16} />
                                <Star className='text-yellow-500' width={16} />
                            </div>
                            <div>{item.reviews}</div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <del className='text-sm text-gray-500'>{item.prevPrice}</del>
                            <span className='text-rose-700 font-bold'>{item.newPrice}</span>
                        </div>
                        <button className='w-full h-11 bg-rose-600 text-white rounded-lg'>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card