import {
  BoatIcon,
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
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Rooms/Classic+Double+Lakeview/4E1A7844.webp",
        alt: "Classic Lake View",
      },
    ],
  },
  amenitiesData: {
    title: "Amenities",
    description: "Thoughtful touches, endless delight",
    items: [
      {
        icon: homeImages + "/amenities/CarProfile.png",
        title: "Free Parking Without Reservation",
        description:
          "Arrive stress-free with spacious front and back parking areas, designed to accommodate every guest with ease and comfort.",
        // src: aboutImages + "/img2.webp",
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Facade/WhatsApp+Image+2025-03-26+at+20.56.16+(1).webp",
        color: "#FAE3AF",
      },
      {
        icon: homeImages + "/amenities/PicnicTable.png",
        title: "Breakfast",
        description:
          "Start your day the right way. Our continental breakfast buffet is packed with fresh, locally-sourced flavors to fuel your adventures ahead",
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Restaurant/im1.webp",
        color: "#D8D6D7",
      },
      {
        icon: homeImages + "/amenities/SmileyWink.png",
        title: "Entertainment Lounge",
        description:
          "Relax, recharge, and enjoy. Whether you’re into games, books, or just good conversations under the glow of Swiss hospitality",
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Bar+lounge/4E1A8037+copy.webp",
        color: "#E7CBCE",
      },
      {
        icon: homeImages + "/amenities/Eye.png",
        title: "Private Balcony/Terrace",
        description:
          "Take in the views—Lake Brienz, the Swiss Alps, and a whole lot of serenity. Unwind with a book, or sip your favorite drink while nature does the rest",
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Designer.webp",
        color: "#CE905F",
      },
      {
        icon: homeImages + "/amenities/WifiHigh.png",
        title: "Free WiFi",
        description:
          "Stay as connected as you want. Our high-speed WiFi ensures you can stay in touch with what matters, while you’re living your best Swiss life",
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/medium.webp",
        color: "#E0E7E9",
      },
      // {
      //   icon: homeImages + "/amenities/SmileyWink.png",
      //   title: "Entertainment Lounge",
      //   description:
      //     "Relax, recharge, and enjoy. Whether you’re into games, books, or just good conversations under the glow of Swiss hospitality",
      //   src: homeImages + "/gallery/img2.webp",
      //   color: "#E7CBCE",
      // },
      {
        icon: homeImages + "/amenities/ChefHat.png",
        title: "Common Kitchen",
        description:
          "Feel at home with our fully-equipped common kitchen. Whether you’re cooking up a storm or just storing snacks, it’s your space to enjoy",
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
        src: homeImages + "/nearby/IMG1.png",
        alt: "Jangfrau",
        des: "An alpine journey to towering peaks",
        description:
          "Jungfrau, renowned for its towering peaks and stunning vistas, features scenic train rides, hiking trails, and snow adventures. Ideal for explorers and nature lovers, it’s a must-visit alpine destination",
      },
      {
        src: homeImages + "/nearby/IMG2.png",
        alt: "Harder Kulm",
        des: "The roof of Interlaken with panoramic views.",
        description:
          "a short ride from Interlaken, offers sweeping views of Lake Thun, Lake Brienz, and the mountains from its 1,322-meter height. The glass-floored platform and on-site restaurant make it a memorable spot.",
      },
      {
        src: homeImages + "/nearby/IMG3.png",
        alt: "Lake Thun",
        des: "Tranquility on turquoise waters",
        description:
          "Lake Thun, known for its clear waters and mountain views, offers boat cruises, charming villages, and historic lakeside castles. Ideal for picnics, swimming, or relaxing, it's a perfect spot for families and couples.",
      },
      {
        src: homeImages + "/nearby/IMG4.png",
        alt: "Schynige Platte",
        des: "A floral paradise above the clouds",
        description:
          "Schynige Platte, accessible by cogwheel train, is known for its scenic hiking trails, alpine flora, and panoramic views of the Eiger, Mönch, and Jungfrau. It’s a perfect retreat for nature lovers and adventure seekers alike.",
      },
      {
        src: homeImages + "/nearby/IMG5.png",
        alt: "St. Beatus Caves",
        des: "Whispers of legends in limestone chambers",
        description:
          "The St. Beatus Caves near Lake Thun feature limestone formations and legends of St. Beatus. Guided tours along well-kept paths reveal their geological history and natural beauty.",
      },
      {
        src: homeImages + "/nearby/IMG6.png",
        alt: "Giessbach Falls",
        des: "Cascading beauty amidst lush forests",
        description:
          "Giessbach Falls, near Lake Brienz, cascades over 500 meters through lush forests. Scenic trails offer beautiful views, and the nearby historic Giessbach Hotel adds to its charm, making it ideal for a day in nature.",
      },
      {
        src: homeImages + "/nearby/IMG7.png",
        alt: "Hohematte Park",
        des: "A vibrant green canvas in Interlaken’s heart",
        description:
          "Located in central Interlaken, Hohematte Park is a lush green space with manicured gardens, playgrounds, and mountain views. Hosting events year-round, it’s perfect for picnics, strolls, or relaxation for all ages.",
      },
    ],
  },
  DoAtHotel: {
    title: "ACTIVITIES",
    description: "Discover Thrilling Activities for Every Explorer",
    items: [
      {
        title: "Lakeside Serenity Walk",
        description:
          "Take a leisurely 3-4 km stroll around the pristine lake, where every step offers breathtaking views of the water and the majestic Alps. Perfect for unwinding or capturing the beauty of nature, this walk immerses you in tranquility",
        images: [
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Lakeside+Serenity/Jpg/IMG-+new.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Lakeside+Serenity/Jpg/IMG-1%2C2.webp",
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/Lakeside+Serenity/PSD/IMG-3.webp",
          homeImages + "/doathotels/IMG1.png",
          // homeImages + "/doathotels/IMG2.png",
          // homeImages + "/doathotels/IMG3.png",
          // homeImages + "/doathotels/IMG4.png",
        ],
      },
      {
        title: "Iseltwald: A View to Remember",
        description:
          "Enjoy unparalleled views of the charming village of Iseltwald right from your balcony. Famous for its appearance in the Korean drama Crash Landing on You, this scenic spot blends natural beauty with cinematic magic",
        images: [],
      },
      {
        title: "Seasonal Swimming Bliss",
        description:
          "Dive into relaxation at the swimming spot just below the hotel, open during the season. Whether you're taking a refreshing dip or lounging by the water, it's a perfect way to enjoy the lake",
        images: [
          "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/Images-ORA-Lakeview-Finalised/45.webp",
          // homeImages + "/doathotels/IMG9.png",
          // homeImages + "/doathotels/IMG10.png",
          // homeImages + "/doathotels/IMG11.png",
          // homeImages + "/doathotels/IMG12.png",
        ],
      },
      {
        title: "Fun for the Little Ones",
        description:
          "A nearby children’s park ensures younger guests have their share of fun. Equipped with swings, slides, and a safe play area, it’s an ideal spot for families to create joyful memories together",
        images: [
          homeImages + "/doathotels/IMG13.png",
          homeImages + "/doathotels/img14.webp",
          homeImages + "/doathotels/IMG15.png",
          homeImages + "/doathotels/IMG16.png",
        ],
      },
    ],
  },
  connectivity: {
    title: "At the Heart of Connectivity",
    description:
      "Perfectly located for effortless exploration and unforgettable experiences",
    src: homeImages + "/img3.webp",
    items: [
      {
        icon: <BusIcon />,
        address: "Niederried b.I'laken, Dorf Bus Station",
        distance: "20 meters ,🚶 1 min",
      },
      {
        icon: <BoatIcon />,
        address: "Niederried Ferry Terminal",
        distance: "300 Meters, 🚶 5 mins approx",
      },
      {
        icon: <TrainIcon />,
        address: "Niederried train Station",
        distance: "170 meters, 🚶 2-3 mins approx",
      },
      {
        icon: <PlainIcon />,
        address: "Zurich Airport / Bern Airport",
        distance: "79 M, 🚗 1 hr 46 min / 36 M, 🚗 49 mins",
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
