// footer data

import { Location, MailIcon, PhoneIcon } from "@/icons/icons";

export interface IFooter {
  id: number;
  title: string;
  links: {
    id: number;
    target?: string;
    icon?: React.ReactNode;
    name?: string;
    href?: string;
    links?: {
      name: string;
      href: string;
    }[];
  }[];
}
export const footerLinks: IFooter[] = [
  {
    id: 1,
    title: "Reach Us At",
    links: [
      {
        id: 1,
        target: "_blank",
        icon: <MailIcon />,
        links: [
          {
            name: "info@whiteridgehotels.com",
            href: "mailto:info@whiteridgehotels.com",
          },
          {
            name: "marketing@whiteridgehotels.com",
            href: "mailto:marketing@whiteridgehotel.com",
          },
        ],
      },
      {
        id: 2,
        target: "_blank",
        icon: <PhoneIcon />,
        links: [
          {
            name: "+91 98160 91658",
            href: "tel:+91 98160 91658",
          },
          {
            name: "+91 98160 91659",
            href: "tel:+91 98160 91659",
          },
          {
            name: "+91 98059 64704",
            href: "tel:+91 98059 64704",
          },
        ],
      },
      {
        id: 3,
        links: [
          {
            name: "VPO Sidhpur, Tehsil Dharamshala, Distt. Kangra, Himachal Pradesh 176057. India.",
            href: "https://maps.app.goo.gl/feA7Y94pKnmimpeG7",
          },
        ],
        target: "_blank",
        icon: <Location />,
      },
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    links: [
      { id: 1, name: "Rooms & Suites", href: "/rooms/" },
      { id: 2, name: "Amenities", href: "/#amenities" },
      { id: 3, name: "Activities Nearby", href: "/#nearby" },
      { id: 4, name: "contact us", href: "/contact-us/" },
    ],
  },
  {
    id: 3,
    title: "Connect with us",
    links: [
      {
        id: 1,
        name: "Instagram",
        href: "https://www.instagram.com/whiteridgehotel.dharamshala",
        target: "_blank",
      },
      {
        id: 2,
        name: "Facebook",
        href: "https://www.facebook.com/whiteridgehotel",
        target: "_blank",
      },
      // { id: 3, name: "Twitter", href: "/", target: "_blank" },
      // { id: 4, name: "Pinterest", href: "/", target: "_blank" },
    ],
  },
];

export const footerLink2 = [
  { id: 1, name: "Privacy Policy", href: "/privacy-policy/" },
  // { id: 2, name: "Terms & Conditions", href: "/terms-and-conditions/" },
  {
    id: 2,
    name: "Cancellation & Refund Policy",
    href: "/cancellation-&-refund-policy/",
  },
];
