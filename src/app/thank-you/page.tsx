import { SectionWithContainer } from "@/components";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex justify-center items-center h-dvh">
      <SectionWithContainer>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative max-w-96 w-full mx-auto md:aspect-[4/2] aspect-[3/1]">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>

          <div className="max-w-xl mx-auto">
            <div className="space-y-8 flex flex-col items-center">
              <h2 className="text-secondary md:text-lg font-semibold text-[#363636]">
                THANK YOU FOR SUBMITTING
              </h2>
              <h3 className="md:text-4xl text-2xl font-bold text-center text-[#363636]">
                We will get back to you shortly!
              </h3>

              <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-md text-lg"
              >
                Go to Home Page
              </Link>
            </div>
          </div>
        </div>
      </SectionWithContainer>
    </main>
  );
};

export default page;
