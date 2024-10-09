export type FooterSections = {
  SECTIONS: Section[];
  COPYRIGHT: string;
};

export type Section = {
  TITLE: string;
  LINKS: Link[];
};

export type Link = {
  name?: string;
  href: string;
  svgIcon?: string;
  data?: string;
};
