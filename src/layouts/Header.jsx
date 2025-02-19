import Logo from "../icons/Logo";
import { Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ProfileDropdown } from "./Dropdown";

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-white w-full sticky top-0 z-40
    "
    >
      {({ openD }) => (
        <>
          <div className="mx-auto max-w-7xl px-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {openD ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/admin">
                    <Logo />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center space-x-6">
                  </div>
                </div>
              </div>
              {/* // *************************  Profile Dropdown  *************************** */}
              <ProfileDropdown />
              {/* // *************************  Profile Dropdown  *************************** */}
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
