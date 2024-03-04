import { Input } from "antd";
import dayjs from "dayjs";
import { Facebook, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-16 justify-between font-light text-white bg-blue-950 mt-4 min-w-2xl px-8 py-12 md:px-16 xl:px-24 text-sm">
      <div className="space-y-8">
        <div className="flex justify-between">
          <div className="space-y-4">
            <p className="italic font-bold text-md">Scan. Detect. Remove.</p>

            <div className="flex gap-8">
              <Twitter />
              <Facebook />
              <Youtube />
            </div>
            <p className="space-x-4">
              <span className="underline">Privacy Policy</span>{" "}
              <span className="underline">Privacy Policy</span>
            </p>

            <div className="space-y-4">
              <p>
                Copyright © {dayjs().format("YYYY")} Certo Software Limited |
                Registered in England & Wales No. 10072356
              </p>

              <p>Designed & developed by Bigger Picture</p>
            </div>
          </div>

          <div className="text-amber-400 font-semibold text-md space-y-4">
            <p className="font-bold text-lg">Miro</p>
            <hr />

            <p>-iPhone</p>
            <p>-Android</p>
            <p>-Help</p>
            <p>-About</p>
            <p>-Insights</p>
          </div>
        </div>

        <p className="text-xs">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </div>

      <div className="flex items-center text-black">
        <div className="bg-amber-400 p-8 rounded-lg space-y-4">
          <p className="text-2xl font-bold">Sign up to our newsletter</p>
          <p>
            Receive the latest mobile security news, exclusive discounts &
            offers straight to your inbox!
          </p>
          <Input size="large" placeholder="Email address" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
