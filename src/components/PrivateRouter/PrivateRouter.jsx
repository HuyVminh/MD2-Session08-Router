import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouter() {
    // Navigate sử dụng để chuyển hướng router và render component

    const isLogin = false;

    return (
        isLogin ? <Outlet /> : <Navigate to={"/login"} />
    )
}

export default PrivateRouter