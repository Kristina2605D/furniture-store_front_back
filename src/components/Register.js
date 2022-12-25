import React from 'react'
import { useForm } from 'react-hook-form';

export default function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data, e ) =>{
        console.log(data)
       e.target.reset()
   } 



    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <h2>Sign In</h2>
                    <span>register and enjoy the service</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' {...register('username')} placeholder='username' />
                        <input type='password' {...register('password')} placeholder='password' />
                        <input type='password' {...register('confirmpwd')} placeholder='confirm password' />
                        <input type="tel" id="phone" name="phone" {...register('mobile', { required: true, maxLength: 10 })} placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        <small>Format: 123-45-678</small>
                        {errors.mobile?.type === 'required' && 'Mobile Number is required'}
                        {errors.mobile?.type === 'maxLength' && 'Max Length Exceed'}

                        <button className='btn'>Sign In</button>
                    </form>
                </div>
                <div className='col-2'>
                    <img src='/images/form.jpg' alt='' />
                </div>
            </div>
        </section>
    )
}
