interface Link {
  text: string;
  href: string;
}

export interface Creation {
  id: string;
  href: string;
  title: string;
  date: Date;
  images?: string[];
  description?: string;
  descriptionJa?: string;
  links?: Link[];
  linksJa?: Link[];
}
