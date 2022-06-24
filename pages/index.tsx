import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex justify-center h-full items-center space-x-2 px-8'>
      <div className='flex flex-col font-mono'>
        <h1 className='text-4xl font-extrabold'>Étienne</h1>
        <h1 className='text-4xl font-extrabold'>Lacasse</h1>
        <h1 className='text-lg mt-2'>Enseignant en techniques</h1>
        <h1 className='text-lg'>de l&apos;informatique</h1>
      </div>
      <div className='w-96 rounded-3xl overflow-hidden'>
        <Image
          src='/etienne-lacasse.jpg'
          width={2698}
          height={2355}
          layout='responsive'
          alt='Photo'
        />
      </div>
    </div>
  )
}
