import React, { useEffect, useState } from "react";
import ContactForm from "../compontents/contactForm";
import BannerSection from "../compontents/bannerSection";
import Mission from "../compontents/mission";
import Features from "../compontents/features";
import Testimonial from "../compontents/testimonials";
import api from "../utils/api";
import { landingPageURL, landingPageURLArabic } from "../utils/urls";
import TrustedBySection from "../compontents/trustedBySection";
import { useDirection } from "../context/DirectionContext";

export default function HomePage() {
    const { dir } = useDirection();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const data = await api.get(landingPageURL)
                const arabicData = await api.get(landingPageURLArabic);
                const newData = { en: data?.data?.data, ar: arabicData?.data?.data }
                setData(newData);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [dir])

    const { Hero, Clients, About, Projects, Testimonials, Contact } = data[dir === 'rtl' ? 'ar' : 'en'] || {};

    return (
        <div className="bg-[#FBFCFA] dark:bg-[#000000]">
            <BannerSection data={Hero} />
            <div className="overflow-hidden">
                <div>
                    <TrustedBySection data={Clients} />
                    <Mission data={About} />
                    <Features data={Projects} />
                    <Testimonial data={Testimonials} />
                    <ContactForm data={Contact} />
                </div>
            </div>


        </div>
    )
}