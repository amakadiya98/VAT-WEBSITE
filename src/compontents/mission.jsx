export default function Mission({ data } = {}) {
    return (
        <div id="about">
           <section className="relative">
             
                <div 
                    className="absolute top-0 -right-96 lg:w-[800px] sm:w-[200px] h-[800px]  z-0 bg-[#F66666B5] blur-[200px] rounded-full dark:bg-[#C50101B5]"
    
                ></div>
                
                <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
                    <div className="py-16 lg:py-24">
                       
                        <div className="inline-block text-black dark:text-[#FFF4F4] font-inter-medium px-[44px] py-[11px] border border-[#00000042] dark:border-[#FFFFFF42] rounded-[21px] text-[34px] bg-[#0505050D]  backdrop-blur-[58.2px] dark:bg-[#FFFFFF0D]">
                            Our Mission
                        </div>
                        
                       
                        <h2 className="font-inter-bold text-black dark:text-[#FFF4F4] pt-[115px] pb-[75px] xl:text-[86px] lg:text-[70px] md:text-[60px] text-[45px] tracking-[-0.06em] ">
                            Built for UAE Businesses
                            <br />
                            Backed by Fintech Experts.
                        </h2>
                    <p className="font-inter-regular text-grey-3 dark:text-[#A5A5A5] max-w-[1008px] lg:text-[24px] md:text-[20px] text-[18px]">
                            Emirates Tax was founded to eliminate the chaos of manual tax reporting. Our team combines 
                            finance, AI, and compliance expertise to deliver a powerful platform that simplifies every step 
                            from uploading documents to generating final reports.
                        </p>
                        
                     
                        <div className="flex items-center w-full mt-[86px]">
                            <a href={data?.Button?.URL || "/"}>
                                <button className="font-medium text-white bg-gradient-to-r from-[#BA0000] to-[#F00000] hover:bg-indigo transition-all duration-200 md:text-[32px] sm:text-[24px] text-[16px] text-center capitalize rounded-[40px] md:px-[46px] md:py-[16px] sm:py-[12px] sm:px-[50px] py-[16px] px-[62px]" data-aos="fade-up" data-aos-delay="500">
                                    {data?.Button?.Title || "Learn more"}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
           </section>
        </div>
    )
}