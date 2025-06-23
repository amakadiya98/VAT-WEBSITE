import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spline from '@splinetool/react-spline';

export default function BannerSection({ data } = {}) {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <section className='relative overflow-hidden'>
                <div className="banner-section bg-[url('/images/banner-bg.png')] bg-center bg-no-repeat bg-cover lg:pt-[321px] pt-[100px] sm:pt-[183px] pb-[200px] md:pb-[215px] xl:pb-[570px] 2xl:pb-[1000px] ">
                    <div className="w-[90%] max-w-[1500px] mx-auto">
                        <div className='flex gap-[40px] items-end lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse'>
                            <div className="lg:pb-[120px] sm:pb-[40px]">
                              <h1
                                className="font-inter-bold xl:text-[86px] lg:text-[70px] md:text-[60px] text-[30px] tracking-[-0.06em] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#F2E5E5] dark:from-[#FFFFFF] dark:to-[#F2E5E5] mb-[20px] "
                                data-aos="slide-down"
                                data-aos-delay="100"
                                >
                                Ready to Automate Your Tax & P&amp;L Reporting?
                                </h1>

                                <p className="font-inter-regular md:text-[24px] sm:text-[18px] text-[12px] tracking-[-3%] text-off-white dark:text-grey-6 ml-
                                dark:sm:text-transparent dark:sm:bg-clip-text 
                                dark:sm:bg-gradient-to-r dark:from-[#A5A5A5] dark:to-[#A5A5A5] 
                                sm:mb-[47px] max-w-[275px] sm:max-w-full" data-aos="fade-up" data-aos-delay="400">
                                    {data?.Description || `Start saving time, money, and stress. Get started with Emirates Tax in minutes.`}
                                </p>
                                <div className="flex items-center w-full mt-[30px] sm:mt-[86px]">
                                    <a href={data?.Button?.URL || "/"}>
                                        <button className="font-medium text-white bg-gradient-to-r from-[#BA0000] to-[#F00000]  transition-all duration-200 md:text-[32px] sm:text-[24px] text-[14px] sm:text-[16px] text-center capitalize rounded-[15px] sm:rounded-[40px] md:px-[46px] md:py-[16px] sm:py-[12px] sm:px-[50px] py-[7px] px-[25px] sm:px-[35px]  hover:shadow-2xl hover:shadow-red-500/60 hover:brightness-110" data-aos="fade-up" data-aos-delay="500" >
                                            {data?.Button?.Title || "Book a Demo"}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}