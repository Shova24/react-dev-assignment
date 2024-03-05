import { motion } from "framer-motion";
import React from "react";

import crisco from "../../assets/companies_icons/crisco.svg";
import deloitte from "../../assets/companies_icons/deloitte.svg";
import okta from "../../assets/companies_icons/okta.svg";
import volvo from "../../assets/companies_icons/volvo.svg";
import walmart from "../../assets/companies_icons/walmart.svg";

const Companies = () => {
  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[50vh] flex flex-col gap-12 justify-center "
    >
      <p className="text-sm text-center text-zinc-600 ">
        Trusted by 45M+ users
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex justify-center w-1/5">
          <img src={walmart} alt="walmart" className="h-12" />
        </div>

        <div className="flex justify-center w-1/5">
          <img src={crisco} alt="crisco" className="h-12" />
        </div>

        <div className="flex justify-center w-1/5">
          <img src={volvo} alt="volvo" className="h-12" />
        </div>

        <div className="flex justify-center w-1/5">
          <img src={deloitte} alt="deloitte" className="h-12" />
        </div>

        <div className="flex justify-center w-1/5 ">
          <img src={okta} alt="okta" className="h-12" />
        </div>
      </div>
    </motion.div>
  );
};

export default Companies;
