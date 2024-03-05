import { Button, Drawer, Dropdown, Select } from "antd";
import { ArrowRight, ChevronDown, Globe, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <Link to="#">1st menu item</Link>,
  },
  {
    key: "2",
    label: <Link to="#">2nd menu item</Link>,
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const MenuItem = ({ title, isNested = false }) => {
    return isNested ? (
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
        arrow
      >
        <Link
          to="#"
          className="flex items-center gap-1 font-medium cursor-pointer hover:text-blue-600"
        >
          <span>{title}</span>
          <span>
            <ChevronDown className="w-4" />
          </span>
        </Link>
      </Dropdown>
    ) : (
      <Link
        to="#"
        className="flex items-center font-medium cursor-pointer hover:text-[#4262FF]"
      >
        <span>{title}</span>
      </Link>
    );
  };

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4">
      <img src="/miro.svg" alt="logo" className="w-20 h-6" />

      <div className="flex justify-between flex-1 ">
        <div className="hidden gap-4 lg:flex ">
          <MenuItem title="Products" isNested={true} />
          <MenuItem title="Solutions" isNested={true} />
          <MenuItem title="Resources" isNested={true} />
          <MenuItem title="Enterprise" />
          <MenuItem title="Pricing" />
        </div>

        <div className="items-center hidden gap-4 lg:flex">
          <Select defaultValue="en" suffixIcon={null} className="border-0">
            <Select.Option value="en">
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> <span>EN</span>
              </p>
            </Select.Option>
            <Select.Option value="bn">
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> <span>BN</span>
              </p>
            </Select.Option>
          </Select>
          <MenuItem title="Contact" />
          <MenuItem title="Sales" />
          <MenuItem title="Login" />
          <Button
            type="primary"
            size="large"
            shape="round"
            className="flex items-center justify-center w-full text-white bg-blue-600 text-bold"
          >
            <span>Sign up here</span>
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* for smaller screen  */}
      <div className="flex justify-end lg:hidden">
        <Menu className="h-8 cursor-pointer" onClick={() => setOpen(true)} />
      </div>
      <Drawer onClose={() => setOpen(false)} open={open}>
        <div className="flex flex-col justify-between h-full ">
          <div className="space-y-2">
            <MenuItem title="Products" isNested={true} />
            <MenuItem title="Solutions" isNested={true} />
            <MenuItem title="Resources" isNested={true} />
            <MenuItem title="Enterprise" />
            <MenuItem title="Pricing" />
            <MenuItem title="Contact" />
            <MenuItem title="Sales" />
            <MenuItem title="Login" />
          </div>
          <Button
            type="primary"
            size="large"
            shape="round"
            className="flex items-center justify-center text-white bg-blue-600 text-bold"
          >
            <span>Sign up here</span>
            <ArrowRight />
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
