import { Heading, Paragraph, SectionWithContainer } from "@/components";
import React from "react";
import { policyPagesData } from "../../data/pagesData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | White Ridge Hotel",
  description: "Review White Ridge Hotel's cancellation and refund guidelines before booking your stay in Dharamshala, Himachal Pradesh.",
  metadataBase: new URL("https://www.whiteridgehotels.com/cancellation-and-refund-policy"),
  alternates: {
    canonical: "https://www.whiteridgehotels.com/cancellation-and-refund-policy",
  },
  openGraph: {
    title: "Cancellation & Refund Policy | White Ridge Hotel",
    description: "Review White Ridge Hotel's cancellation and refund guidelines before booking your stay in Dharamshala, Himachal Pradesh.",
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
        <div className="flex flex-col items-center justify-center gap-8 pb-8">
          <Heading
            level={1}
            className="text-center text-primary capitalize font-montaga heading2"
          >
            Cancellation & Refund Policies
          </Heading>
          <div className="flex flex-col gap-4">
            {policyPagesData.cancellationPageData.description.map(
              (data, index) => (
                <Paragraph className="description1 text-dark" key={index}>
                  {data}
                </Paragraph>
              )
            )}
            {policyPagesData.cancellationPageData.data.map((data, index) => (
              <React.Fragment key={index}>
                <Heading
                  level={2}
                  className="text-dark font-medium capitalize font-montaga heading4"
                >
                  {data.title}
                </Heading>
                {data.list && (
                  <ul className="list-disc pl-4 flex flex-col gap-2">
                    {data.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
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
