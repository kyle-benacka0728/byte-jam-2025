
export type Culture = {
  cultureId: number;
  name: string;
  url: string;
  altText: string;
};


export type Facts = {
  cultureId: number;
  factsId: number;
  bullets: string[]; 
};


export type CultureCardProps = Culture & {
  bullets: string[];
};