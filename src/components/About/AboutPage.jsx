import React from 'react'
import { Outlet } from 'react-router-dom'

function AboutPage() {
    // Outlet dùng để xác định vị trí hiển thị của component
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AboutPage