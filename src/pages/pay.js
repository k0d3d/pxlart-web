import React from 'react'

const RedirectToPayment = props => (
  <meta
    http-equiv="refresh"
    content={`0; URL='https://paystack.com/pay/intro2js'`}
  />
)

export default RedirectToPayment