import { CultureCardProps } from '@/types';

export default function Card({ name, url, altText, bullets }: CultureCardProps) {
  return (
    <div className="fade-in-up mr-8 ml-8">
      <h1>{name}</h1>
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-6">
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