import React, { FC } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { ActivityType, ExperiencesDataType, LodgingType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";

export interface LodgingCardProps {
  className?: string;
  ratioClass?: string;
  data: LodgingType;
  size?: "default" | "small";
}

const LodgingCard: FC<LodgingCardProps> = ({
  size = "default",
  className = "",
  data,
  ratioClass = "aspect-w-3 aspect-h-3",
}) => {

  const {name, address, link, price, reviewCount, reviewStar, gallery} = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden ">
        <GallerySlider
          uniqueID={`ExperiencesCard_${name}`}
          ratioClass={ratioClass}
          galleryImgs={gallery ?? []}
          //@ts-ignore
          href={`hospedaje/${link}`}
        />
        <BtnLikeIcon isLiked={true} className="absolute right-3 top-3" />
        {/* {true && <SaleOffBadge className="absolute left-3 top-3" />} */}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "py-4 space-y-3 p-3" : "p-3 space-y-1"}>
        <div className="space-y-2">
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
            {size === "default" && <MapPinIcon className="w-4 h-4" />}
            <span className="">{address}</span>
          </div>

          <div className="flex items-center space-x-2">
            {true && <Badge name="Favorito" color="green" />}
            <h2
              className={` font-medium capitalize ${
                size === "default" ? "text-base" : "text-base"
              }`}
            >
              <span className="line-clamp-1">{name}</span>
            </h2>
          </div>
        </div>
        <div className="border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">
            ${parseFloat(price).toFixed(2)}
            {` `}
            {size === "default" && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                /noche
              </span>
            )}
          </span>
          <StartRating reviewCount={reviewCount} point={reviewStar || 0} />
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-ExperiencesCard group relative ${className}`}>
      {renderSliderGallery()}
     {/*  @ts-ignore */}
     <Link href={`hospedaje/${link}`}>{renderContent()}</Link>
    </div>
  );
};

export default LodgingCard;
