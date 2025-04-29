// import { Heading } from "../TextAndInputComponents";
import { Heading, Paragraph } from "@/components";
import { StarIcon } from "@/icons/icons";

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
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <span key={index}>
            <span className="sr-only">rating</span>
            <StarIcon />
          </span>
        ))}
      </div>

      <Paragraph className="text-center description1 text-white">
        {description}
      </Paragraph>
    </div>
  );
};

export default GuestReviewCard;
