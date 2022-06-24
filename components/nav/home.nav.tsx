import Link from "next/link";

export const HomeNav = () => {
  return (
    <Link href={'/'}>
      <button className="text-lg font-medium text-gray-900 p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
        ÉTIENNE
        LACASSE
      </button>
    </Link>
  )
};