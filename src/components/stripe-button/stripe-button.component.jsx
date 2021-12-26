import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ totalPRice }) => {
    const stripePrice = totalPRice * 100;
    const publishableKey =
        'pk_test_51KApn5DDqf8gmMCVWAY3MA4UFV1pSDRjaABxj10tCRYL7Z1hUXvNeTFoI12l98QyrGPSk0w31tYpx7LcMTTOUCfd00o1dxhCqz';

    const onToken = token => {
        alert('Done!');
    };

    try {
        return (
            <StripeCheckout
                name="Axile Clothing Co."
                label="Pay Now."
                image="https://svgshare.com/i/d2T.svg"
                description={`Your Total Price is $${totalPRice}`}
                amount={stripePrice}
                panelLabel="Pay Now."
                token={onToken}
                stripeKey={publishableKey}
                billingAddress
                shippingAddress
            />
        );
    } catch (error) {
        console.error('Stripe Error');
    }
};

export default StripeButton;
