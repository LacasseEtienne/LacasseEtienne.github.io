import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { classNames } from "utils";
import { NavItemType } from "../items.nav";

type Props = {
  item: NavItemType
}

export const ItemSmallNav = ({ item }: Props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg hover:bg-gray-50 px-4 py-2 text-left focus:outline-none">
            <span className="text-lg font-medium">{item.name}</span>
            <ChevronUpIcon
              className={classNames(
                'h-5 w-5',
                open ? 'rotate-180 transform' : ''
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className='pl-4 space-y-2'>
            {item.content.map((item, index) => (
              <Link key={index} href={item.href}>
                <button className="text-gray-900 px-3 py-1 rounded-lg hover:bg-gray-50 w-full text-left">
                  {item.name}
                </button>
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
