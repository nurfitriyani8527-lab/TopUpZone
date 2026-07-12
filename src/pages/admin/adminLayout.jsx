import {Routes, BrowserRouter, Link, Route} from 'react-router-dom'
import { Dashboard } from '../admin/dashboard'
import { Product } from '../admin/Products'
import { Order } from '../admin/Orders'
import { NavbarAdmin } from '../../components/navbar/NavbarAdmin'
import AdminBackground from '../../components/backgroundDesign/adminBackground'

import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
    return (
        <>
            <NavbarAdmin />
            <AdminBackground/>
            <div>
                <h1 className='text-white'>Ini Admin Area</h1>
                <Outlet />
            </div>
        </>
    )
}