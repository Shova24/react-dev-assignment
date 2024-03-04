import { Button, Drawer, Dropdown, Select } from "antd";
import { ArrowRight, ChevronDown, Globe, Menu } from "lucide-react";
import React, { useState } from "react";

const items = [
  {
    key: "1",
    label: <a href="/1st-menu-item">1st menu item</a>,
  },
  {
    key: "2",
    label: <a href="/2nd-menu-item">2nd menu item</a>,
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
        <a
          href={`/${title}`}
          className="flex items-center font-medium gap-1 cursor-pointer hover:text-blue-600"
        >
          <span>{title}</span>
          <span>
            <ChevronDown className="w-4" />
          </span>
        </a>
      </Dropdown>
    ) : (
      <a
        href={`/${title}`}
        className="flex items-center font-medium cursor-pointer hover:text-[#4262FF]"
      >
        <span>{title}</span>
      </a>
    );
  };

  return (
    <div className="flex items-center justify-center py-4 px-2 gap-4">
      <img src="/miro.svg" alt="logo" className="h-6 w-20" />

      <div className="flex-1 flex justify-between  ">
        <div className="hidden lg:flex gap-4 ">
          <MenuItem title="Products" isNested={true} />
          <MenuItem title="Solutions" isNested={true} />
          <MenuItem title="Resources" isNested={true} />
          <MenuItem title="Enterprise" />
          <MenuItem title="Pricing" />
        </div>
        <div className="hidden lg:flex gap-4 items-center">
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
            className="w-full flex items-center justify-center  bg-blue-600 text-white text-bold"
          >
            <span>Sign up here</span>
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* for smaller screen  */}
      <div className="justify-end  flex lg:hidden">
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
            className=" flex items-center justify-center  bg-blue-600 text-white text-bold"
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
