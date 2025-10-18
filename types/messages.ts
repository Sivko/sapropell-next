export interface Messages {
  header: {
    logo: string;
    home: string;
    contact: string;
  };
  main: {
    logo: string;
    title: string;
    subtitle: string;
  };
  parallax: {
    microelements: string;
    vitamins: string;
  };
  info: {
    naturalComponents: string;
    percentage: string;
    description: string;
  };
  footer: {
    text: string;
  };
}

export type Locale = 'ru' | 'zh';
