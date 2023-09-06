import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const invoices = [
    {
        id: 1,
        name: 'Google'
    },
    {
        id: 2,
        name: 'Apple'
    }
]

function Invoices() {

    return (
        <>
            <h2>Invoices</h2>
            <Link to="new">Create New Invoice</Link>
            <div style={{ display: 'flex' }}>
                <nav
                    style={{
                        padding: '1rem',
                        borderRight: '1px solid'
                    }}
                >
                    {invoices.map(invoice => (
                        <Link
                            to={invoice.id.toString()}
                            key={invoice.id}
                            style={{ display: 'block', margin: '1rem' }}
                        >
                            {invoice.name}
                        </Link>
                    ))}
                </nav>

                <Outlet />
            </div>
        </>

    )
}

export default Invoices