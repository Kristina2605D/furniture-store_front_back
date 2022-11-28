import React from 'react';

const Sponsors = () => {
    return (
        <div className='sponsors'>
            <h3 className='trusted'>Trusted by 20,000+ companies</h3>
            <ul className='sponsors_box'>
                <li className='sponsors_logo_wrapper'>
                    <img className='sponsors_logo' src='/images/mastercard.png' />
                </li>

            
                <li className='sponsors_logo_wrapper'>
                <img className='sponsors_logo' src='/images/airbnb.png' />
            </li>

            
            <li className='sponsors_logo_wrapper'>
                    <img className='sponsors_logo' src='/images/uber.png' />
                </li>
            

            
                <li className='sponsors_logo_wrapper'>
                    <img className='sponsors_logo' src='/images/paypal.png' />
                </li>
            

            
                <li className='sponsors_logo_wrapper'>
                    <img className='sponsors_logo' src='/images/visa.png' />
                </li>
           

                <li className='sponsors_logo_wrapper'>
                    <img className='sponsors_logo' src='/images/stripe.png' />
                </li>
            </ul>

        </div>
    )
}

export default Sponsors;