
interface CardProps {
    imgSrc: string;
    text: string;
    altText: string;
    title: string;

};

export default function Card({ imgSrc, text, altText,title }: CardProps) {
    return (
        
        <div className ="fade-in-up mr-8 ml-8">
            <h1>{title}</h1>
            
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-6 ">
                <img src={imgSrc} alt={altText} className="w-auto h-48 object-cover rounded-md mb-4 " />
                <p className="text-center text-lg font-medium text-wrap">{text}</p>
            </div>
        </div>
    
        
        
    );
}