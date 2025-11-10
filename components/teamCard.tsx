

export default function TeamCard({name , url, altText, desc}: {name: string, url: string, altText: string, desc: string}) {
  return (
    <div className="fade-in-up mr-8 ml-8">
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-6 bg-gray-800">
        <h1>{name}</h1>
        <img src={url} alt={altText} className="w-auto h-48 object-cover rounded-md mb-4" />
        <p>{desc}</p>
    
        
      </div>
    </div>
  );
}