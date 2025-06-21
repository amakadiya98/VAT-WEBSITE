import React from 'react';
function Footer() {
    return (
        <footer className="p-[20px_30px_26px] sm:p-[25px_35px_60px] lg:p-[61px_0_89px] w-full bg-[#262424]  text-white ">
            <div className='mt-[35px] sm:mt:[55px] lg:mt-[75px] border-t-[1px] pt-[16px] border-white max-w-[1280px] mx-auto flex flex-wrap lg:flex-nowrap w-full lg:w-[90%]  justify-between gap-[26px]'>
                <ul className='sm:w-[250px] w-[184px] lg:w-[330px] flex flex-col gap-[20px] mt-3'>
                    <h4 className='font-urbanist-semibold mb-[-3px] text-base sm:text-lg '>Reach us</h4>
                    <li><div className='flex sm:flex-row flex-col gap-[10px] sm:gap-[25px] sm:items-center items-start text-xs sm:text-base'><img src="/images/phone.svg" alt="Phone" /><a href="tel:+447476916811">+447476916811</a></div></li>
                    <li><div className='flex sm:flex-row flex-col gap-[10px] sm:gap-[25px] sm:items-center items-start text-xs sm:text-base'><img src="/images/email.svg" alt="Phone" /><a href="mailto:info@Ibda.Me">info@Ibda.Me</a></div></li>
                    <li><div className='flex sm:flex-row flex-col gap-[10px] sm:gap-[25px] sm:items-center items-start text-xs sm:text-base'><img src="/images/location.svg" alt="Phone" /><a href="">IBDA AI PRODUCT OF CHAIN EXCHANGE HOLDING LIMITED, 128 City Road, London, United Kingdom, EC1V 2NX</a></div></li>
                </ul>
                <ul className=' flex flex-col gap-[20px] mt-3'>
                    <h4 className='font-urbanist-semibold mb-[-3px] text-base sm:text-lg'>Company</h4>
                    <a href="#"><li className='font-urbanist-regular text-xs sm:text-base'>About</li></a>
                    <a href="#"><li className='font-urbanist-regular text-xs sm:text-base'>Contact</li></a>
                    <a href="#"><li className='font-urbanist-regular text-xs sm:text-base'>Blogs</li></a>
                </ul>
                <ul className=' flex flex-col gap-[20px] mt-3'>
                    <h4 className='font-urbanist-semibold mb-[-3px] text-base sm:text-lg'>Legal</h4>
                    <a href="#"><li className='font-urbanist-regular text-xs sm:text-base'>Privacy Policy</li></a>
                    <a href="#"><li className='font-urbanist-regular text-xs sm:text-base'>Terms & Services</li></a>
                    <a href="#"><li className='font-urbanist-regular text-xs sm:text-base'>Terms of Use</li></a>
                    <a href="#"><li className='font-urbanist-regular text-xs sm:text-base'>Refund Policy</li></a>
                </ul>
                <div className='rounded-[10px] w-full lg:w-[304px] p-[12px_14px] h-fit mt-[25px] lg:mt-0 bg-black'>
                    <h4 className='font-urbanist-semibold text-base sm:text-lg'>Join Our Newsletter</h4>
                    <div className='bg-[#0B0F26] rounded flex mt-[24px]'>
                        <input type="text" className='rounded-l text-[#616161] font-urbanist-regular text-[12px] p-[10px] outline-none bg-white w-full' placeholder='Your email address' />
                        <button className='rounded-r p-[9px_22px] bg-red hover:text-[#0B0F26] text-[12px] hover:bg-white font-urbanist-medium'>Subscribe</button>
                    </div>
                    <p className='text-white opacity-50 mt-[16px] font-urbanist-medium text-[13px]'>*  Will send you weekly updates for your better tool management.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;