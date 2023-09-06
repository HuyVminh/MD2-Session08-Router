import React from 'react'
import { useNavigate } from 'react-router-dom'

function DemoNavigate() {
    // sử dụng để chuyển trang, sử dụng với history của trình duyệt
    // useNavigate là 1 hook được cung cấp bởi react-router-dom
    const navigate = useNavigate();
    return (
        <div>
            {/* dùng để chuyển trang : Contact page */}
            <button onClick={() => navigate("/contact")}>Go to contact page</button>
            {/* sử dụng navigate với history */}
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate(+1)}>Foward</button>
            {/* sử dụng navigate với replace=true => không lưu history */}
            <button onClick={() => navigate("/contact", { replace: true })}>Go to contact - not save history</button>
            {/* Sử dụng navigate để truyền dữ liệu => dể lấy được dữ liệu ở contactpage 
            => useLocation để nhận được datâ*/}
            <button onClick={() => navigate("/contact", { state: { number: 10 } })} >Go to Contact with data</button>
        </div>
    )
}

export default DemoNavigate