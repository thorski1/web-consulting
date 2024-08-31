"use client";
import Image from "next/image";
import { HeaderSection } from "./header-section";
import BlurFade from "./magicui/blur-fade";

/**
 * Interface for an item in the four-column icon section
 * @interface IconSectionItem
 */
interface IconSectionItem {
  /** The header text for the item */
  header: string;
  /** The subheader text for the item */
  subheader: string;
  /** The image details for the item */
  image: {
    /** The URL of the image */
    url: string;
    /** The alt text for the image */
    alt: string;
  };
}

/**
 * Props for the FourColumnIconSection component
 * @interface FourColumnIconSectionProps
 */
interface FourColumnIconSectionProps {
  /** The main header for the section */
  header: string;
  /** Optional subheader for the section */
  subheader?: string;
  /** Array of items to display in the section */
  items: IconSectionItem[];
}

/**
 * FourColumnIconSection component for displaying a grid of four icon-based items
 * @param {FourColumnIconSectionProps} props - The props for the FourColumnIconSection component
 * @returns {JSX.Element} The rendered FourColumnIconSection component
 */
export const FourColumnIconSection: React.FC<FourColumnIconSectionProps> = ({
  header,
  subheader,
  items,
}) => {
  return (
    <section className="w-full py-12 lg:py-20 bg-gradient-1">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8">
          <BlurFade delay={0.2} inView>
            <HeaderSection
              header={header}
              subheader={subheader}
            />
          </BlurFade>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <IconSectionItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Props for the IconSectionItem component
 * @interface IconSectionItemProps
 */
interface IconSectionItemProps {
  /** The item to display */
  item: IconSectionItem;
  /** The index of the item for animation delay */
  index: number;
}

/**
 * IconSectionItem component for displaying a single item in the four-column icon section
 * @param {IconSectionItemProps} props - The props for the IconSectionItem component
 * @returns {JSX.Element} The rendered IconSectionItem component
 */
const IconSectionItem: React.FC<IconSectionItemProps> = ({ item, index }) => {
  return (
    <BlurFade delay={0.3 + index * 0.1} inView>
      <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
        <Image
          src={item.image.url}
          alt={item.image.alt}
          width={100}
          height={100}
          className="h-32 w-32 object-contain"
        />
        <h3 className="text-xl font-semibold text-foreground">
          {item.header}
        </h3>
        <p className="text-foreground/80">{item.subheader}</p>
      </div>
    </BlurFade>
  );
};

export default FourColumnIconSection;
