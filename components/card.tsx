import { CultureCardProps } from '@/types';

export default function Card({ name, url, altText, bullets }: CultureCardProps) {
  return (
    <div className="fade-in-up mr-8 ml-8 mt-10">
      <h1 className='max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 bg-gray-800 ml-40 text-center rounded-lg p-2'>{name}</h1>
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-6 bg-gray-800">
        <img src={url} alt={altText} className="w-auto h-48 object-cover rounded-md mb-4" />
        <ul className="text-lg font-medium list-disc list-inside">
          {bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}