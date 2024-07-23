import React from 'react'
import Logo from '../../../public/Logo.svg'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Header = () => {

    const { search, setSearch } = useAppContext()

    return (
        <div className='flex items-center justify-between border-b border-gray-300 py-5 mb-5'>
            <Link to={'/'}>
                <img src={Logo} />
            </Link>
            <div className='flex items-center gap-5'>
                <div>
                    <input
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='w-96 border text-sm text-slate-950 placeholder:text-slate-950 outline-blue-300 border-gray-400 px-5 h-11 bg-gray-200 rounded-xl'
                        placeholder='Search Your Products....'

                    />
                </div>
            </div>
            <div>
                <Link to={'/cart'}>
                    <ShoppingCart />
                </Link>
            </div>
        </div>
    )
}

export default Header