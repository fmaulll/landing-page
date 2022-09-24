import React, { useState } from "react";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as Tag } from "./assets/images/Tag.svg";
import HeroImage from "./assets/images/HeroImage.png";
import RentImage from "./assets/images/Rent.png";
import GlobeImage from "./assets/images/Globe.png";
import LowPriceImage from "./assets/images/LowPrice.png";
import ImageOne from "./assets/images/francesca-tosolini-tHkJAMcO3QE-unsplash 1.png";
import ImageRoom from "./assets/images/douglas-sheppard-9rYfG8sWRVo-unsplash 1.png";
import Home from "./assets/images/Home.png";
import Sleeping from "./assets/images/Sleeping.png";
import Soap from "./assets/images/Soap.png";
import TV from "./assets/images/TV.png";
import Kitchen from "./assets/images/Kitchen.png";
import Programmer from "./assets/images/Programmer.png";
import Feather from "./assets/images/Feather.png";
import Instagram from "./assets/images/Instagram.png";
import Stars from "./assets/images/Stars.png";
import Origami from "./assets/images/Origami.png";
import TwitterLogo from "./assets/images/Twitter.png";
import InstagramLogo from "./assets/images/InstagramLogo.png";
import FacebookLogo from "./assets/images/Facebook.png";
import { ReactComponent as ChevronDown } from "./assets/icons/ChevronDown.svg";
import { ReactComponent as ArrowRight } from "./assets/icons/ArrowRight.svg";
import { Carousel } from "flowbite-react";

