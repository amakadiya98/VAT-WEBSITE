import { generateUrl } from "../utils/urls";

function ContactForm({ data } = {}) {
  return (
    <div
      id="contact"
      className="relative flex items-center justify-center pt-[145px] lg:pt-[260px] pb-[100px] lg:pb-[273px]"
    >
      <div className="relative z-10 w-full mx-auto mb-12">
        <div className="inline-block mb-6 w-full text-center">
          <span className="inline-block text-black font-inter-medium px-[15px] sm:px-[44px] py-[6px] sm:py-[11px] border border-[#00000042] dark:border-[#FFFFFF42] rounded-[12px] sm:rounded-[21px] text-[16px] sm:text-[34px] bg-[#0505050D] backdrop-blur-[58.2px] dark:text-[#FFF4F4] dark:border-[#FFFFFF42] dark:bg-[#FFFFFF0D]">
            {data?.TitleSM || "Contact us"}
          </span>
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 text-center mt-5 max-w-[1409px] w-[90%] mx-auto border-[1px] border-[#FFFFFF42] bg-[linear-gradient(180deg,_#000000_22.12%,_rgba(213,14,14,0.91)_100%)] dark:bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(253,24,24,0.432)_100%)]"
         
        >
          <h1 className="text-transparent bg-clip-text bg-[linear-gradient(90deg,_#FFFFFF_0%,_#F2E5E5_100%)] lg:text-[86px] lg:leading-[100px] lg:tracking-[-5px] font-bold font-inter-bold mb-6 leading-normal max-w-[1315px] mx-auto">
            Ready to Automate Your Tax & P&L Reporting?
          </h1>

          <p className="text-lg text-off-white mb-8 max-w-2xl mx-auto leading-relaxed">
            {data?.Description ||
              "Start saving time, money, and stress. Get started with Emirates Tax in minutes."}
          </p>

          <div className="text-center">
            <a href={data?.Button?.URL || "/"}>
                                        <button className="font-medium text-white bg-gradient-to-r from-[#BA0000] to-[#F00000]  transition-all duration-200 md:text-[32px] sm:text-[24px] text-[14px] sm:text-[16px] text-center capitalize rounded-[15px] sm:rounded-[40px] md:px-[46px] md:py-[16px] sm:py-[12px] sm:px-[50px] py-[7px] px-[25px] sm:px-[35px]  hover:shadow-2xl hover:shadow-red-500/60 hover:brightness-110" >
                                            {data?.Button?.Title || "Book a Demo"}
                                        </button>
                                    </a>

            <div className="mt-4">
              <a
                href="#"
                className="text-[#DDBBBB] hover:text-white underline text-[20px] transition-colors font-inter-regular duration-300"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
