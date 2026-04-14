export const siteConfig = {
  companyName: "Omega Media Communications Ltd",
  shortName: "Omega Media",
  tagline: "Premium media, events, training & content systems",
  website: "https://www.omegamediacommunications.com",
  address: "Omega Studio House, 7, 42nd Avenue, Akure, Ondo State, Nigeria",
  email: import.meta.env.VITE_CONTACT_EMAIL || "hello@omegamediacommunications.com",
  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY || "+234 XXX XXX XXXX",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "2340000000000",
  formEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || "",
  social: {
    instagram: import.meta.env.VITE_INSTAGRAM_URL || "#",
    facebook: import.meta.env.VITE_FACEBOOK_URL || "#",
  },
};

export function makeWhatsAppLink(message = "Hello Omega Media Communications, I would like to make an enquiry.") {
  const number = String(siteConfig.whatsappNumber).replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
