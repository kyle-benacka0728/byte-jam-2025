
import { Culture, CultureCardProps } from '@/types';

export default function Card({ name, url, altText, bullet1, bullet2, bullet3, bullet4}: CultureCardProps) {
    const bullets = [bullet1, bullet2, bullet3, bullet4].filter(Boolean);
    return (
        
        <div className ="fade-in-up mr-8 ml-8">
            <h1>{name}</h1>
            
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-6 ">
                <img src={url} alt={altText} className="w-auto h-48 object-cover rounded-md mb-4 " />
                <p className="text-center text-lg font-medium text-wrap">{bullets}</p>
            </div>
        </div>
    
        
        
    );
}