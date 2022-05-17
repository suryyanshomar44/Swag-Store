import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import ManageCategories from './admin/ManageCategories'
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from './admin/UpdateProduct'
import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes'
import Cart from './core/Cart'
import Home from "./core/Home"
import AdminDashBoard from './user/AdminDashBoard'
import SignIn from './user/Signin'
import SignUp from './user/Signup'
import UserDashBoard from './user/UserDashBoard'




export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/cart" exact component={Cart} />


                <PrivateRoute path="/user/dashboard" exact component= {UserDashBoard}/>
                
                <AdminRoute path="/admin/dashboard" exact component= {AdminDashBoard}/>
                <AdminRoute path="/admin/create/category" exact component= {AddCategory}/>
                <AdminRoute path="/admin/categories" exact component= {ManageCategories}/>
                <AdminRoute path="/admin/create/product" exact component= {AddProduct}/>
                <AdminRoute path="/admin/products" exact component= {ManageProducts}/>
                <AdminRoute path="/admin/product/update/:productId" exact component= {UpdateProduct}/>

            </Switch>
        </BrowserRouter>
    )
}

