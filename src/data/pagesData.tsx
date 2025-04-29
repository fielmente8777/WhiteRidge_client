import {
  BusIcon,
  PlainIcon,
  TrainIcon,
  MailIcon,
  PhoneIcon,
  Location,
} from "../icons/icons";
import {
  contactImages,
  galleryImages,
  homeImages,
} from "./links";
export const homePageData = {
  bannerData: {
    title: "Timeless • Serene • Tranquil",
    description:
      "Where Comfort Meets Culture, and Every Stay is a Memorable Experience.",
    images: [
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/bnr1.webp",
    ],
  },
  galleryData: {
    title: "Gallery",
    description: "Immerse in our breathtaking surroundings",
    images: [
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im1.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im2.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im3.webp",
      "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im4.webp",
    ],
  },

  roomsData: {
    title: "ACCOMMODATION",
    description: "Peaceful, Comfort, and Scenic Views",
    subDescription:
      "Our rooms are designed for comfort and relaxation, offering a variety of categories to suit your needs. With options ranging from cozy single rooms to spacious suites, we ensure a restful stay. Each room is thoughtfully designed with modern amenities and breathtaking views of Dharamshala’s scenic beauty, making it a perfect retreat for all guests.",
    images: [
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Valley+View/IMG_8273+copy.webp",
        alt: "Deluxe Premium Valley View Room",
      },
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Mount+View/IMG_8240+copy.webp",
        alt: "Deluxe Premium Mount View Room",
      },
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8307+copy.webp",
        alt: "Executive Suite Room",
      },
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/STD+Room/IMG_8337+copy.webp",
        alt: "Standard Room",
      },
    ],
  },
  amenitiesData: {
    title: "Amenities",
    description: "Thoughtful touches, endless delight",
    items: [
      {
        icon: homeImages + "/amenities/CarProfile.png",
        title: "Free Parking",
        description:
          "Enjoy hassle-free parking with ample space, so you can focus on your time with us.",
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Facade/WhatsApp+Image+2025-03-26+at+20.56.16+(1).webp",
        color: "#FAE3AF",
      },
      {
        icon: homeImages + "/amenities/PicnicTable.png",
        title: "Free Wi-Fi",
        description:
          "Stay connected throughout your stay with our fast and reliable complimentary Wi-Fi service.",
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Restaurant/im1.webp",
        color: "#D8D6D7",
      },
      {
        icon: homeImages + "/amenities/SmileyWink.png",
        title: "Multi-Cuisine Restaurant",
        description:
          "Indulge in a diverse menu offering delicious dishes from around the world in our restaurant.",
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Bar+lounge/4E1A8037+copy.webp",
        color: "#E7CBCE",
      },
      {
        icon: homeImages + "/amenities/Eye.png",
        title: "Mini Swimming Pool",
        description:
          " Take a refreshing dip in our mini swimming pool, perfect for a relaxing break.",
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Designer.webp",
        color: "#CE905F",
      },
      {
        icon: homeImages + "/amenities/WifiHigh.png",
        title: "Bar Area",
        description:
          "Sip on your favorite cocktails and unwind in our vibrant bar area, designed for relaxation.",
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/medium.webp",
        color: "#E0E7E9",
      },
      {
        icon: homeImages + "/amenities/SmileyWink.png",
        title: "Multipurpose Hall",
        description:
          "Host your events with ease in our versatile multipurpose hall, perfect for any occasion.",
        src: homeImages + "/gallery/img2.webp",
        color: "#E7CBCE",
      },
      {
        icon: homeImages + "/amenities/ChefHat.png",
        title: "Rooftop Lounge",
        description:
          "Experience breathtaking views and cool breezes while enjoying your favorite drinks at our rooftop lounge.",
        src: homeImages + "/amenities/IM3.png",
        color: "#B9BDA7",
      },
    ],
  },
  nearbyattractions: {
    title: "nearby attractions",
    description: "Explore Nearby Natural Wonders",

    images: [
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im5.webp",
        alt: "Kangra Valley",
        des: "Kangra Valley",
        description:
          "Nestled in the foothills of the majestic Himalayas, Kangra is a serene escape, offering picturesque landscapes, rich history, and a tranquil atmosphere that captures the heart of every traveler.",
      },
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im6.webp",
        alt: "Shri Dalai Lama Temple",
        des: "Shri Dalai Lama Temple",
        description:
          "A peaceful haven for reflection and spirituality, the Shri Dalai Lama Temple offers visitors a glimpse into Tibetan culture and Buddhism, with stunning views of Dharamshala’s natural beauty.",
      },
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im8.webp",
        alt: "Triund Hill",
        des: "Triund Hill",
        description:
          "Known for its breathtaking vistas, Triund Hill is a paradise for trekkers and nature lovers, offering panoramic views of the Dhauladhar range and a serene atmosphere that calms the soul.",
      },
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im9.webp",
        alt: "Norbulingka Temple",
        des: "Norbulingka Temple",
        description:
          "A gem of Tibetan architecture, the Norbulingka Temple is a peaceful sanctuary where vibrant gardens, intricate art, and spiritual tranquility create a serene escape for those seeking reflection.",
      },
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im10.webp",
        alt: "Dal Lake",
        des: "Dal Lake",
        description:
          "Surrounded by lush greenery and stunning Himalayan peaks, Dal Lake is a serene and picturesque spot, offering a peaceful retreat with boat rides and a tranquil atmosphere perfect for relaxation.",
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
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl1.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl2.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl3.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl4.webp",
        ],
      },
      {
        title: "Paragliding",
        description:
          "Soar above the lush valleys of Dharamshala for an exhilarating paragliding experience. Whether you're a first-timer or an experienced flier, this adventure offers a unique bird's-eye view of the majestic Himalayas.",
        images: [
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl5.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl6.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl7.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl8.webp",
        ],
      },
      {
        title: "Camping",
        description:
          "Reconnect with nature in the serene environment of Dharamshala with our curated camping experiences. Enjoy cozy tents, a warm campfire, and the peaceful sounds of the wilderness under a starlit sky.",
        images: [
         "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl9.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl10.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl11.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl12.webp",
        ],
      },
      {
        title: "River Crossing",
        description:
          "Push your limits with an exciting river crossing adventure. Perfect for thrill-seekers, this activity offers an adrenaline rush while enjoying the natural beauty of the surroundings.",
        images: [
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl13.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl14.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl15.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl16.webp",
        ],
      },
      {
        title: "Jungle Walks",
        description:
          "Embark on a peaceful jungle walk and explore the rich biodiversity of Dharamshala's forests. A guided nature walk gives you the chance to connect with the landscape while spotting local wildlife and flora.",
        images: [
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl17.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl18.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl19.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/doathotel/sl20.webp",
        ],
      },
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
        address: "train Station",
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
        title: "Perfect Romantic Getaway!",
        description: `"Dulha Baraati's" were staying here at "White Ridge" from 17th May'22 to 25th May'22 and it has been an absolute pleasure and delightful experience. Right from our stay, food, haldi event, mehandi event & baraati event - very well organized and handled extremely well! I can only say that - "One must stay" at "White Ridge". The hospitality, simplicity of the people/staff here is truly commendable. "Commitment" is what staff over here take it very seriously and guests will always be extremely happy.`,
      },
      {
        title: "A Hidden Gem!",
        description: `Amazing view and super convenient to reach. Very welcoming staff. It’s easily reachable from Interlaken OST station and train station is right behind the hotel. We enjoyed our stay with our toddler and enjoyed amazing views. Must stay`,
      },
      {
        title: "Perfect Romantic Getaway!",
        description: `Excellent location and beautiful view. Loved the room and hospitality. Wish you come here again. The climate here is soothing and refreshing. My wife wanted to stay here for long just to enjoy the view`,
      },
      {
        title: "Perfect Romantic Getaway!",
        description: `A boutique hotel with, an excellent view, and very good staff. multi-lingual reception staff (German, Italian, French, Spanish, English and Romanian) a very good continental breakfast ( yes it is not the usual 5-star hotel buffet) but they delivered what they promised on the web.`,
      },
      {
        title: "Perfect Romantic Getaway!",
        description: `This hotel is in a great location with an amazing view to Lake Thun. The rooms are decent and comfortable enough. Also, Tushar who works at the front desk took care of my family and I & provided us with all what we need during our stay.`,
      },
      {
        title: "Perfect Romantic Getaway!",
        description: `This was an amazing hotel with a beautiful view of the lake and a 2 minute walk to the train station. Balcony room with lake view was BEAUTIFUL! 10/10 recommend staying here. The man at the reception was so friendly and helpful`,
      },
      {
        title: "Perfect Romantic Getaway!",
        description: `Amazing place to stay. Very beautiful view in morning and evening time. Train station just 2-3min by walk (Niederried station) and ferry-boat station available. We stay here 3days and enjoyed alot. Everything is very easy to reached`,
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
        content: `CHECK IN TIME : 11 AM & CHECK OUT TIME : 1 PM .`,
      },
      {
        id: 3,
        title: "Are retiring rooms available for drivers?",
        content: `No, retiring rooms Are not available.`,
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
    src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im19.webp",
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
    src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im3.webp",
  },
};

