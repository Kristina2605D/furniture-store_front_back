import React from 'react'

const Subscribe = () => {
    return (
        <section className='subscribe'>
            <h3 className='sub_title'>Subscribe to get the latest news<br /> about us</h3>
            <p className='sub_p'>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,<br /> sed eiusmod tempor incididunt ut labore at dolore.</p>
                <form className='sub_form'>
                    <input className='sub_email' type="text" placeholder='Enter your email' />
                    <input className='sub_reg' type="submit" value="Register" />
                </form>
        </section>
    )
}

export default Subscribe