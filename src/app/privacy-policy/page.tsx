import { Heading, Paragraph, SectionWithContainer } from "@/components";
import { policyPagesData } from "@/data/pagesData";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Privacy Policy | White Ridge Hotel",
  description: "Read White Ridge Hotel's privacy policy and terms & conditions covering data protection, bookings, cancellations, and guest guidelines.",
  metadataBase: new URL("https://www.whiteridgehotels.com/privacy-policy"),
  alternates: {
    canonical: "https://www.whiteridgehotels.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | White Ridge Hotel",
    description: "Read White Ridge Hotel's privacy policy and terms & conditions covering data protection, bookings, cancellations, and guest guidelines.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  }
};

const page = () => {
  return (
    <main className="margin">
      <SectionWithContainer sectionClassName="">
        <div className="flex flex-col items-center justify-center gap-4 pb-8">
          <Heading
            level={2}
            className="text-center text-secondary capitalize font-montaga heading2"
          >
            Privacy Policy
          </Heading>
          <div className="flex flex-col gap-4">
            {policyPagesData.policyData.description.map((data, index) => (
              <Paragraph className="description1 text-dark" key={index}>
                {data}
              </Paragraph>
            ))}
            {policyPagesData.policyData.data.map((data, index) => (
              <React.Fragment key={index}>
                <Heading
                  level={2}
                  className="text-dark font-medium capitalize font-montaga heading4"
                >
                  {data.title}
                </Heading>
                {data.desc && (
                  <>
                    {data.desc.map((item, index) => (
                      <Paragraph className="description1 text-dark" key={index}>
                        {item}
                      </Paragraph>
                    ))}
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="">
        <div className="flex flex-col items-center justify-center gap-4 pb-2">
          <Heading
            level={2}
            className="text-center text-secondary capitalize font-montaga heading2"
          >
            Terms & Conditions
          </Heading>
          <div className="flex flex-col gap-4">
            {policyPagesData.termsAndConditions.description.map((data, index) => (
              <Paragraph className="description1 text-dark" key={index}>
                {data}
              </Paragraph>
            ))}
            {policyPagesData.termsAndConditions.data.map((data, index) => (
              <React.Fragment key={index}>
                <Heading
                  level={2}
                  className="text-dark font-medium capitalize font-montaga heading4"
                >
                  {data.title}
                </Heading>
                {data.desc && (
                  <>
                    {data.desc.map((item, index) => (
                      <Paragraph className="description1 text-dark" key={index}>
                        {item}
                      </Paragraph>
                    ))}
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </SectionWithContainer>
    </main>
  );
};

export default page;
