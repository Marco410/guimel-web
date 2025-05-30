"use client";

import Heading from "@/shared/Heading";
import NcPlayIcon from "@/shared/NcPlayIcon";
import NcPlayIcon2 from "@/shared/NcPlayIcon2";
import Image from "next/image";
import React, { FC, useState } from "react";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}

export interface SectionVideosProps {
  videos?: VideoType[];
  className?: string;
}

const VIDEOS_DEMO: VideoType[] = [
  {
    id: "cywxJj8oUS8",
    title: "GTRAP UW Monitoring System x BIOARMONIA Artificial Structure",
    thumbnail:
      "https://images.pexels.com/photos/2397651/pexels-photo-2397651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "FO7BLZorUkM",
    title: "Sin Coral No Hay Caribe - Trailer",
    thumbnail:
      "https://images.pexels.com/photos/13010777/pexels-photo-13010777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "cywxJj8oUS8",
    title: "GTRAP UW Monitoring System x BIOARMONIA Artificial Structure",
    thumbnail:
      "https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "FO7BLZorUkM",
    title: "Sin Coral No Hay Caribe - Trailer",
    thumbnail:
      "https://images.pexels.com/photos/1522160/pexels-photo-1522160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "cywxJj8oUS8",
    title: "GTRAP UW Monitoring System x BIOARMONIA Artificial Structure",
    thumbnail:
      "https://images.pexels.com/photos/9004427/pexels-photo-9004427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const SectionVideos: FC<SectionVideosProps> = ({
  videos = VIDEOS_DEMO,
  className = "",
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const renderMainVideo = () => {
    const video: VideoType = videos[currentVideo];
    return (
      <div
        className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] will-change-transform"
        title={video.title}
      >
        {isPlay ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <div
              onClick={() => setIsPlay(true)}
              className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
            >
              <NcPlayIcon />
            </div>

            <Image
              fill
              className="object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 "
              src={video.thumbnail}
              title={video.title}
              alt={video.title}
              sizes="(max-width: 1000px) 100vw,
                (max-width: 1200px) 75vw,
                50vw"
            />
          </>
        )}
      </div>
    );
  };

  const renderSubVideo = (video: VideoType, index: number) => {
    if (index === currentVideo) return null;
    return (
      <div
        className="group relative aspect-h-16 aspect-w-16 rounded-2xl cursor-pointer overflow-hidden sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9 "
        onClick={() => {
          setCurrentVideo(index);
          !isPlay && setIsPlay(true);
        }}
        title={video.title}
        key={String(index)}
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <NcPlayIcon2 />
        </div>
        <Image
          fill
          className="object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-300 "
          src={video.thumbnail}
          title={video.title}
          alt={video.title}
          sizes="(max-width: 300px) 100vw,
          (max-width: 1200px) 50vw,
          25vw"
        />
      </div>
    );
  };

  return (
    <div className={`nc-SectionVideos ${className}`}>
      <Heading
        desc="Documentamos. Conectamos. Protegemos."
      >
        🎬 Exploramos con propósito
      </Heading>
      <span className="block mt-2 mb-2 md:mt-3 font-normal text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
        Nuestra comunidad no solo viaja, también genera impacto. Cada experiencia GScouting es una oportunidad para conocer y registrar lugares únicos, probar rutas nuevas y apoyar proyectos de regeneración. Aquí te compartimos lo que estamos construyendo juntos:
      </span>
      <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"></div>
        <div className="flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
          {renderMainVideo()}
        </div>
        <div className="flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40">
          {videos.map(renderSubVideo)}
        </div>
      </div>
    </div>
  );
};

export default SectionVideos;
