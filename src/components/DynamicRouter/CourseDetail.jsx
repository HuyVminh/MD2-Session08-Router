import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetail() {
    //useParams là 1 hook được cung cấp bởi react-router-dom => lấy param trên url về
    const param = useParams();
    console.log(param);
  return (
      <div>
          <p>Khóa học có ID là : {param.id}</p>
    </div>
  )
}

export default CourseDetail