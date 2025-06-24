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
            <section className='relative overflow-hidden hero-section'>
              
                <div className="banner-section bg-[url('/images/banner_bg.svg')] bg-center bg-no-repeat bg-cover lg:pt-[321px] pt-[100px] sm:pt-[183px] pb-[270px] sm:pb-[80px] md:pb-[75px] xl:pb-[570px] 2xl:pb-[540px] relative z-10">
                    
                    
                    <div className='absolute bottom-[-147px] sm:right-[-246px] sm:bottom-[-162px] right-[-187px] md:right-[-300px] 2xl:bottom-[-100px] 2xl:right-[-400px] h-[100%] 2xl:h-[100%] w-[205%] sm:w-[150%] md:w-[140%] 2xl:w-[100%] spline-container overflow-hidden z-20'>
                        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.13/build/spline-viewer.js"></script>
                        <Spline scene="https://prod.spline.design/iW70zsqm3yi2yeOg/scene.splinecode" />
                    </div>

                    <div className="w-[90%] max-w-[1500px] mx-auto relative z-30">
                        <div className='flex gap-[40px] items-end lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse'>
                            <div className="lg:pb-[120px] sm:pb-[40px] relative z-30">
                                <h1
                                    className="font-inter-bold xl:text-[86px] md:text-[70px] sm:text-[40px] text-[30px] tracking-[-0.06em] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#F2E5E5] dark:from-[#FFFFFF] dark:to-[#F2E5E5] mb-[20px] relative z-30"
                                    data-aos="slide-down"
                                    data-aos-delay="100"
                                >
                                    Ready to Automate Your Tax & P&L Reporting?
                                </h1>

                                <p className="font-inter-regular md:text-[24px] sm:text-[20px] text-[14px] tracking-[-3%] text-off-white dark:text-grey-6 ml-
                                dark:sm:text-transparent dark:sm:bg-clip-text 
                                dark:sm:bg-gradient-to-r dark:from-[#A5A5A5] dark:to-[#A5A5A5] 
                                sm:mb-[47px] max-w-[275px] sm:max-w-full md:w-[50%] lg:w-[60%] xl:w-[90%] relative z-30" data-aos="fade-up" data-aos-delay="400">
                                    {data?.Description || `Start saving time, money, and stress. Get started with Emirates Tax in minutes.`}
                                </p>
                                
                                <div className="flex items-center w-full mt-[30px] sm:mt-[86px] relative z-30">
                                    <a href={data?.Button?.URL || "/"}>
                                        <button className="font-medium text-white bg-gradient-to-r from-[#BA0000] to-[#F00000] transition-all duration-200 md:text-[32px] sm:text-[24px] text-[14px] sm:text-[16px] text-center capitalize rounded-[15px] sm:rounded-[40px] md:px-[46px] md:py-[16px] sm:py-[12px] sm:px-[50px] py-[7px] px-[25px] sm:px-[35px] hover:shadow-2xl hover:shadow-red-500/60 hover:brightness-110 relative z-30" data-aos="fade-up" data-aos-delay="500">
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