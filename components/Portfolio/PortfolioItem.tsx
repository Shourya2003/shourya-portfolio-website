import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PortfolioItemProps {
  imageSrc: StaticImageData;
  category: string;
  projectTitle: string;
  slug: string;
}

const PortfolioItem = ({
  imageSrc,
  category,
  projectTitle,
  slug,
}: PortfolioItemProps) => {
  return (
    <div className={`col-12 col-xl-6 portfolio-item ${category}`}>
      <div className="portfolio-box">
        <Image
          src={imageSrc}
          alt={projectTitle}
          placeholder="blur"
          sizes="(max-width: 1200px) 100vw, 50vw"
        />
        <span className="portfolio-category">{category}</span>
        <div className="portfolio-caption">
          <h2>
            <Link href={`portfolio/${slug}`}>{projectTitle}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
