import link from "/icons/link.png";
import figma from "/icons/figma.png";
import linkedin from "/icons/linkedin.png";
import instagram from "/icons/instagram.png";
import dribble from "/icons/dribble.png";
import behance from "/icons/behance.png";

export interface SocialNetworkProps {
  name: string;
  imgLink: string;
  url: string;
}

export const socialNetwork: SocialNetworkProps[] = [
  { name: "Website", imgLink: link, url: "https://www.google.com" },
  { name: "Figma", imgLink: figma, url: "https://www.figma.com" },
  { name: "LinkedIn", imgLink: linkedin, url: "https://www.linkedin.com" },
  { name: "Instagram", imgLink: instagram, url: "https://www.instagram.com" },
  { name: "Dribble", imgLink: dribble, url: "https://www.dribbble.com" },
  { name: "Behance", imgLink: behance, url: "https://www.behance.net" },
];
