import Image from "next/image";
import Link from "next/link";
import { HeaderSection } from "./header-section";

/**
 * Interface for a blog category
 * @interface BlogCategory
 */
interface BlogCategory {
  /** The title of the category */
  title: string;
  /** The description of the category */
  description: string;
  /** The icon for the category */
  icon: string;
  /** The link to the category page */
  href: string;
}

/**
 * Array of blog categories
 * @type {BlogCategory[]}
 */
const categories: BlogCategory[] = [
  {
    title: "Web Development",
    description: "Expertly crafted websites and web apps tailored to elevate your business. Proven results driving growth and exceeding expectations.",
    icon: "/icons/web-development.svg",
    href: "#",
  },
  {
    title: "SEO",
    description: "Elevate your online presence with expert SEO services. Boost your website's visibility, attract targeted traffic, and achieve lasting growth.",
    icon: "/icons/seo.svg",
    href: "#",
  },
  {
    title: "Digital Marketing",
    description: "Ignite your brand with strategic digital marketing campaigns. Increase reach, engagement, and conversions through targeted solutions.",
    icon: "/icons/digital-marketing.svg",
    href: "#",
  },
  {
    title: "UI/UX Design",
    description: "Craft intuitive, user-centric interfaces for seamless digital experiences. Enhance usability and drive customer satisfaction.",
    icon: "/icons/project-design.svg",
    href: "#",
  },
  {
    title: "Consultation and Strategy Development",
    description: "Unlock your business potential with expert consultation and data-driven strategies. Achieve your goals and stay ahead of the curve.",
    icon: "/icons/consultation-strategy.svg",
    href: "#",
  },
];

/**
 * BlogCategories component for displaying a grid of blog categories
 * @returns {JSX.Element} The rendered BlogCategories component
 */
export default function BlogCategories(): JSX.Element {
  return (
    <section className="w-full py-12 bg-gradient-1">
      <div className="container mx-auto px-4">
        <HeaderSection
          header="Explore Our Blog Categories"
          subheader="Discover a wealth of knowledge across a diverse range of topics."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * CategoryCard component for displaying a single blog category
 * @param {Object} props - The props for the CategoryCard component
 * @param {BlogCategory} props.category - The category to display
 * @returns {JSX.Element} The rendered CategoryCard component
 */
function CategoryCard({ category }: { category: BlogCategory }): JSX.Element {
  return (
    <Link
      href={category.href}
      prefetch={false}
      className="flex flex-col items-center text-center rounded-lg bg-card text-card-foreground p-6 transition-all hover:shadow-lg hover:bg-primary hover:text-primary-foreground"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <Image
          src={category.icon}
          width={64}
          height={64}
          alt={`${category.title} icon`}
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{category.title}</h3>
      <p className="mt-2 text-sm">{category.description}</p>
    </Link>
  );
}
