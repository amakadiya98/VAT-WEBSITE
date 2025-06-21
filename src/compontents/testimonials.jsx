import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { generateUrl } from "../utils/urls";
import { useDirection } from "../context/DirectionContext";
export default function Testimonial({ data } = {}) {
    const { dir } = useDirection();
    const isRTL = dir === 'rtl';
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        rtl: isRTL,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const defaultTestimonials = [
        {
            id: 1,
            img: "/images/rahul.png",
            name: "Ahmed",
            role: "consultant",
            review:
                "We cut our tax processing time from 5 days to 30 minutes. Total game-changer!",
        },
        {
            id: 2,
            img: "/images/nikita.png",
            name: "Noura",
            role: "Agency Owner",
            review:
                "The easiest tax platform I’ve ever used. The branded reports are client-ready.",
        },
        {
            id: 3,
            img: "/images/ali.png",
            name: "Yasir",
            role: "Small Business Owner",
            review:
                "Emirates Tax saved us thousands in accounting fees. It's efficient and reliable.",
        },
        {
            id: 4,
            img: "/images/ali.png",
            name: "Rashid",
            role: "Freelancer",
            review:
                "Emirates Tax saved us thousands in accounting fees. It's efficient and reliable.",
        },

    ];
    const testimonial = data?.TestimonialsCard?.length ? data?.TestimonialsCard?.map(item => ({
        id: item.id,
        img: generateUrl(item?.Image?.url),
        name: item.Name,
        role: item.Position,
        review: item.Review
    })) : defaultTestimonials;
    return (
        <div id="testimonials">
            <div className="w-[84%] mx-auto  mt-[89px] mb-[120px]" />
            <div className={`relative lg:pt-[480px] md:pt-[300px] sm:pt-[200px] pt-0 text-black`}>
                <div className="container">
                    <div className="flex justify-center">
                <div className="inline-block text-black font-inter-medium px-[44px] py-[11px] border border-[#00000042] rounded-[21px] text-[34px] bg-[#0505050D] backdrop-blur-[58.2px] z-30 dark:text-[#FFF4F4] dark:border-[#FFFFFF42] dark:bg-[#FFFFFF0D]">
                   Testimonials
                </div>
            </div>
                    <h2 className="font-inter-bold text-black dark:text-white pt-[85px] pb-[35px] xl:text-[86px] lg:text-[70px] md:text-[60px] text-[45px] tracking-[-0.06em] leading-[93px] text-center text-start testimonial-circle-design relative sm:text-center  m-auto   font-bold  tracking-[-3%]  z-10 dark:text-[#F2E5E5]  before:bg-[#FAA9A9] dark:before:bg-[#C5010199] before:absolute sm:before:content-[''] before:content-none before:-top-48 before:rounded-full before:w-[600px] before:h-[600px] before:blur-[200px] before:z-[-100]">
                        {data?.Title || `What Our Users Are Saying?`}
                    </h2>
                    <p className="font-inter-regular text-[24px] tracking-[-0.03em] text-center text-grey-4 z-30">
                Review Our Clients Testimonials
            </p>
                </div>
               <div
  className="max-w-[1920px] w-full mt-[90px] md:mt-[180px] lg:mt-[180px] relative z-10 mb-48 mx-auto 
             before:content-[''] before:absolute before:-top-20 before:left-0 before:h-[350px] before:md:w-[150px]  before:w-[60px] before:bg-[#FFFFFF] before:rounded before:blur-[55px] before:z-[10] before:dark:bg-[#020202]
             after:content-[''] after:absolute after:-top-20 after:right-0 after:h-[350px] after:md:w-[150px] after:w-[60px] after:bg-[#FFFFFF] after:rounded after:blur-[55px] after:z-[10] after:dark:bg-[#020202]"
>
  <Slider {...settings}>
    {testimonial.map((item) => (
      <div key={item.id} className="px-[39px]">
    <div className="border border-[#00000026] dark:border-[#FFFFFF54]  relative text-white pt-[30px] pl-[30px] pr-[60px] pb-[50px] h-full bg-[#000000B0] backdrop-blur-[42px] dark:bg-transparent rounded-[18px]">
          <div className="d-flex justify-between mb-[47px]">
            <div>
              <h3 className="font-inter-medium text-[32px] text-white tracking-[-0.06em]">{item.name}</h3>
              <p className="font-inter-regular text-[18px] text-[#F2E5E5] tracking-[-0.06em]">{item.role}</p>
            </div>
            <img
              src={item.img}
              alt={item.name}
              className="w-[48px] h-[48px] rounded-full absolute top-6 right-6 object-cover border border-white/10"
            />
          </div>
          <div className="text-left">
            <p className="font-inter-regular text-[18px] text-[#F2E5E5] tracking-[-0.06em]">
              “{item?.review || 'Default review text if missing...'}”
            </p>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>



            </div>
        </div>
    )
}
