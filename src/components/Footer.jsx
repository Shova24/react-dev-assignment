import { Button, Input } from "antd";
import dayjs from "dayjs";
import { Facebook, Minus, Twitter, Youtube } from "lucide-react";
import React from "react";

import c_icon from "../assets/footer/c_icon.png";

const Footer = () => {
  const FooterMenuItem = ({ text }) => (
    <p className="flex items-center gap-2 cursor-pointer">
      <Minus className="w-2" strokeWidth={6} />
      <span>{text}</span>
    </p>
  );

  return (
    <div className="grid justify-between grid-cols-1 gap-16 px-8 py-12 mt-4 text-xs font-light text-white md:grid-cols-2 bg-blue-950 min-w-2xl md:px-16 xl:px-24">
      <div className="space-y-8">
        <div className="grid justify-start grid-cols-1 gap-16 sm:grid-cols-2 md:justify-between">
          <div className="space-y-4">
            <p className="font-bold text-md">Scan. Detect. Remove.</p>

            <div className="flex gap-8 ">
              <Twitter className="w-6 h-6 cursor-pointer" />
              <Facebook className="w-6 h-6 cursor-pointer" />
              <Youtube className="w-6 h-6 cursor-pointer" />
            </div>

            <p className="space-x-4">
              <span className="underline cursor-pointer" role="button">
                Privacy Policy
              </span>
              <span className="underline cursor-pointer" role="button">
                Privacy Policy
              </span>{" "}
            </p>

            <div className="space-y-4">
              <p>
                Copyright © {dayjs().format("YYYY")} Certo Software Limited |
                Registered in England & Wales No. 10072356
              </p>

              <p>
                Designed & developed by{" "}
                <span className="underline">Bigger Picture </span>{" "}
              </p>
            </div>
          </div>

          <div className="space-y-4 font-semibold text-amber-400 text-md">
            <p className="text-lg font-bold">Miro</p>
            <hr />
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-1">
              <FooterMenuItem text="iPhone" />
              <FooterMenuItem text="Android" />
              <FooterMenuItem text="Help" />
              <FooterMenuItem text="About" />
              <FooterMenuItem text="iPhone" />
              <FooterMenuItem text="Insights" />
            </div>
          </div>
        </div>

        <p className="text-xs">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </div>

      <div className="flex items-center justify-center text-black">
        <div className="relative z-10 p-12 space-y-4 bg-amber-500 rounded-xl">
          <img
            src={c_icon}
            alt=""
            className="absolute top-0 right-[34%]  h-auto opacity-40"
          />
          <p className="text-2xl font-bold">Sign up to our newsletter</p>
          <p>
            Receive the latest mobile security news, exclusive discounts &
            offers straight to your inbox!
          </p>
          <div className="relative flex items-center justify-center">
            <Input
              size="large"
              placeholder="Email address"
              className="rounded-3xl"
            />
            <Button
              size="large"
              className="absolute right-0 px-8 text-sm font-semibold text-white border-0 rounded-l-none rounded-r-3xl bg-blue-950 "
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
