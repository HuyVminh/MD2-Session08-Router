import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetailType() {
    const param = useParams();
    console.log(param);
    return (
        <div>Khóa học có ID là : {param.id} - Khóa học : {param.type}</div>
    )
}

export default CourseDetailType