// const roomCardNew = roomImages + "/card/Img";
export const roomsPageData = {
  bannerData: {
    title: "Stay in the Heart of Dharamshala",
    description:
      "We're proud of the relationships we've built over the years and the trust our guests have in us. Whether you’re here for a family vacation, a business conference, or just passing through, we’re excited to welcome you to experience the magic of this place. It’s not just a stay; it’s a memory in the making.",
    src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/im18.webp",
  },
  roomcard: [
    {
      title: "Deluxe Premium Valley View Room",
      description:
        "Wake up to breathtaking panoramic views of the lush valleys, offering the perfect blend of comfort and peace in our spacious Deluxe Premium Valley View Room.",
      price: "₹4500/Day",
      images: [
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Valley+View/IMG_8273+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Valley+View/IMG_8260+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Valley+View/IMG_8368+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Valley+View/IMG_8262+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Valley+View/IMG_8279+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Valley+View/IMG_8270+copy.webp",
          alt: "dsdsd",
        },
        
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Valley+View/IMG_8292+copy.webp",
          alt: "dsdsd",
        },
        // {
        //   src: roomCardNew + "5.png",
        //   alt: "dsdsd",
        // },
        // {
        //   src:
        //     "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/rooms/card/" +
        //     "mej4.jpg",
        //   alt: "dsdsd",
        // },
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
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Mount+View/IMG_8240+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Mount+View/IMG_8244+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Mount+View/IMG_8249+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Mount+View/IMG_8253+copy.webp",
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
      price: "₹6799/Day",
      images: [
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8326+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8310+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8307+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8305+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8299+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8315+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8329+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8332+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8315+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Executive+Suit/IMG_8321+copy.webp",
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
      title: "Standard Room",
      description:
        "Experience a cozy, comfortable stay in our Standard Room, where simplicity meets charm, making it the perfect base for your adventures in Dharamshala.",
      price: "₹3500/Day",
      images: [
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/STD+Room/IMG_8338+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/STD+Room/IMG_8337+copy.webp",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/STD+Room/IMG_8342+copy.webp",
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
    src: galleryImages + "/img1.webp",
  },
  galleryData: [
   
    {
      title: "Terrace",
      images: [
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Terrace/IMG_8168+copy.webp",
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Terrace/IMG_8172+copy.webp",
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Terrace/IMG_8175+copy.webp",
      ],
    },
    {
      title: "Reception",
      images: [
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Reception+Lobby/IMG_8398+copy.webp",
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Reception+Lobby/IMG_8402+copy.webp",
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Reception+Lobby/IMG_8404+copy.webp",
      ],
    },
    {
      title: "Restaurant",
      images: [
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Resturant/IMG_8408+copy.webp",
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Resturant/IMG_8411+copy.webp",
      ],
    },
    {
      title: "Bar Lounge",
      images: [
       "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Bar/IMG_8414+copy.webp",
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/white-ridge/Bar/IMG_8417+copy.webp",
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
        href: "tel:+91 98160 91658",
      },
      {
        label: "Send a message",
        href: "https://wa.me/+919816091658?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates.",
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
            label: "reservations@whiteridgehotel.com",
            href: "mailto:reservations@whiteridgehotel.com",
          },
        ],
      },
    ],
  },
};
