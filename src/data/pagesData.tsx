import {
  BusIcon,
  PlainIcon,
  TrainIcon,
  MailIcon,
  PhoneIcon,
  Location,
} from "../icons/icons";
import { contactImages } from "./links";
export const homePageData = {
  bannerData: {
    title: "Timeless • Serene • Tranquil",
    description:
      "Where Comfort Meets Culture, and Every Stay is a Memorable Experience.",
    images: ["/images/bn.jpg"],
  },
  galleryData: {
    title: "Gallery",
    description: "Immerse in our breathtaking surroundings",
    images: [
      "/images/gallery1.jpg",
      "/images/gallery2.jpg",
      "/images/gallery3.jpg",
      "/images/gallery4.jpg",
    ],
  },

  roomsData: {
    title: "ACCOMMODATION",
    description: "Peaceful, Comfort, and Scenic Views",
    subDescription:
      "Our rooms are designed for comfort and relaxation, offering a variety of categories to suit your needs. With options ranging from cozy single rooms to spacious suites, we ensure a restful stay. Each room is thoughtfully designed with modern amenities and breathtaking views of Dharamshala’s scenic beauty, making it a perfect retreat for all guests.",
    images: [
      {
        src: "/images/valley.jpg",
        alt: "Deluxe Premium Valley View Room",
      },
      {
        src: "/images/mount.jpg",
        alt: "Deluxe Premium Mount View Room",
      },
      {
        src: "/images/suite.jpg",
        alt: "Executive Suite Room",
      },
      {
        src: "/images/standard.jpg",
        alt: "Standard Room",
      },
    ],
  },
  amenitiesData: {
    title: "Amenities",
    description: "Thoughtful touches, endless delight",
    items: [
      {
        icon: "/parking.png",
        title: "Free Parking",
        description:
          "Enjoy hassle-free parking with ample space, so you can focus on your time with us.",
        src: "/images/amenities/1.jpg",
        color: "#FAE3AF",
      },
      {
        icon: "/lawn.png",
        title: "Lavish Lawn",
        description:
          "Experience serene luxury on our lavishly manicured lawn, the perfect setting for unforgettable moments.",
        src: "/images/amenities/2.jpg",
        color: "#FAE3AF",
      },
      // {
      //   icon: "/Wi-Fi.png",
      //   title: "Free Wi-Fi",
      //   description:
      //     "Stay connected throughout your stay with our fast and reliable complimentary Wi-Fi service.",
      //   src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/medium.webp",
      //   color: "#D8D6D7",
      // },
      {
        icon: "/restaurant.png",
        title: "Multi-Cuisine Restaurant",
        description:
          "Indulge in a diverse menu offering delicious dishes from around the world in our restaurant.",
        src: "/images/amenities/3.jpg",
        color: "#E7CBCE",
      },
      {
        icon: "/pool.png",
        title: "Mini Swimming Pool",
        description:
          " Take a refreshing dip in our mini swimming pool, perfect for a relaxing break.",
        src: "/images/gallery1.jpg",
        color: "#CE905F",
      },
      {
        icon: "/bar.png",
        title: "Bar Area",
        description:
          "Sip on your favorite cocktails and unwind in our vibrant bar area, designed for relaxation.",
        src: "/images/amenities/4.jpg",
        color: "#E0E7E9",
      },
      {
        icon: "/hall.png",
        title: "Multipurpose Hall",
        description:
          "Host your events with ease in our versatile multipurpose hall, perfect for any occasion.",
        src: "/images/amenities/5.jpg",
        color: "#E7CBCE",
      },
      {
        icon: "/roof.png",
        title: "Rooftop Lounge",
        description:
          "Experience breathtaking views and cool breezes while enjoying your favorite drinks at our rooftop lounge.",
        src: "/images/amenities/6.jpg",
        color: "#B9BDA7",
      },
    ],
  },
  nearbyattractions: {
    title: "nearby attractions",
    description: "Explore Nearby Natural Wonders",

    images: [
      {
        src: "/images/nearby/1.jpg",
        alt: "Kangra Valley",
        des: "Kangra Valley",
        description:
          "Nestled in the foothills of the majestic Himalayas, Kangra is a serene escape, offering picturesque landscapes, rich history, and a tranquil atmosphere that captures the heart of every traveler.",
      },
      {
        src: "/images/nearby/2.jpg",
        alt: "Shri Dalai Lama Temple",
        des: "Shri Dalai Lama Temple",
        description:
          "A peaceful haven for reflection and spirituality, the Shri Dalai Lama Temple offers visitors a glimpse into Tibetan culture and Buddhism, with stunning views of Dharamshala’s natural beauty.",
      },
      {
        src: "/images/nearby/3.jpg",
        alt: "Triund Hill",
        des: "Triund Hill",
        description:
          "Known for its breathtaking vistas, Triund Hill is a paradise for trekkers and nature lovers, offering panoramic views of the Dhauladhar range and a serene atmosphere that calms the soul.",
      },
      {
        src: "/images/nearby/4.jpg",
        alt: "Norbulingka Temple",
        des: "Norbulingka Temple",
        description:
          "A gem of Tibetan architecture, the Norbulingka Temple is a peaceful sanctuary where vibrant gardens, intricate art, and spiritual tranquility create a serene escape for those seeking reflection.",
      },
      {
        src: "/images/nearby/5.jpg",
        alt: "Dal Lake",
        des: "Dal Lake",
        description:
          "Surrounded by lush greenery and stunning Himalayan peaks, Dal Lake is a serene and picturesque spot, offering a peaceful retreat with boat rides and a tranquil atmosphere perfect for relaxation.",
      },
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl21.webp",
        alt: "Cricket Stadium, Dharamshala",
        des: "Cricket Stadium, Dharamshala",
        description:
          "The scenic Dharamshala Cricket Stadium, known for its breathtaking Himalayan backdrop, is a must-visit attraction located nearby. It offers a unique blend of sports and natural beauty, making it a favorite spot for cricket fans and tourists alike.",
      },
    ],
  },
  DoAtHotel: {
    title: "ACTIVITIES",
    description: "Discover Thrilling Activities for Every Explorer",
    items: [
      {
        title: "Rock Climbing",
        description:
          "Conquer the rugged terrains surrounding Dharamshala with our expert-led rock climbing adventures. A thrilling experience that offers both a physical challenge and stunning panoramic views of the mountains.",
        images: [
          "/images/activities/trekking.jpg",
          "/images/activities/trekking2.jpg",
          "/images/activities/trekking3.jpg",
          "/images/activities/trekking4.jpg",
        ],
      },
      {
        title: "Paragliding",
        description:
          "Soar above the lush valleys of Dharamshala for an exhilarating paragliding experience. Whether you're a first-timer or an experienced flier, this adventure offers a unique bird's-eye view of the majestic Himalayas.",
        images: [
          "/images/activities/para.jpg",
          "/images/activities/para2.jpg",
          "/images/activities/para3.jpg",
          "/images/activities/para4.jpg",
        ],
      },
      {
        title: "Camping",
        description:
          "Reconnect with nature in the serene environment of Dharamshala with our curated camping experiences. Enjoy cozy tents, a warm campfire, and the peaceful sounds of the wilderness under a starlit sky.",
        images: [
          "/images/activities/camping.jpg",
          "/images/activities/camping2.jpg",
          "/images/activities/camping3.jpg",
          "/images/activities/camping4.jpg",
        ],
      },
      {
        title: "River Crossing",
        description:
          "Push your limits with an exciting river crossing adventure. Perfect for thrill-seekers, this activity offers an adrenaline rush while enjoying the natural beauty of the surroundings.",
        images: [
          "/images/activities/river.jpg",
          "/images/activities/river2.jpg",
          "/images/activities/river3.jpg",
        ],
      },
      {
        title: "Nature Walks",
        description:
          "Embark on a peaceful nature walk and explore the rich biodiversity of Dharamshala's forests. A guided nature walk gives you the chance to connect with the landscape while spotting local wildlife and flora.",
        images: [
          "/images/activities/walk.jpg",
          "/images/activities/walk2.jpg",
          "/images/activities/walk3.jpg",
          "/images/activities/walk4.jpg",
        ],
      },
      // {
      //   title: "Cricket Stadium, Dharamshala",
      //   description:
      //     "The scenic Dharamshala Cricket Stadium, known for its breathtaking Himalayan backdrop, is a must-visit attraction located nearby. It offers a unique blend of sports and natural beauty, making it a favorite spot for cricket fans and tourists alike.",
      //   images: [
      //     "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl21.webp",
      //     "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl22.webp",
      //   ],
      // },
    ],
  },
  connectivity: {
    title: "At the Heart of Connectivity",
    description:
      "Perfectly located for effortless exploration and unforgettable experiences",
    src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im17.webp",
    items: [
      {
        icon: <BusIcon />,
        address: "Bus Station",
        distance: "4 Kilometers",
      },
      {
        icon: <TrainIcon />,
        address: "Train Station",
        distance: "90 Kilometers",
      },
      {
        icon: <PlainIcon />,
        address: "Airport",
        distance: "12 Kilometers",
      },
    ],
  },
  guestreviews: {
    title: "TESTIMONIALS",
    description: "Appreciation From Our Guests!",
    items: [
      {
        title: "Perfect Wedding Destination",
        description: `"Dulha Baraati's" were staying here at "White Ridge" from 17th May'22 to 25th May'22 and it has been an absolute pleasure and delightful experience. Right from our stay, food, haldi event, mehandi event & baraati event - very well organized and handled extremely well! I can only say that - "One must stay" at "White Ridge". The hospitality, simplicity of the people/staff here is truly commendable. "Commitment" is what staff over here take it very seriously and guests will always be extremely happy.`,
      },
      {
        title: "Perfect stay",
        description: `Hotel with comfortable large rooms. Good views of the snow capped mountains. Attentive reception. Parking space. The only dent was the slow service in the dinning section. Rest all is good. I would recommend it for a couple of days in Dharamsala.`,
      },
      {
        title: "Value for Money",
        description: `Stayed here for 3 days, in their Premium Suite, Top Notch Facilities Neat And Tidy luxurious Rooms One of the best Hotel Available in dharamshala, Staff is amazing the manager mr.sumit stayed awake till 3.30am in the morning as we were running late and guided us so we reach comfortably to hotel , Really appreciate the care he showed`,
      },
      {
        title: "Fascinating Visit",
        description: `This was our 1st unwinding after lockdown we drove from Western ghats to the Himalayas via the Aravalli range. We ended up the journey at Dharmshala in these amazing hotels. We stayed 2 nights and 3 days with unbelievable ambiance. Superb reception and food. they also arrange skydiving for us.`,
      },
      {
        title: "Superb stay",
        description: `The hotel is really nice and staff is courteous. Room is neat, clean and spacious with lots of amenities. This was my best stay in my whole trip to himachal. The best thing which I like about the property that it is easy to reach. It is located just 3 km away from Dharamshala. I will definitely recommend about this property to my known people.`,
      },
      {
        title: "Amazing Ambience",
        description: `All the facilities at this hotel are really good.Rooms are specious and clean.. Ambience and Aura is nice ...Food is also good in taste... Whenever i will visit Dharamshala again would like to stay here again...And the most important thing the view is really awesome from Hotel...Market is also nearby...`,
      },
    ],
  },
  faq: {
    title: "FAQ",
    description: "Quick answers to common queries",
    item: [
      {
        id: 1,
        title: "What are the bookings options for Whiteridge Hotel?",
        content: `Booking can be secured directly through the website or calling property directly`,
      },
      {
        id: 2,
        title: "What is the check-in and check-out time?",
        content: `CHECK IN TIME : 1 PM & CHECK OUT TIME : 11 AM .`,
      },
      {
        id: 3,
        title: "Are retiring rooms available for drivers?",
        content: `No, retiring rooms are not available.`,
      },
      {
        id: 4,
        title: "Is parking available?",
        content: `Yes, Parking is available.`,
      },
    ],
  },
};