const comments = [
  {
    comment: `“Compelling drive e-business initiatives whereas prospective users. Professionally create cross-unit “ourside the box” thinking for leading-edge people”`,
  },
  {
    comment: `“Compelling drive e-business initiatives whereas prospective users. Professionally create cross-unit “ourside the box” thinking for leading-edge people”`,
  },
  {
    comment: `“Compelling drive e-business initiatives whereas prospective users. Professionally create cross-unit “ourside the box” thinking for leading-edge people”`,
  },
  {
    comment: `“Compelling drive e-business initiatives whereas prospective users. Professionally create cross-unit “ourside the box” thinking for leading-edge people”`,
  },
  {
    comment: `“Compelling drive e-business initiatives whereas prospective users. Professionally create cross-unit “ourside the box” thinking for leading-edge people”`,
  },
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div className=" w-full bg-white">
      <div className="px-36">
        {/* header */}
        <div className="flex items-center justify-between mt-6 mb-10">
          <Logo />
          <div className="flex">
            <div className="flex items-center mr-10">
              Resources
              <ChevronDown className="ml-5" />
            </div>
            <div className="flex items-center mr-10">
              Why Landing
              <ChevronDown className="ml-5" />
            </div>
            <div className="flex items-center mr-10">Corporate Housing</div>
            <div className="flex items-center mr-10">List Your Property</div>
            <button className="flex items-center py-4 px-6 rounded-lg text-white bg-gray-400 font-semibold">
              Sign In
            </button>
          </div>
        </div>
        {/* header */}

        <div className="flex h-full w-full">
          <div className="flex-1 mr-7 flex flex-col justify-end">
            <h1 className="leading-tight font-bold text-5xl text-slate-700">
              Say hello to a<br />
              better way to live
            </h1>
            <p className="text-lg mt-5">
              Landing members have access to a nationwide network
              <br />
              of fully furnished partments with flexible leases.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="px-4 py-5 border-2 border-slate-300 rounded-xl relative">
                <label className="text-slate-300 absolute top-0">
                  Location
                </label>
                <input
                  placeholder="Where to?"
                  className="focus:outline-none w-full mt-2"
                />
              </div>
              <div className="px-4 py-5 border-2 border-slate-300 rounded-xl relative">
                <label className="text-slate-300 absolute top-0">Courier</label>
                <input
                  placeholder="Select items"
                  className="focus:outline-none w-full mt-2"
                />
              </div>
              <div className="px-4 py-5 border-2 border-slate-300 rounded-xl relative">
                <label className="text-slate-300 absolute top-0">Move-in</label>
                <input
                  placeholder="Select date"
                  className="focus:outline-none w-full mt-2"
                />
              </div>
              <div className="px-4 py-5 border-2 border-slate-300 rounded-xl relative">
                <label className="text-slate-300 absolute top-0">
                  Move-out
                </label>
                <input
                  placeholder="Select date"
                  className="focus:outline-none w-full mt-2"
                />
              </div>
            </div>
            <button className="mt-5 flex items-center justify-center w-full py-4 px-6 rounded-lg text-white bg-gray-400 font-semibold">
              Sign In
              <ArrowRight className="ml-2" />
            </button>
          </div>
          <div className="flex-1 bg-white flex justify-end relative">
            {/* <ImageHero className="z-10" /> */}
            <img src={HeroImage} />
            <Tag className="absolute bottom-0 right-0 cursor-pointer" />
          </div>
        </div>

        <div className="mt-20 mb-24">
          <h1 className="leading-tight font-semibold text-3xl text-slate-700">
            Unlock life with your
            <br />
            Landing Membership
          </h1>
          <p className="text-base mt-5 text-slate-400">
            Learn about membership
          </p>
          <div className="flex justify-between mt-14">
            <div className="flex flex-col justify-center items-center">
              <img className="w-20" src={RentImage} alt="rent" />
              <div className="mt-3">
                <h1 className="leading-tight font-semibold text-xl text-slate-700">
                  Let go of renting restrictions
                </h1>
                <p className="text-sm font-normal mt-3">
                  Book onlne or on our app, choose your move-in and
                  <br />
                  move-out dates,and transfer to any home within the
                  <br />
                  network.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-20" src={GlobeImage} alt="rent" />
              <div className="mt-3">
                <h1 className="leading-tight font-semibold text-xl text-slate-700">
                  Make a home everywhere
                </h1>
                <p className="text-sm font-normal mt-3">
                  Each fully furnished apartment in the 375+ cities within
                  <br />
                  our network is designed to feel like home no matter
                  <br />
                  which city you’re in.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="w-20" src={LowPriceImage} alt="rent" />
              <div className="mt-3">
                <h1 className="leading-tight font-semibold text-xl text-slate-700">
                  Keep more cash in your pocket
                </h1>
                <p className="text-sm font-normal mt-3">
                  There are never any application fees or deposits, unlike
                  <br />
                  other rental options
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-96 ">
        <h1 className="ml-36 mb-8 z-10 absolute leading-tight font-medium text-4xl text-white bottom-0 left-0 ">
          Enjoy all the amenities of a fully
          <br />
          furnished home
        </h1>
        <Carousel leftControl=" " rightControl=" ">
          <img src={ImageOne} alt="..." />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>

      <div className="bg-gray-200 pt-20 pb-9">
        <div className="flex h-full w-full items-center">
          <div className="flex-1 flex items-center justify-center">
            <img src={ImageRoom} />
          </div>
          <div className="flex-1 ml-28">
            <h1 className="leading-tight text-slate-800 font-semibold text-sm tracking-widest">
              BEST SERVICE
            </h1>
            <h1 className="leading-tight text-slate-800 font-semibold text-5xl">
              Every Landing <br />
              <span className="font-light">Includes</span>
            </h1>
            <div className="mt-14">
              <div className="flex items-center mb-5">
                <img src={Home} alt="home" />
                <p className="text-normal text-slate-800 ml-10">
                  <span className="font-semibold">Comfy</span>, in-house
                  designed furnishings
                </p>
              </div>
              <div className="flex items-center mb-5">
                <img src={Sleeping} alt="sleeping" />
                <p className="text-normal text-slate-800 ml-10">
                  <span className="font-semibold">Luxurious</span> sleep
                  experience
                </p>
              </div>
              <div className="flex items-center mb-5">
                <img src={Soap} alt="soap" />
                <p className="text-normal text-slate-800 ml-10">
                  <span className="font-semibold">Premium</span> amenities
                </p>
              </div>
              <div className="flex items-center mb-5">
                <img src={TV} alt="tv" />
                <p className="text-normal text-slate-800 ml-10">
                  Smart <span className="font-semibold">TVs + fast</span> Wifi
                </p>
              </div>
              <div className="flex items-center mb-5">
                <img src={Kitchen} alt="kitchen" />
                <p className="text-normal text-slate-800 ml-10">
                  <span className="font-semibold">A fully</span> A
                  fully-equipped kitchen
                </p>
              </div>
              <div className="flex items-center mb-5">
                <img src={Programmer} alt="programmer" />
                <p className="text-normal text-slate-800 ml-10">
                  <span className="font-semibold">Dedicated</span> workspaces
                </p>
              </div>
              <div className="flex items-center">
                <img src={Feather} alt="feather" />
                <p className="text-normal text-slate-800 ml-10">
                  <span className="font-semibold">Thoughtful</span> finishing
                  touches
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen bg-white px-36 ">
        <div className="flex-1 flex justify-center flex-col">
          <h1 className="leading-tight font-bold text-5xl">
            See what our members
            <br />
            have to say
          </h1>
          <div className="flex mt-20">
            {comments.map((item, index) => (
              <div
                className={`w-20 h-2 rounded mr-3 cursor-pointer ${
                  index === selectedIndex ? "bg-amber-500" : "bg-slate-300"
                }`}
                onClick={() => setSelectedIndex(index)}
              ></div>
            ))}
          </div>
          <h1 className="leading-tight font-semibold text-2xl mt-8">
            “Compelling drive e-business
            <br />
            initiatives whereas prospective
            <br />
            users. Professionally create
            <br />
            cross-unit “ourside the box” thinking
            <br />
            for leading-edge people”
          </h1>
          <div>
            <h1 className="leading-tight font-semibold text-xl mt-16">
              Google Review
            </h1>
            <img className="mt-3" src={Stars} />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <img src={Instagram} />
        </div>
      </div>

      <div className="bg-slate-900 px-36 pt-20 pb-14">
        <div className="flex justify-between">
          <div>
            <img src={Origami} />
            <p className="text-sm text-white mt-2">
              Landing is a membership-based network of furnished,
              <br />
              flexible-lease apartments across the country.
            </p>
          </div>
          <div>
            <p className="text-sm text-white">Landing</p>
            <p className="text-sm text-white mt-4 cursor-pointer">
              Members Benefits
            </p>
            <p className="text-sm text-white mt-4 cursor-pointer">Blog</p>
            <p className="text-sm text-white mt-4 cursor-pointer">About</p>
            <p className="text-sm text-white mt-4 cursor-pointer">
              Refer a Friend
            </p>
            <p className="text-sm text-white mt-4 cursor-pointer">
              Become a Host
            </p>
            <p className="text-sm text-white mt-4 cursor-pointer">
              List Your Property
            </p>
            <p className="text-sm text-white mt-4 cursor-pointer">
              Brand Ambasadors
            </p>
            <p className="text-sm text-white mt-4 cursor-pointer">Careers</p>
          </div>
          <div>
            <p className="text-sm text-white">Support</p>
            <p className="text-sm text-white mt-4 cursor-pointer">Contact Ss</p>
            <p className="text-sm text-white mt-4 cursor-pointer">FAQ</p>
            <p className="text-sm text-white mt-4 cursor-pointer">
              Terms of Service
            </p>
            <p className="text-sm text-white mt-4 cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-32">
          <div className="border-2 border-b-white" />
          <div className="flex justify-between mt-10">
            <div>
              <p className="text-sm text-white">⌂Equal Housing Opportunity</p>
              <p className="text-sm text-white mt-3">
                ©Landing 2022. All rights reserved.
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-white mt-3">415-231-1701</p>
              <div className="ml-5 flex items-center justify-center">
                <img className="w-4 cursor-pointer" src={TwitterLogo} />
                <img className="ml-2 w-4 cursor-pointer" src={InstagramLogo} />
                <img className="ml-2 w-4 cursor-pointer" src={FacebookLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
