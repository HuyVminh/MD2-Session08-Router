import React from 'react'
import { useLocation } from 'react-router-dom'

function ContactPage() {
  // Nhận data được chuyển sang
  const data = useLocation();
  console.log(data.state.number);
  return (
    <div>
      {/* && => toán tử if */}
      <p>{data.state && data.state.number}</p>
    </div>
  )
}

export default ContactPage