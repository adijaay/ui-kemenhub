import { IconChevronRight } from "@tabler/icons-react";
import Container from "../ui/Container";
import Text from "../ui/Text";
import TextTitle from "../ui/TextTitle";
import { useRouter } from "next/router";

interface ICardInfo {
  title: string;
  desc: string;
  img: string;
  link: string;
}

export default function CardInfo({ title, desc, img, link }: ICardInfo) {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <Container onClick={handleClick}>
      <div className="flex items-center">
        <div className="flex w-full items-start gap-2">
          <img src={img} alt="info" className="h-6 w-6" />
          <div className="flex flex-col gap-2">
            <TextTitle className="text-sm font-bold">{title}</TextTitle>
            <Text className="text-xs leading-[18px] text-[#667085]">
              {desc}
            </Text>
          </div>
        </div>
        <IconChevronRight size={20} color="#D0D5DD" className="shrink-0" />
      </div>
    </Container>
  );
}
