import React from 'react'
import { useForm } from 'react-hook-form';

export default function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

 

    return (
        <section>
            <div className='register'>
                <div className='col-1'>
                    <h2>Log in</h2>
                    

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' {...register('username')} placeholder='username' />
                        <input type='password' {...register('password')} placeholder='password' />
                    
                        <button className='btn'>Log in</button>
                    </form>
                </div>
                <div className='col-2'>
                    <img src='/images/form.jpg' alt='' />
                </div>
            </div>
        </section>
    )
}
