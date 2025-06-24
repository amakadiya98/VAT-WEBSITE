export default function Mission({ data } = {}) {
    return (
        <div id="about">
           <section className="relative">
             
                <div 
                    className="absolute top-0 -right-96 lg:w-[800px] sm:w-[200px] h-[800px]  z-0 bg-[#F66666B5] blur-[200px] rounded-full dark:bg-[#C50101B5]"
    
                ></div>
                
                <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
                    <div>
                       
                        <div className="inline-block text-black dark:text-[#FFF4F4] font-inter-medium px-[15px] sm:px-[44px] py-[6px] sm:py-[11px] border border-[#00000042] dark:border-[#FFFFFF42] rounded-[12px] sm:rounded-[21px] text-[16px] sm:text-[34px] bg-[#0505050D]  backdrop-blur-[58.2px] dark:bg-[#FFFFFF0D]">
                            Our Mission
                        </div>
                        
                       
                        <h2 className="text-black dark:text-[#FFF4F4] pt-[30px] sm:pt-[115px] pb-[25px] sm:pb-[75px] font-inter-bold xl:text-[86px] lg:text-[70px] md:text-[60px] text-[30px] tracking-[-0.06em] ">
                            Built for UAE Businesses
                            <br />
                            Backed by Fintech Experts.
                        </h2>
                    <p className="font-inter-regular md:text-[24px] sm:text-[18px] text-[12px] text-grey-3 dark:text-[#A5A5A5] max-w-[1008px]">
                            Emirates Tax was founded to eliminate the chaos of manual tax reporting. Our team combines 
                            finance, AI, and compliance expertise to deliver a powerful platform that simplifies every step 
                            from uploading documents to generating final reports.
                        </p>
                        
                     
                        <div className="flex items-center w-full mt-[40px] sm:mt-[86px]">
                            <a href={data?.Button?.URL || "/"}>
                                <button className="font-medium text-white bg-gradient-to-r from-[#BA0000] to-[#F00000] hover:bg-indigo transition-all duration-200 md:text-[32px] sm:text-[24px] text-[16px] text-center capitalize  rounded-[15px] sm:rounded-[40px] md:px-[46px] md:py-[16px] sm:py-[12px] sm:px-[50px] py-[7px] px-[25px] sm:px-[35px] hover:shadow-2xl hover:shadow-red-500/60 hover:brightness-110">
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