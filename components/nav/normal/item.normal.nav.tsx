import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import Link from "next/link";
import { classNames } from "utils";
import { NavItemType } from "../items.nav";

type Props = {
  item: NavItemType
  justifyPanel: "start" | "end" | "center",
}

export const ItemNormalNav = ({ item, justifyPanel }: Props) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-gray-900' : 'text-gray-500',
              'group inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none h-full'
            )}
          >
            <span>{item.name}</span>
            <ChevronDownIcon
              className={classNames(
                open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500'
              )}
              aria-hidden="true"
            />
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
            <Popover.Panel
              className={classNames(
                'absolute z-10 mt-3 transform w-full flex',
                justifyPanel === "center" ? 'justify-center' : '',
                justifyPanel === "end" ? 'justify-end' : '',
                justifyPanel === "start" ? 'justify-start' : '',
              )}
            >
              <div className="rounded-lg w-max max-w-xs fixed shadow-lg ring-1 ring-black ring-opacity-5 flex flex-col bg-white px-3 py-2">
                {item.content.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <button className="text-base font-medium text-gray-900 p-3 rounded-lg hover:bg-gray-50">
                      {item.name}
                    </button>
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )
      }
    </Popover >
  );
};
