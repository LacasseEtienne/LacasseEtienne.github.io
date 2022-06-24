import { ItemNormalNav } from "./item.normal.nav";
import { navItems } from "../items.nav";
import { HomeNav } from "../home.nav";

export const BarNormalNav = () => {
  return (
    <div className="hidden sm:flex justify-between pt-3 pb-2 mx-8 border-b">
      <HomeNav />
      <div className='flex space-x-4'>
        {navItems.map((item, index) => (
          <ItemNormalNav
            key={index}
            item={item}
            justifyPanel={index === navItems.length - 1 ? 'end' : 'center'}
          />
        ))}
      </div>
    </div>
  );
};
