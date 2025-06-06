"use client"

import React, { FC } from "react";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import SearchDropdown from "../../app/template/(client-components)/(Header)/SearchDropdown";
import ButtonPrimary from "@/shared/ButtonPrimary";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import { useUser } from "context/UserContext";
import AvatarDropdown from "../../app/template/(client-components)/(Header)/AvatarDropdown";
import HeroSearchForm2Mobile from "@/components/Guimel/HeroSearchForm2Mobile";

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = ""}) => {
  const { user, loading } = useUser();
  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 lg:container h-20 relative flex justify-between">
        <div className="hidden md:flex justify-start flex-1 space-x-4 sm:space-x-10">
          <Logo className="w-24 self-center" imgLight={{src:"/logo-light.svg",height:280, width:280}} img={{src:"/logo-dark.svg",height:280, width:280}} />
          <div className="md:flex justify-center flex-1" >
            <Navigation />
          </div>
        </div>

        <div className="flex lg:hidden flex-[3] max-w-lg !mx-auto md:px-3 ">
          <div className="self-center flex-1">
            <HeroSearchForm2Mobile />
          </div>
        </div>

        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex space-x-0.5">
            <SwitchDarkMode />
            <SearchDropdown className="flex items-center" />
            <div className="px-1" />
            {
              (user && !loading) 
              ?
              <>
                <AvatarDropdown user={user} />
              </>
              :
              <ButtonPrimary className="self-center" href="/login">
                Iniciar Sesión
              </ButtonPrimary>
            }
          </div>

          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
