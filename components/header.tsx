import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className='w-full px-4'>
      <Nav.NormalBar />
      <Nav.SmallBar />
    </header>
  );
};