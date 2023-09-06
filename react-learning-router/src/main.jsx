import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Invoice from './Components/Invoice.jsx'
import Invoices from './Components/Invoices.jsx'
import NewInvoice from './Components/NewInvoice.jsx'
import Expenses from './Components/Expenses.jsx'
import NotFound from './Components/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={<h2 style={{ padding: '1rem' }}>Select an Invoice</h2>}
            />
            <Route path=":invoiceId" element={<Invoice />} />
            <Route path="new" element={<NewInvoice />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />
          {/* No other routes match */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
