import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zjt108d', 'template_nhwhkxe', form.current, '4duQrNovGZ3-CPtap')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className='pt-32 max-w-screen-lg mx-auto'>
            <h2 className='text-center text-4xl text-white'>Get in <span className='primary-text font-semibold'>touch</span></h2>

            <div className='bg-black bg-opacity-30 backdrop-blur-sm rounded-md drop-shadow-xl shadow-lg mt-12 md:p-8 m-2 border border-b-4 border-gray-700 '>
                <form className="card-body"  ref={form} onSubmit={sendEmail}>


                    <div className='w-full md:flex gap-6'>
                        <div className="form-control md:w-1/2">
                            <input type="text" placeholder="Name" name='name' className="text-white input bg-transparent placeholder-white border-b-4 border-[#623686]" />
                        </div>
                        <div className="form-control md:w-1/2 mt-6 md:mt-0">
                            <input type="text" placeholder="Email" name='email' className="text-white input bg-transparent placeholder-white border-b-4 border-[#623686]" />
                        </div>
                    </div>

                    <textarea placeholder="Message" name='message' className="textarea h-32 w-full mt-8 text-white input bg-transparent placeholder-white border-b-4 border-[#623686]" ></textarea>


                    <div className="mt-6">
                        <input type="submit" value="Send" className=' bg-[#623686] text-white px-6 py-2 rounded-md hover:bg-[#6d20c5d7] text-lg' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;