import Card from "../../../components/card";
import { Culture, Facts, CultureCardProps } from "../../../types/index";

export default async function CulturePage({ params }: { params: { cultureId: string } }) {
  const { cultureId } = params;

  const cultureRes = await fetch(`http://localhost:8080/cultures/${cultureId}`, {
    cache: "no-store",
  });
  const factsRes = await fetch(`http://localhost:8080/facts/${cultureId}`, {
    cache: "no-store",
  });

  const culture: Culture = await cultureRes.json();  
  const fact: Facts = await factsRes.json();          

  const combined: CultureCardProps = {
    ...culture,
    bullets: fact?.bullets ?? [],
  };

  return (
    <div>
      <p>Welcome to the page! {cultureId}</p>
      <Card {...combined} />
    </div>
  );
}