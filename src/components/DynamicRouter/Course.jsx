import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Course() {
    const [searchParam, setSearchParam] = useSearchParams();
    return (
        <div>
            <h1>Course table</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ReactJS</td>
                        <td>12000</td>
                        <td>
                            <button onClick={() => setSearchParam({ course: "ReactJS", price: "12000" })}>Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>AngularJS</td>
                        <td>15000</td>
                        <td>
                            <button onClick={() => setSearchParam({ course: "AngularJS", price: "15000" })}>Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>VueJS</td>
                        <td>10000</td>
                        <td>
                            <button onClick={() => setSearchParam({ course: "VueJS", price: "10000" })}>Detail</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3>Khóa học là : {searchParam.get("course")} - Giá : {searchParam.get("price")}</h3>
        </div>
    )
}

export default Course