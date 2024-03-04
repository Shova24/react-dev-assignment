import React from "react";
import crisco from "../../assets/companies_icons/crisco.svg";
import deloitte from "../../assets/companies_icons/deloitte.svg";
import okta from "../../assets/companies_icons/okta.svg";
import volvo from "../../assets/companies_icons/volvo.svg";
import walmart from "../../assets/companies_icons/walmart.svg";

const Companies = () => {
  return (
    <div className="space-y-8">
      <p className="text-center text-sm text-zinc-600 ">
        Trusted by 45M+ users
      </p>
      <div className="flex justify-between items-center w-full">
        <div className="w-1/5 flex justify-center">
          <img src={walmart} alt="walmart" className="h-12" />
        </div>

        <div className="w-1/5 flex justify-center">
          <img src={crisco} alt="crisco" className="h-12" />
        </div>

        <div className="w-1/5 flex justify-center">
          <img src={volvo} alt="volvo" className="h-12" />
        </div>

        <div className="w-1/5 flex justify-center">
          <img src={deloitte} alt="deloitte" className="h-12" />
        </div>

        <div className="w-1/5 flex justify-center ">
          <img src={okta} alt="okta" className="h-12" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
