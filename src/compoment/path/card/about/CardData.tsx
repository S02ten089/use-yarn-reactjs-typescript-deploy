import { SocialLinks, Css } from ".";

export interface CardData {
  id: number;
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socials: SocialLinks;
  profileImage: string;
  css: Css;
  link: string;
}
