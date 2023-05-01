import { ReactNode } from "react";

export interface ContextsProps {
  children: ReactNode;
}

export interface IWebContent {
  HEADER: {
    ICON: string;
    NAVBAR: string[];
    LANGUAGES: string[];
  };
  PRIVACY: {
    description: string;
    link: {
      text: string;
      href: string;
    };
  };
  ABOUT: {
    title: string;
    description: string;
  };
  FRAME: {
    title: string;
    description: string;
    link: string;
    backgroundIMG: string;
    icons: string;
  }[];
  SOCIALMEDIA: {
    icon: string;
    platform: string;
    link: string;
  }[];
  FIND: {
    about: {
      title: string;
      description: string;
      link: string;
    };
    search: undefined[];
    background: string;
  };
  SERVICE: {
    title: string;
    services: {
      title: string;
      description: string;
      link: string;
    }[][];
  };
  CHECKTEAM: {
    sentence: string;
    link: {
      title: string;
      href: string;
    };
  };
  MESSAGES: string;
  FOOTER: {
    links: {
      title: string;
      href: string[];
    }[];
  };
  SUBFOOTER: {
    terms: {
      description: string;
      href: string;
    };
    policy: {
      description: string;
      href: string;
    };
  };
}
