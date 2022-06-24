import { Popover, Transition } from "@headlessui/react";
import { classNames } from "utils";
import { MenuIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { navItems } from "../items.nav";
import { ItemSmallNav } from "./item.small.nav";
import { HomeNav } from "../home.nav";

export const BarSmallNav = () => {
  return (
    <div className='sm:hidden pt-3 pb-2 px-1 mx-8 border-b flex justify-between items-center'>
      <HomeNav />
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
              )}
            >
              <MenuIcon className='h-10' />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className='absolute left-0 right-0 z-10 transform bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='flex flex-col px-3 py-2'>
                  {navItems.map((item, index) => (
                    <ItemSmallNav key={index} item={item} />
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )
        }
      </Popover >
    </div>
  );
};