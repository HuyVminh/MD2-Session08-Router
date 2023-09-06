import React, { useEffect } from 'react'
import { invoices } from './Invoices'
import { useNavigate, useParams } from 'react-router-dom'
function Invoice() {
    const params = useParams()
    const navigate = useNavigate()

    const invoice = invoices.find(
        invoice => invoice.id.toString() === params.invoiceId
    )

    useEffect(() => {
        // Push user to /invoices, one level up
        if (!invoice) navigate('..')
    }, [invoice])

    return (
        <div>
            <h2 style={{ padding: '1rem' }}>
                Invoice #{invoice?.id} for {invoice?.name}
            </h2>
        </div>
    )
}

export default Invoice