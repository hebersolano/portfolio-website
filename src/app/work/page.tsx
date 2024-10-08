"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SliderButtons from "@/components/SliderButtons";

import { projects } from "@/entities/projects";

function WorkPage() {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper: SwiperClass) {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[40%] flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/*stack */}
              <ul>
                {project.stack.map((item, i) => (
                  <li key={i} className="text-xl text-accent">
                    {item.name}
                    {i !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[60%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-520px mb-12"
            >
              {projects.map((project, i) => (
                <SwiperSlide key={i} className="w-full">
                  <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>
                    {/* image */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt="project image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons  */}
              <SliderButtons
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyle=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WorkPage;
