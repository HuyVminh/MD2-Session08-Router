import React from 'react'

function NewInvoice() {
    return (
        <div>
            <form style={{ padding: '1rem' }}>
                <label htmlFor="new-invoice" style={{ display: 'block' }}>
                    New Invoice Name
                </label>
                <input type="text" name="new-invoice" id="new-invoice" />
                <input type="submit" value="Create New Invoice" />
            </form>
        </div>
    )
}

export default NewInvoice