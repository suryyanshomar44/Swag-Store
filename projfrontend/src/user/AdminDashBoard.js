import React from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper/index';
import Base from '../core/Base';


const AdminDashBoard = () => {
    
    
    
const {user: {name, email, role}} = isAuthenticated();

const adminLeftSide = () => {
    return (
        <div className="card" >
            <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
            <ul className="list-group" >
                <li className="list-group-item" style={{ height: 3 + 'rem'}}>
                    <Link to="/admin/create/category" className="nav-link text-success">Create Categories</Link>
                </li>
                <li className="list-group-item" style={{ height: 3 + 'rem'}}>
                    <Link to="/admin/categories" className="nav-link text-success">Manage Categories</Link>
                </li>
                <li className="list-group-item" style={{ height: 3 + 'rem'}}>
                    <Link to="/admin/create/product" className="nav-link text-success">Create Product</Link>
                </li>
                <li className="list-group-item" style={{ height: 3 + 'rem'}}>
                    <Link to="/admin/products" className="nav-link text-success">Manage Products</Link>
                </li>
                <li className="list-group-item" style={{ height: 3 + 'rem'}}>
                    <Link to="/admin/orders" className="nav-link text-success">Create Orders</Link>
                </li>
            </ul>
        </div>
    )
}

const adminRightSide = () => {
    return(
        <div className="card mb-4">
            <h4 className="card-header">Admin Information</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="badge bg-success">Name:</span> {name}
                </li>
                <li className="list-group-item">
                    <span className="badge bg-success">Email:</span> {email}
                </li>
                <li className="list-group-item">
                    <span className="badge bg-danger">Admin Area</span>
                </li>
            </ul>

        </div>
    )
}


    return (
        <Base title="Welcome to admin area" description="Manage all of your products" className="container bg-success p-2">
            <div className="row">
                <div className="col-3">
                    {adminLeftSide()}
                </div>
                <div className="col-9">
                    {adminRightSide()}
                </div>

            </div>

        </Base>
    )
}
export default AdminDashBoard;