export const aboutPageData = {
  bannerData: {
    title: "Experience Unmatched Serenity",
    description:
      "Nestled in the tranquil hills of Dharamshala, White Ridge offers a perfect blend of relaxation and adventure.",
    src: "/images/about/bn.jpg",
    videoSrc:
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im19.webp",
  },
  section2: {
    title: "Welcome Abode: About White Ridge",
    description: [
      "Welcome to our abode in Dharamshala, Himachal Pradesh, where authentic experiences blend seamlessly with modern comfort.",
      " Established in 2016, we’ve become a trusted destination for travellers, offering a mix of serene surroundings, top-notch hospitality, with a warm local touch.",
      "Whether you're here for a peaceful getaway, a business trip, or to dive into the rich culture of this spiritual town, we’ve created a place where you can feel right at home.",
      "Our property is a blend of comfort, warmth, and adventure. We’ve designed it to be a peaceful sanctuary where you can relax, but also a place where you can step out and explore the wonders of Dharamshala",
    ],
    src: "/images/about/image1.jpg",
  },
};

// const roomCardNew = roomImages + "/card/Img";
export const roomsPageData = {
  bannerData: {
    title: "Stay in the Heart of Dharamshala",
    description:
      "We're proud of the relationships we've built over the years and the trust our guests have in us. Whether you’re here for a family vacation, a business conference, or just passing through, we’re excited to welcome you to experience the magic of this place. It’s not just a stay; it’s a memory in the making.",
    // src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im18.webp",
  },
  roomcard: [
    {
      title: "Deluxe Premium Valley View Room",
      description:
        "Wake up to breathtaking panoramic views of the lush valleys, offering the perfect blend of comfort and peace in our spacious Deluxe Premium Valley View Room.",
      price: "₹4500/Day",
      images: [
        // {
        //   src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Valley+View/IMG_8273+copy.webp",
        //   alt: "dsdsd",
        // },
        {
          src: "/images/rooms/valley.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/valley2.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/valley3.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/valley4.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/valley5.jpg",
          alt: "dsdsd",
        },
        // {
        //   src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Valley+View/IMG_8270+copy.webp",
        //   alt: "dsdsd",
        // },

        {
          src: "/images/rooms/valley6.jpg",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "SAFE LOCKER ",
        "HOUSE KEEPING",
        "KETTLE",

        "1 DOUBLE BED ",
        "AIR CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
    {
      title: "Deluxe Premium Mount View Room",
      description:
        "Enjoy stunning views of the majestic Himalayas from the comfort of your room, where timeless tranquility meets nature in our Deluxe Premium Mount View Room.",
      price: "₹4900/Day",
      images: [
        {
          src: "/images/rooms/mount.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/mount2.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/mount3.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/mount4.jpg",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "SAFE LOCKER ",
        "HOUSE KEEPING",
        "KETTLE",

        "1 DOUBLE BED ",
        "AIR CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
    {
      title: "Executive Suite Room",
      description:
        "Indulge in the ultimate rustic vibes with our Executive Suite Room, designed for those who appreciate style, comfort, and privacy, with an elevated view of Dharamshala's natural beauty",
      price: "₹7300/Day",
      images: [
        {
          src: "/images/rooms/suite.jpg",
          alt: "dsdsd",
        },
        // {
        //   src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8310+copy.webp",
        //   alt: "dsdsd",
        // },
        {
          src: "/images/rooms/suite2.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/suite3.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/suite4.jpg",
          alt: "dsdsd",
        },
        // {
        //   src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8315+copy.webp",
        //   alt: "dsdsd",
        // },
        {
          src: "/images/rooms/suite5.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/suite6.jpg",
          alt: "dsdsd",
        },
        // {
        //   src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8315+copy.webp",
        //   alt: "dsdsd",
        // },
        {
          src: "/images/rooms/suite7.jpg",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "SAFE LOCKER ",
        "PRIVATE TERRACE",
        "KETTLE",

        "1 DOUBLE BED ",
        "AIR CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
    {
      title: "Standard Room",
      description:
        "Experience a cozy, comfortable stay in our Standard Room, where simplicity meets charm, making it the perfect base for your adventures in Dharamshala.",
      price: "₹3500/Day",
      images: [
        {
          src: "/images/rooms/standard.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/standard2.jpg",
          alt: "dsdsd",
        },
        {
          src: "/images/rooms/standard3.jpg",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "SAFE LOCKER ",
        "HOUSE KEEPING",
        "KETTLE",

        "1 DOUBLE BED ",
        "AIR CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
  ],
};

export const galleryPageData = {
  bannerData: {
    title: "A Glimpse of our Hotel",
    description:
      "Discover the beauty of White Ridge Hotel through our gallery, where every image captures the essence of comfort, nature, and unforgettable experiences.",
    // src: "/images/gallery.jpg",
  },
  galleryData: [
    {
      title: "Terrace",
      images: [
        "/images/terrace.jpg",
        "/images/terrace2.jpg",
        "/images/terrace3.jpg",
      ],
    },
    {
      title: "Reception",
      images: [
        "/images/reception.jpg",
        "/images/reception2.jpg",
        "/images/reception3.jpg",
      ],
    },
    {
      title: "Restaurant",
      images: [
        "/images/resturant.jpg",
        "/images/resturant2.jpg",
        "/images/resturant3.jpg",
      ],
    },
    {
      title: "Bar Lounge",
      images: [
        "/images/bar.jpg",
        "/images/bar2.jpg",
        "/images/bar3.jpg",
      ],
    },
  ],
};

export const contactPageData = {
  bannerData: {
    title: "Let’s Make Your Stay Extraordinary",
    description:
      "Have questions or ready to book your stay? Reach out to us, and we’ll make sure your experience at White Ridge Hotel is nothing short of amazing.",
    link: [
      {
        label: "call us",
        href: "tel:+919816091658",
      },
      {
        label: "Send a message",
        href: "https://wa.me/+919805964704?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates.",
      },
    ],
  },
  reachUsDate: {
    title: "Reach us anytime",
    description: "Fill out the form below, and we’ll get back to you shortly.",
    src: contactImages + "/img1.webp",
    items: [
      {
        icon: <Location />,
        address:
          "VPO Sidhpur, Tehsil Dharamshala,Distt. Kangra, Himachal Pradesh 176057. India.",
        title: "Address",
        src: "https://maps.app.goo.gl/s48Cyp5acJ6mziii7",
        newTab: true,
      },
      {
        icon: <PhoneIcon />,
        title: "Phone Number",
        links: [
          {
            label: "+91 98160 91658",
            href: "tel:+91 98160 91658",
          },
          {
            label: "+91 98160 91659",
            href: "tel:+91 98160 91659",
          },
          {
            label: "+91 98059 64704",
            href: "tel:+91 98059 64704",
          },
        ],
      },
      {
        icon: <MailIcon />,
        title: "Email",
        links: [
          {
            label: "info@whiteridgehotel.com",
            href: "mailto:info@whiteridgehotel.com",
          },
          {
            label: "marketing@whiteridgehotel.com",
            href: "mailto:marketing@whiteridgehotel.com",
          },
        ],
      },
    ],
  },
};

export const policyPagesData = {
  cancellationPageData: {
    description: [
      "Should your plans change, be sure to inform within the following guidelines for a refund of your deposit. A cancellation number will be given to insure proper return of the deposit. If the cancellation does not meet guidelines, the deposit will be retained.",
      "For early checkout, you are responsible for the entire reservation and will be charged as such if the remainder of the reservation cannot be re-booked. If unsure of the policy, contact the resort for clarification.",
    ],
    data: [
      {
        title: "Cancellation Policy",
        list: [
          "1 to 20 days No refund",
          "21-25 days 50% refund",
          "26-30 days 100% refund",
          "Kindly note that this quotation is valid for 2 days.",
          "PLEASE PAY 100% ADVANCE FOR CONFIRMATION OF BOOKING.",
        ],
      },
      {
        title: "REFUND POLICY",
        desc: [
          "When you cancel a booking and are entitled to a refund then we will instruct the refund right away. The processing will take between 2-4 weeks until the whole amount shows back on your credit card statement. Reasons for this are the billing cycle of your credit card company and processing time of the bank. The refund amount depends on numerous factors such as the hotel's cancellation policy, time of cancellation and processing fees. For more details see cancellation policy above.",
          "In case a reservation that you make is not confirmed, we will not charge you anything on your credit card and release the whole amount that was held on it immediately. Now after we do this, it will still take a maximum of 2-4 weeks for the bank to process this and for the money to show back on your credit card.",
        ],
      },
    ],
  },
  termsAndConditions: {
    description: [
      "Please read this brief guide to the terms and conditions of staying at White Ridge Hotel, and the terms and conditions for the usage of this internet site. Please allow up to 4 hours notice prior to your expected arrival for online bookings to be processed.",
      "In these General Terms of Business, the following words shall mean:-",
    ],
    data: [
      {
        title: "APPLICATION OF TERMS",
        desc: [
          "These terms apply to all bookings to the exclusion of all other terms and conditions except to the extent that specific terms apply for a particular booking and have been signed in writing by an Authorised Representative of the Company.",
          "Confirmation of a booking by the Client is deemed acceptance of these terms.",
          "The term Client and Guest shall be used interchangeably in the Terms of Business and reference to any one of them shall be deemed to include reference to the other.",
        ],
      },
      {
        title: "PRICES",
        desc: [
          "All published prices is room only plus GST as per current rate.",
          "The Hotel reserves the right to alter prices for any reason up to the date of booking or up to 1 weeks prior to arrival, whichever is the later.",
          "After such dates, prices may only be altered to reflect a change in the rate of GST or for any other reason outside of the control of the Hotel, in which case the changes will be notified to the Client. In the latter event, the Client may cancel the booking without cost.",
        ],
      },
      {
        title: "AVAILABILITY",
        desc: [
          "All rooms and prices offered by the Hotel are subject to availability and the discretion of the Hotel Manager.",
          "Limited numbers of suitable rooms may be allocated to individual rates, packages or promotions and, when these allocations are taken up, remaining available rooms may be offered to the Client at a higher price where the Client requires such rooms.",
        ],
      },
      {
        title: "BOOKINGS",
        desc: [
          "Bookings must be guaranteed for the first night's accommodation by a major credit or debit card, by payment of a deposit or by agreement in writing with a company, travel agent or hotel booking agency. At the discretion of the Hotel, full prepayment may be required. At least 3 working days are required to process credit and debit card payments and 5 working days to process cheque payments.",
        ],
      },
      {
        title: "ARRIVAL AND DEPARTURE",
        desc: [
          "Guestrooms are usually available from 2pm local time on the day of arrival. However, the Hotel is not in any way obliged to make bedrooms available to Clients at this time.",
          "Departure is by 11am local time. Failure to check out by 11am local time will entitle the Hotel to charge an additional fee.",
          "Where possible, at times of high demand when bedrooms are not available at the check in time, Clients may check in to the hotel and use all the Hotel facilities, subject to any rules and restrictions in place at the Hotel in respect of the use of such facilities, including but not limited to opening times, supervision of children and infants etc. whilst the accommodation is being prepared.",
          "Clients who are aware that they will be arriving at the Hotel before 2pm local time should inform Reception prior to arrival, however, the Hotel cannot guarantee that bedrooms will be available at the time of arrival before 2pm unless booked from the previous day.",
        ],
      },
      {
        title: "CANCELLATIONS, AMENDMENTS AND NON-ARRIVALS",
        desc: [
          "The Hotel reserves the right to offset any amount payable for such cancellation against the Client's credit or debit card without prior notice or the approval of the Client, where applicable.",
          "If the Hotel cancels before 12 noon local time on the scheduled day of arrival, the Hotel's liability to the Client will be no greater than the amount paid by the Client in respect of the booking.",
          "If the Hotel cancels the booking after 12 noon local time on the scheduled day of arrival, the Hotel's liability will be limited to the charge for one night's accommodation at the Hotel's rate which applies at the time that the booking was made.",
          "In the unlikely event that the Hotel does not, for any reason, have the required number and types of rooms available as per the booking, the Company reserves the right to relocate the Client to an alternative hotel of a similar standard in the same locality. The extra and reasonable accommodation expenses incurred for equivalent accommodation (for the first night only) shall at the Company's discretion be paid by the Company. The acceptance of this alternative accommodation by the Client (which does not release the Client from its obligation to make payment to the Hotel in respect of the booking) shall be in lieu of all other liabilities or obligations which are hereby expressly excluded. The Client acknowledges that neither the Company nor the Hotel accept any liability for any loss or damage suffered by or caused to the Client in consequence of the relocation of the Client.",
          "A cancellation number will be provided at the time of cancellation and this should be retained for future reference.",
          "Cancellations and amendments for bookings made online can be made via the White Ridge Hotel's website at www.whiteridgehotel.com when the booking is confirmed, a reservation number and access code will be supplied. This must be retained for access to the booking in the event of the need for cancellation and/or amendment.",
        ],
      },
      {
        title: "PAYMENT",
        desc: [
          "Upon arrival the Hotel reserves the right to collect total payment for the company duration of stay from client credit card/debit card/ cash, any additional incidental charges will be settled in final invoice prior to departure from hotel.",
          "All major credit and debit cards are accepted. Personal cheques are not accepted. Company cheques are acceptable subject to prior clearance before checking.",
          "All sums are due for payment on presentation of the invoice. In the event of any query relating to the invoice, the Client must notify the Hotel within 7 days of the invoice date and the Client's obligation to pay all outstanding balances immediately will not be affected.",
        ],
      },
      {
        title: "CHILDREN",
        desc: [
          "Children aged 15 years and under must be accompanied by a responsible adult at all times to ensure that the children's behaviour is appropriate for other guests within the Hotel.",
          "At the discretion of the Hotel, children may be excluded from certain events or promotions where deemed unsuitable or inappropriate.",
        ],
      },
      {
        title: "ROOMS FOR DISABLED GUESTS",
        desc: [
          "A number of hotels offer modified facilities for use by Guests with disabilities. As needs do vary, Guests are requested to check with the hotel on info@whiteridgehotel.com",
        ],
      },
      {
        title: "DOGS AND OTHER PETS",
        desc: ["The hotel does not accept pets."],
      },
      {
        title: "BEHAVIOUR",
        desc: [
          "The Hotel reserves the right to judge acceptable levels of noise or behaviour of Clients, Guests or representatives, who must take all steps for corrective action as requested by the Hotel.",
          "In the event of failure to comply with management requests, the Hotel may terminate the booking, stop any event immediately and / or ask the Client to vacate the Hotel premises immediately without being liable for any refund or compensation.",
        ],
      },
      {
        title: "RIGHT OF REFUSAL",
        desc: [
          "The Hotel reserves the right to refuse a Client, Guest or representative entry and accommodation if, on arrival, management reasonably considers that the guest is under the influence of alcohol or drugs, and is unsuitably dressed or is behaving in a threatening, abusive or otherwise unacceptable manner.",
        ],
      },
      {
        title: "DISCRIMINATION",
        desc: [
          "It is the policy of the Hotel not to discriminate on the grounds of race, colour, nationality, religion, sex, marital status, age, ethnic origin or disability.",
          "Clients, their employees, guests and all sub-contractors engaged by or on behalf of the Client are expected to adhere to this policy and the Hotel may, without incurring any liability to the Client, remove from the Hotel any person or persons offending against this policy.",
        ],
      },
      {
        title: "EXTERNAL PURCHASES",
        desc: [
          "No wines, spirits, beers or food may be brought into the Hotel or Hotel grounds by Clients, their guests or representatives for consumption or sale on the premises without the express written consent of the Hotel and for which a charge may be made by the Hotel.",
        ],
      },
      {
        title: "COMMENTS AND COMPLAINTS",
        desc: [
          "Any comments or complaint regarding the Hotel should be made to the General Manager at the time of visit so that the matter can be resolved immediately. Alternatively, write within 7 days to the Hotel's General Manager.",
        ],
      },
      {
        title: "STATUTORY REQUIREMENTS",
        desc: [
          "The Hotel is subject to statutory controls, including those relating to fire, licensing, entertainment, health, hygiene and safety. These must be strictly observed by Clients, their guests and representatives.",
        ],
      },
      {
        title: "LIABILITY",
        desc: [
          "Other than for death or personal injury caused by the negligence of the Hotel, the Hotel's liability to the Client is limited to the price of the booking.",
          "Unless the Hotel is liable under the above condition 18.1, the Client indemnifies the Hotel from and against any and all liability and any claims, proceedings or damages resulting or arising from the booking, event or function, the Client, guests or any outside contractors of the Client.",
          "The Hotel will not be liable for failure to perform to the extent that the failure is caused by any factor beyond its reasonable control.",
          "The Hotel does not accept any responsibility for the Client's personal property nor those of its guests, employees, representatives, invitees or contractors including gifts, presents, seminar, conference, exhibition, or other corporate presentation material or such other items brought by the Client, its employees, Guests, representatives, invitees or contractors to the Hotel (cumulatively referred to as the 'Client's Property'). The Hotel may, at the request of the Client, provide personnel to assist in carrying, directing, placing, installing or setting up (as the case may be) the Client's Property. The Hotel will not assume custody or control of such articles, which remain on Hotel premises at the owners risk. In such an instance, the Client acknowledges and accepts that the Client shall remain responsible for the Client's Property and shall not hold the Hotel liable in any manner whatsoever.",
          "The Client is responsible for any damage caused to the allocated rooms, its furnishings, utensils, fixtures and fittings and equipment in such rooms by any act, omission, default or neglect of the Client, its guests, employees, representatives, invitees or contractors and shall pay to the Hotel on demand the amount required to make good or remedy any such damage.",
          "Clients should ensure that valuables are covered by the Client's own insurance policy.",
          "Clients must report any loss of or damage to their property immediately on discovery to the Hotel's Management, and shall make themselves available to assist with any reports made by the Hotel to the police.",
          "Clients shall not enter areas of the Hotel which are indicated as being closed to the public. The Hotel shall not be responsible for death, personal injury or loss or damage to property suffered by a Client and their Guests in such areas.",
        ],
      },
      {
        title: "THIRD PARTY LIABILITY",
        desc: [
          "Neither the Hotel, the Company accept any liability for services rendered by third parties to Clients notwithstanding that such services may be arranged by the Hotel or the Company.",
          "Any claim, demand, charge, suit or damages which may be incurred by the Client or their Guests (or any person claiming thereunder) shall be made directly with such third parties and the Hotel shall render all reasonable assistance in this regard.",
        ],
      },
      {
        title: "INSURANCE",
        desc: [
          "The Client is recommended to have and is responsible for insurance to cover cancellation, curtailment, and loss of baggage, personal effects and money.",
        ],
      },
      {
        title: "DATA PROTECTION",
        desc: [
          "The information provided by the Client may be processed by the Company, and/or the Hotel for the purposes it has notified to the Data Protection Registrar. By confirming the booking, the Client consents to this processing of the information.",
          "View full details of our Privacy Policy",
        ],
      },
      {
        title: "DISPUTE",
        desc: [
          "These terms will be construed in accordance with Indian law and the Hotel and the Client submit to the non-exclusive jurisdiction of court in Dharamshala, Himachal Pradesh.",
        ],
      },
      {
        title: "INTERNET FACILITIES",
        desc: [
          "Internet facilities are provided by third party providers. Where these facilities are available in Hotel, the Client acknowledges that there may be disruption to the connection without prior notice and the Hotel shall not be liable whatsoever for such disruption. The Client further undertakes not to use the facility for any fraudulent purpose or in connection with any criminal offence and in contravention of any license and will indemnify the Hotel and the Company against any claim, demand, suit, proceeding or prosecution arising therefrom.",
        ],
      },
      {
        title: "WEBSITE INFORMATION",
        desc: [
          "White Ridge Hotel cannot accept responsibility for any errors or omissions and reserve the right to cancel, amend or vary the arrangements featured in the site without notice.",
        ],
      },
      {
        title: "ACCESSIBILITY",
        desc: [
          "White Ridge Hotel is committed to improving accessibility for all customers within our hotel and users of our Internet site.",
          "If you require more information on disabled rooms at our hotels, please contact the hotel directly.",
        ],
      },
      {
        title: "COPYRIGHT",
        desc: [
          "The content of each page of this Internet site is the property of White Ridge Hotel.",
          "No part of our internet site may be reproduced, displayed or republished in any form without prior consent, except that permission is granted to a user to print or photocopy individual articles or entire pages from our Internet site, provided that this is for personal use only.",
          "Should you require any further information or permission to use anything contained in this site, please contact the Sales Manager at White Ridge Hotel.",
          "The information contained in this Internet site is provided in good faith. The use of any information from this site is entirely at the risk of the user. White Ridge Hotel will not be liable for any costs, losses, expenses or damages (whether direct or indirect, special, economic or financial) that may be incurred through the use of any information contained in this Internet site or in any other Internet site linked from it.",
        ],
      },
      {
        title: "INTERNET SITE SECURITY",
        desc: [
          "Booking online through our Internet site is safe. Security of our site is paramount and we have invested a great deal of time and money to ensure you can have the peace of mind that your details are secure. Our online reservation system is secure and your credit card.",
        ],
      },
    ],
  },
  policyData: {
    description: [
      'White Ridge Hotel ("we", "us", "our") provides the information set out on the www.whiteridgehotel.com website (the "Website") solely for information purposes.',
      "Your use of the Website is governed by this Privacy Policy and our Disclaimer. Any room reservation you make with us shall additionally be subject to our Terms and Conditions, as well as the terms of our room booking operator.",
      "By using any part of the Website and/or submitting any information to us through the Website, you agree to the terms set forth in our Disclaimer and this Privacy Policy, and you agree that any of your personal data obtained through the Website may be processed in accordance with our Privacy Policy.",
      "If you have any questions regarding these documents, please contact us via info@whiteridgehotel.com.",
    ],
    data: [
      {
        title: "GENERAL",
        desc: [
          "We are concerned with the protection of your privacy and will comply with all applicable Indian data protection legislation.",
        ],
      },
      {
        title: "COLLECTION OF PERSONAL DATA",
        desc: [
          "We may collect your personal data on the occasions and for the purposes as set forth below.",
          "We may also use your personal data to support the functionality and personalize the layout and content of the Website to match your needs, interests and preferences, for security and fraud prevention purposes, to better understand our guests, to improve our programs, services and Website, and to better market our programs and services.",
        ],
      },
      {
        title: "USE OF THE WEBSITE",
        desc: [
          "When you use the Website, we may collect information regarding the pages you visited, the date and time of your visit, your web browser and your IP address (collectively, the 'Page Statistics').",
          "In general, we use the Page Statistics only to compile anonymous statistics regarding our visitors, in particular every visitor's home country.",
          "In case of technical difficulties, upon your request, we may investigate the Page Statistics to offer you support in using the website's facilities.",
          "Without your request for technical assistance, we will never investigate personalized Page Statistics.",
          "The Website uses session cookies, which are deleted after you close your browser, and only store a minimal amount of personal data for a limited time.",
        ],
      },
      {
        title: "CONTACTING US",
        desc: [
          "When you contact us (via mail, e-mail, telephone, fax or Website) or make a reservation, we may collect your contact details to assist and communicate with you.",
          "We may use your contact information to send newsletters and inform you of products and services.",
          "If you no longer wish to receive our newsletter or marketing, you may notify us at info@whiteridgehotel.com.",
          "We will only send marketing emails if you have explicitly opted in.",
        ],
      },
      {
        title: "RESERVATIONS AND PAYMENTS",
        desc: [
          "All reservations are processed by our booking partner.",
          "Personal data you provide during booking is processed by the partner.",
          "Upon successful booking, our partner provides us with booking data to deliver hotel and management services during your stay.",
        ],
      },
      {
        title: "SECURITY",
        desc: [
          "Our Website and databases are protected against theft, unauthorized access, and data loss.",
          "Data is stored on a professionally maintained, externally hosted server with regular backups and updates.",
          "While we take reasonable security measures, no website can be 100% protected from targeted hacking attacks.",
        ],
      },
      {
        title: "TRANSFER OF PERSONAL DATA",
        desc: [
          "We may occasionally share your personal data with affiliated companies, bonus programs, or travel organizations.",
          "Your personal data will not be shared with any other parties.",
        ],
      },
      {
        title: "STORAGE TERM",
        desc: [
          "We only store personal data as long as it is necessary or useful for us or for you.",
          "Website statistical information is periodically released.",
          "Contact information is stored until you request its deletion.",
        ],
      },
      {
        title: "ACCESS AND MODIFICATION OF YOUR PERSONAL DATA",
        desc: [
          "You may request access to or changes to your personal data at any time.",
          "Contact us at info@whiteridgehotel.com for any such requests.",
          "For data handled by our Booking Partner or Payment Gateway, you should contact them directly.",
        ],
      },
      {
        title: "CHANGES",
        desc: [
          "We reserve the right to update our Privacy Policy at any time.",
          "Changes will be posted on the Website and are effective immediately.",
          "Your continued use of the Website means you accept those changes.",
        ],
      },
    ],
  },
};
