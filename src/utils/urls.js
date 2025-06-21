export const baseURL = 'http://localhost:1337'

export const landingPageURL = `/api/landing-page?populate[Hero][populate]=*&populate[Clients][populate][ClientLogo][populate][Image][fields]=*&populate[About][populate]=*&populate[Projects][populate][Card1][populate][Icon][fields]=*&populate[Projects][populate][Card2][populate][Icon][fields]=*&populate[Projects][populate][Card3][populate][Icon][fields]=*&populate[Projects][populate][Button]=*&populate[Testimonials][populate][TestimonialsCard][populate][Image][fields]=*&populate[Contact][populate][Information][populate][Icon][fields]=*&populate[Contact][populate][Socials][populate][Icon][fields]=*`

export const landingPageURLArabic = `/api/landing-page?populate[Hero][populate]=*&populate[Clients][populate][ClientLogo][populate][Image][fields]=*&populate[About][populate]=*&populate[Projects][populate][Card1][populate][Icon][fields]=*&populate[Projects][populate][Card2][populate][Icon][fields]=*&populate[Projects][populate][Card3][populate][Icon][fields]=*&populate[Projects][populate][Button]=*&populate[Testimonials][populate][TestimonialsCard][populate][Image][fields]=*&populate[Contact][populate][Information][populate][Icon][fields]=*&populate[Contact][populate][Socials][populate][Icon][fields]=*&locale=ar`;

export const generalPageURL = `/api/general?populate[Logo_Light][fields]=*&populate[Logo_Dark][fields]=*&populate[Menus][populate]=*&populate=localizations`;

export const generalPageURLArabic = `/api/general?populate[Logo_Light][fields]=*&populate[Logo_Dark][fields]=*&populate[Menus][populate]=*&locale=ar`;


export const generateUrl = (url = "") => {
    return `${baseURL}${url}`
} 