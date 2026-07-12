import {Routes, BrowserRouter, Link, Route} from 'react-router-dom'
import { Home } from "./pages/public/Home"
import { Ordertrack } from './pages/public/trackOrder'
import { Contact } from './pages/public/contact'
import { Login } from './pages/admin/login'
import { Dashboard } from "./pages/admin/dashboard"
import { Order } from "./pages/admin/Orders"
import { Product } from "./pages/admin/Products"
import { ProtectedRoute } from './components/layout/protectRoute'
import { AdminLayout } from "./pages/admin/adminLayout"

function App() {
  return (
    <>
    <div className="min-h-screen bg-[#111111]">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trackorder" element={<Ordertrack />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="orders" element={<Order />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )

}

export default App
