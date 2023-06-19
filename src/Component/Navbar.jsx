import React from "react";
import Search from "../svg/search.svg";
import Notifi from "../svg/notification.svg";
import Message from "../svg/messagequ.svg";
import Calender from "../svg/calendar.svg";
import Arrowsquareup from "../svg/arrowsquareup.svg";
import Attach from "../svg/attach.svg";
import Addsquare1 from "../svg/addsquare1.svg";
import Calenderdark from "../svg/calda.svg";
import Profileuser from "../svg/profileuser.svg";
import Fourwheel from "../svg/fourwheel.svg";
import Barbtn from "../svg/barbutton.svg";
import Profile from "../svg/profile.svg";

import { IoIosArrowDown } from "react-icons/io";
import { BiFilterAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-[#DBDBDB] border-b md:px-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around md:justify-between mx-auto xs:p-2 md:px-4 py-3.5">
          <form className="lg:w-[400px] xs:w-[100px]">
            <img
              src={Search}
              alt="search"
              className="w-5 h-5 text-gray-500 block md:hidden "
            />
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img
                  src={Search}
                  alt="search"
                  className="w-5 h-5 text-gray-500 "
                />
              </div>
              <input
                type="search"
                className="block font-normal h-[44px] text-[14px] w-full pl-10 text-sm text-gray-900 border border-[#F5F5F5] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search for anything..."
                required
              />
            </div>
          </form>

          <div className="flex items-center">
            <div className="items-center justify-between  flex w-auto mr-12 space-x-6">
              <img src={Calender} alt="calender" className="w-5 h-5" />
              <img src={Message} alt="messgae" className="w-5 h-5" />
              <img src={Notifi} alt="notifications" className="w-5 h-5" />
            </div>
            <div className="m-2 hidden md:block">
              <p className="font-normal	text-base leading-5 text-right text-[#0D062D]">
                Anima Agrawal
              </p>
              <p className="font-normal text-[14px] leading-4 text-right text-[#787486]">
                U.P, India
              </p>
            </div>
            <button
              type="button"
              className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={Profile}
                alt="user photo"
              />
            </button>
            <div className="m-2">
              <IoIosArrowDown />
            </div>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-around md:justify-between mx-auto xs:p-2 md:px-8 pt-7">
        <div className=" flex items-center m-2 justify-start  gap-4 h-full">
          <p className="font-semibold text-2xl lg:text-[46px] leading-14 text-capitalize text-[#0D062D]">
            Mobile App
          </p>
          <img src={Arrowsquareup} alt="arrowsquareup" />
          <img src={Attach} alt="attach" />
        </div>
        <div className="flex items-center m-2  gap-4 h-full lg:justify-end sm:justify-start">
          <img src={Addsquare1} alt="attach" />
          <p className="font-medium text-base leading-5 capitalize text-purple-600">
            invite
          </p>
          <div className="flex -space-x-3">
            <img
              className="w-10 h-10 object-cover border-2 border-white rounded-full dark:border-gray-800"
              src="./img/user2.png"
              alt="user"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="./img/user6.png"
              alt="user"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="./img/user1.png"
              alt="user"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="./img/user3.png"
              alt="user"
            />
            <a
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-[#D25B68] bg-[#F4D7DA] border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +2
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around md:justify-between mx-auto xs:p-2 md:px-8 pt-7">
        <div className=" flex items-center m-2 justify-start gap-4 h-full">
          <div class="dropdown inline-block relative">
            <button class="bg-white border border-gray-400 rounded-md text-[16px] font-medium text-[#787486] py-2 px-4 inline-flex items-center">
              <BiFilterAlt className="text-[#787486] mr-2" />
              <span class="mr-1">Filter</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
          </div>
          <div class="dropdown inline-block relative">
            <button class="bg-white border border-gray-400 rounded-md text-[16px] font-medium text-[#787486] py-2 px-4 inline-flex items-center">
              <img src={Calenderdark} alt="Calenderdark" className="mr-2" />
              <span class="mr-1">Today</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
          </div>
          <div class="dropdown inline-block relative md:hidden">
            <button class="bg-white border border-gray-400 rounded-md text-[16px] font-medium text-[#787486] py-2 px-4 inline-flex items-center">
              <img src={Profileuser} alt="Profileuser" className="mr-2" />
              <span class="mr-1">Share</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
          </div>
        </div>
        <div className="md:flex items-center m-2  gap-4 h-full lg:justify-end sm:justify-start hidden ">
          <button
            type="button"
            className="text-[#787486] gap-3 bg-white border border-[#787486] focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
          >
            <img src={Profileuser} alt="Profileuser" />
            Share
          </button>
          <div className="border-l  border-[#787486] h-8"></div>
          <img src={Barbtn} alt="Barbtn" />
          <img src={Fourwheel} alt="Fourwheel" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
