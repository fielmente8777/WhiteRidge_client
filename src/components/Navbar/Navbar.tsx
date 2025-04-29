"use client";
import Link from "next/link";
import Container from "../SectionComponents/Container";
import { NavLink } from "@/data/navData";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./MobileNavbar";
import Button from "../Button";
import { bookingUrl } from "@/data/links";
import axios from "axios";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  // Current time state
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Current time timer
  useEffect(() => {
    const timer = setInterval(() => {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Weather state
  const [temp, setTemp] = useState<number | null>(null);

  // Memoized function to fetch weather
  const getTemp = useCallback(async () => {
    try {
      const apiKey = "8611baa95180437492f54121230505";
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000); // Set a timeout for the request

      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=32.19369958610509,76.34778399999999`,
        { signal: controller.signal }
      );

      clearTimeout(timeout);
      setTemp(response?.data?.current?.temp_c);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      setTemp(null); // Handle error gracefully
    }
  }, []);

  // Fetch weather only user's location
  useEffect(() => {
    getTemp();
  }, [getTemp]);

  return (
    <header
      className={
        pathname !== "/"
          ? "py-3 fixed top-0 left-0 w-full z-50 max-md:py-4 bg-white shadow-2xl"
          : `transition-all duration-500 ease-in-out fixed top-0 left-0 w-full z-50 py-4 ${
              navbar
                ? "sticky bg-white text-primary animate-top-down"
                : "bg-transparent text-white"
            }`
      }
    >
      <Container>
        <nav className="flex justify-between items-center uppercase md:gap-2 gap-6 w-full">
          <div className="lg:hidden block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                navbar
                  ? "text-primary"
                  : pathname === "/"
                    ? "text-white"
                    : "text-primary"
              } text-3xl ${isOpen ? "rotate-180" : ""} transition duration-300 ease-in-out`}
            >
              {isOpen ? <IoMdClose /> : <CiMenuBurger />}
            </button>

            <div
              className={`fixed top-[4.5rem] right-0 w-[90%] h-full bg-primary/95 backdrop-brightness-75 border-r border-primary/90 z-50 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <MobileNavbar setIsOpen={setIsOpen} />
            </div>
          </div>
          <Link href="/" className="flex flex-col">
            <span
              className={`relative lg:block hidden lg:h-[5rem] h-14 lg:aspect-[4/2] aspect-[4/1.2] transition-all duration-300 ease-in-out ${
                navbar
                  ? "opacity-100"
                  : pathname === "/"
                    ? "lg:opacity-0"
                    : "lg:opacity-100"
              }`}
            >
              <Image
                src="/logo.png"
                alt="white ridge logo"
                fill
                className="object-contain"
              />
            </span>
            <span
              className={`relative block lg:hidden h-9 lg:aspect-[4/2] aspect-[4/1.2] transition-all duration-300 ease-in-out ${
                navbar ? "opacity-100" : "lg:opacity-0"
              }`}
            >
              <Image
                src="/logo.png"
                alt="white ridge logo"
                fill
                className="object-contain"
              />
            </span>
          </Link>
          <div className="lg:flex hidden items-center justify-center gap-4 text-base">
            <ul className="flex items-center gap-4">
              {NavLink.map((link) => (
                <li className="relative group" key={link.id}>
                  <Link
                    href={link.href}
                    className={`transition-all font-medium duration-100 ease-linear py-2 px-4 group flex flex-col items-center justify-center ${
                      navbar || pathname !== "/" ? "text-dark" : "text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`block w-0 h-[2px] absolute bottom-0 ${
                        pathname === link.href && "w-full"
                      } ${
                        navbar || pathname !== "/" ? "bg-light" : "bg-white"
                      } mt-1 transition-all duration-300 ease-in-out group-hover:w-full`}
                    ></span>
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2">
                {currentTime && (
                  <span
                    className={`md:text-base text-sm font-medium ${
                      navbar || pathname !== "/" ? "text-dark" : "text-white"
                    } transition-all duration-75 ease-in-out`}
                  >
                    {currentTime}
                    {temp && `, ${temp}°C`}
                  </span>
                )}
              </li>
            </ul>
          </div>
            <Button
              href={bookingUrl}
              label="Book Now"
              className={`${
                navbar || pathname !== "/"
                  ? " border-primary"
                  : "bg-transparent border-white"
              } border max-md:text-[0.78rem] transition-all duration-75 ease-in-out`}
              newTabe={true}
            />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
