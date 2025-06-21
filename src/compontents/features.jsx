import { generateUrl } from "../utils/urls";
export default function Features({ data } = {}) {
    return (
        <>
        <div className="w-[90%] max-w-[1500px] mx-auto pt-[100px] lg:pt-[507px]">
            <div className="flex justify-center">
                <div className="inline-block text-black font-inter-medium px-[44px] py-[11px] border border-[#00000042] rounded-[21px] text-[34px] bg-[#0505050D] backdrop-blur-[58.2px] dark:text-[#FFF4F4] dark:border-[#FFFFFF42] dark:bg-[#FFFFFF0D]">
                    Features
                </div>
            </div>
            <h2 className="font-inter-bold text-black dark:text-white pt-[115px] pb-[30px] xl:text-[86px] lg:text-[70px] md:text-[60px] text-[45px] tracking-[-0.06em] leading-[93px] text-center">
                All-in-One Tax & P&L Solution
            </h2>
            <p className="font-inter-regular text-[24px] tracking-[-0.03em] text-center text-grey-1">
                Backed by Fintech Experts
            </p>
        
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-20 px-[45px] gap-[56px]">
              
                <div className="bg-black rounded-[16px] border-[3px] border-[#FFFFFF54] pl-[32px] pt-[57px] pb-[55px]">
                    <div>
                        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(251,36,36,0.3)_53.99%)] pt-[55px] pb-[46px] pl-[55px] rounded-tl-[18px] rounded-bl-[18px] border border-white/30">
                            <p className="font-inter-semibold text-[36px] tracking-[-0.03em] text-center text-[#DDCDCD] mb-[41px]">
                                Upload anything
                            </p>
                            <div className="flex items-center font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[25px] rounded-tl-[18px] rounded-bl-[18px]">
                                <img src="/images/dropdown.svg" alt="dropdown" className="mr-3" />
                                <div>Select a Document</div>
                            </div>
                            <div className="border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] pt-[25px] pl-[15px]  rounded-tl-[18px] rounded-bl-[18px] pb-[10px]">
                            <div className="font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[17px] rounded-tl-[18px] rounded-bl-[18px]">
                                Arotine Tax Report
                            </div>
                            <div className="font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[17px] rounded-tl-[18px] rounded-bl-[18px]">
                                Rimar Tax Report
                            </div>
                            <div className="font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[17px] rounded-tl-[18px] rounded-bl-[18px]">
                                Sanfia Tax Report
                            </div></div>
                        </div>
                        <div className="font-inter-bold text-[50px] tracking-[-0.06em] text-white pt-[55px] pb-[55px]">
                            Smart Document Handling
                        </div>
                        <div className="font-inter-medium text-off-white text-[24px] mb-[45px]">
                            Upload any format (PDF, Excel, Word, Images) with secure, encrypted processing and smart auto-categorization of income & expenses.
                        </div><div className="flex items-center w-full mt-[86px]">
                            <a href={data?.Button?.URL || "/"}>
                                <button className="font-medium text-white bg-gradient-to-r from-[#BA0000] to-[#F00000] hover:bg-indigo transition-all duration-200 md:text-[32px] sm:text-[24px] text-[16px] text-center capitalize rounded-[40px] md:px-[46px] md:py-[16px] sm:py-[12px] sm:px-[50px] py-[16px] px-[62px]" data-aos="fade-up" data-aos-delay="500">
                                    {data?.Button?.Title || "Learn more"}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-black rounded-[16px] border-[3px] border-[#FFFFFF54] pl-[32px] pt-[57px] pb-[55px] pr-[26px]">
                    <div>
                        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(251,36,36,0.3)_53.99%)] pt-[58px] pl-[23px] rounded-[18px] border border-white/30 pb-[113px] ">
                            <p className="font-inter-semibold text-[36px] tracking-[-0.03em] text-center text-[#DDCDCD] mb-[83px]">
                                Reports
                            </p>
                              <div className="border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] pt-[25px] pl-[15px]  rounded-tl-[18px] rounded-bl-[18px] pb-[10px]">
                            <div className="font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[17px] rounded-tl-[18px] rounded-bl-[18px] flex justify-between">
                                Arotine Tax Report
                                <img src="/images/material-symbols-light_export-notes.svg" alt="dropdown" className="mr-3" />
                            </div>
                            <div className="font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[17px] rounded-tl-[18px] rounded-bl-[18px] flex justify-between">
                                Ramier Tax Report
                                <img src="/images/material-symbols-light_export-notes.svg" alt="dropdown" className="mr-3" />
                            </div>
                            <div className="font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[17px] rounded-tl-[18px] rounded-bl-[18px] flex justify-between">
                                Arotine Tax Report
                                <img src="/images/material-symbols-light_export-notes.svg" alt="dropdown" className="mr-3" />
                            </div></div>
                        </div>
                        <div className="font-inter-bold text-[50px] tracking-[-0.06em] text-white pt-[55px] pb-[55px]">
                            Powerful Reporting & Exports
                        </div>
                        <div className="font-inter-medium text-off-white text-[24px] mb-[45px]">
                            Generate instant Tax & P&L reports, export in multiple formats, and deliver branded reports with your logo.                       </div>
                        <div className="flex items-center w-full mt-[86px]">
                            <a href={data?.Button?.URL || "/"}>
                                <button className="font-medium text-white bg-gradient-to-r from-[#BA0000] to-[#F00000] hover:bg-indigo transition-all duration-200 md:text-[32px] sm:text-[24px] text-[16px] text-center capitalize rounded-[40px] md:px-[46px] md:py-[16px] sm:py-[12px] sm:px-[50px] py-[16px] px-[62px]" data-aos="fade-up" data-aos-delay="500">
                                    {data?.Button?.Title || "Learn more"}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-black rounded-[16px] border-[3px] border-[#FFFFFF54] pl-[32px] pt-[57px] pb-[55px]">
                    <div>
                        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(251,36,36,0.3)_53.99%)] pt-[78px] pb-[33px] pl-[55px] rounded-tl-[18px] rounded-bl-[18px] border border-white/30">
                            <p className="font-inter-semibold text-[36px] tracking-[-0.03em] text-center text-[#DDCDCD] mb-[41px]">
                                Real-time collaboration
                            </p>
                           
                            <div className="flex items-center font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[25px] rounded-tl-[18px] rounded-bl-[18px] pb-[10px]">
                                <div>Teams</div>
                            </div>
                             <div className="border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] pt-[25px] pl-[15px]  rounded-tl-[18px] rounded-bl-[18px]">
                            <div className="font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[17px] rounded-tl-[18px] rounded-bl-[18px]">
                                Allen Team 
                            </div>
                            <div className="font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[17px] rounded-tl-[18px] rounded-bl-[18px]">
                               Zakir Team
                            </div>
                            <div className="font-inter-medium border border-[#FFFFFF54] bg-[#FFFFFF1A] backdrop-blur-[42px] xl:text-[32px] lg:text-[20px] text-[32px] text-[#DDCDCD] py-[17px] pl-[33px] mb-[17px] rounded-tl-[18px] rounded-bl-[18px]">
                               Jason Team
                            </div>
                            </div>
                        </div>
                        <div className="font-inter-bold text-[50px] tracking-[-0.06em] text-white pt-[55px] pb-[55px]">
                            AI Automation & Team Collaboration
                        </div>
                        <div className="font-inter-medium text-off-white text-[24px] mb-[45px]">
                            Get AI insights with real-time alerts, manage team access, and collaborate seamlessly across users.
                        </div>
                        <div className="flex items-center w-full mt-[86px]">
                            <a href={data?.Button?.URL || "/"}>
                                <button className="font-medium text-white bg-gradient-to-r from-[#BA0000] to-[#F00000] hover:bg-indigo transition-all duration-200 md:text-[32px] sm:text-[24px] text-[16px] text-center capitalize rounded-[40px] md:px-[46px] md:py-[16px] sm:py-[12px] sm:px-[50px] py-[16px] px-[62px]" data-aos="fade-up" data-aos-delay="500">
                                    {data?.Button?.Title || "Learn more"}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}