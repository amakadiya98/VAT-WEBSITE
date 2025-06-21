import { generateUrl } from "../utils/urls";

function ContactForm({ data } = {}) {
  return (
    <div
      id="contact"
      className="relative flex items-center justify-center pt-[0px] lg:pt-[438px] pb-[100px] lg:pb-[273px]"
    >
      <div className="relative z-10 w-full mx-auto mb-12">
        <div className="inline-block mb-6 w-full text-center">
          <span className="inline-block text-black font-inter-medium px-[44px] py-[11px] border border-[#00000042] rounded-[21px] text-[34px] bg-[#0505050D] backdrop-blur-[58.2px] dark:text-[#FFF4F4] dark:border-[#FFFFFF42] dark:bg-[#FFFFFF0D]">
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
            <button
              className="text-white text-lg font-inter-medium lg:text-[30px] transition-all duration-300 transform hover:scale-105 shadow-lg mb-4 max-w-[289px] w-[90%] max-h-[72px] lg:h-[70px] mx-auto"
              style={{
                background: "linear-gradient(90deg, #B40001 0%, #FE0000 100%)",
                borderRadius: "40px",
                padding: "9px 23px",
                gap: "10px",
              }}
            >
              Book A Demo
            </button>

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
