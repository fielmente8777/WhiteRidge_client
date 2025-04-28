// import { Heading } from "../TextAndInputComponents";
import { Heading, Paragraph } from "@/components";

const GuestReviewCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-full bg-bgClr flex flex-col items-center justify-center gap-6 p-5">
      <Heading
        level={2}
        className="text-center text-white capitalize font-montaga heading4"
      >
        {title}
      </Heading>
      <div>⭐⭐⭐⭐⭐️</div>

      <Paragraph className="text-center description1 text-white">
        {description}
      </Paragraph>
    </div>
  );
};

export default GuestReviewCard;
