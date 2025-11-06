import Card from "../../../components/card";
import { Culture, Facts, CultureCardProps } from "../../../types/index";


export default async function CulturePage({ params }: { params: { cultureId: string } }) {
  const { cultureId } = await (params);

 /* const cultureRes = await fetch("http://localhost:8080/cultures/${cultureId}", {
    cache: "no-store",
  });
  const factsRes = await fetch("http://localhost:8080/facts/${cultureId}", {
    cache: "no-store",
  });
  const cultures: Culture[] = await cultureRes.json();
  const facts: Facts[] = await factsRes.json();

  const combined: CultureCardProps[] = cultures.map((c) => ({
    ...c,
    ...facts.find((f) => f.cultureId === c.cultureId),
  }));*/

  return (
    <div>
      <p>Welcome to the page! {cultureId}</p>

      {/*{combined.map((item) => (
        <Card key={item.cultureId} {...item} />
      ))} */}
    </div>
  );
}
