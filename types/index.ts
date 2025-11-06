export type Culture ={
    cultureId: number;
    name: string;
    url: string;
    altText: string;
}

export type Facts = {
    cultureId: number;
    factsId: number;
    bullet1?: string;
    bullet2?: string;
    bullet3?: string;
    bullet4?: string;
}

export type CultureCardProps = Culture & Partial<Facts>;