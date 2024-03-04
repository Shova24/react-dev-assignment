import React from "react";
import crisco from "../assets/companies_icons/crisco.svg";
import deloitte from "../assets/companies_icons/deloitte.svg";
import okta from "../assets/companies_icons/okta.svg";
import volvo from "../assets/companies_icons/volvo.svg";
import walmart from "../assets/companies_icons/walmart.svg";

const Companies = () => {
  return (
    <div>
      <p className="text-center">Trusted by 45M+ users</p>
      <div className="bg-zinc-200 flex justify-between items-center w-full">
        <div className="w-1/5 flex justify-center">
          <img src={walmart} alt="walmart" />
        </div>

        <div className="w-1/5 flex justify-center">
          <img src={crisco} alt="crisco" />
        </div>

        <div className="w-1/5 flex justify-center">
          <img src={volvo} alt="volvo" />
        </div>

        <div className="w-1/5 flex justify-center">
          <img src={deloitte} alt="deloitte" />
        </div>

        <div className="w-1/5 flex justify-center">
          <img src={okta} alt="okta" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
