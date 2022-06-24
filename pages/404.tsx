import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className='flex justify-center h-full items-center'>
      <h1 className='text-4xl border-r pr-3'>404</h1>
      <span className='pl-3'>This page could not be found</span>
    </div>
  );
}
