/** Interface to configure kitter.js defaults */
export interface KitterConfig {
  styles?: {
    documentation?: {
      className?: string;
      maxWidth?: string | number;
    };
    scrollToTop?: {
      textClassName?: string;
      iconClassName?: string;
      iconColor?: string;
      textOverride?: string;
    };
    page?: {
      className?: string;
      center?: boolean;
    };
    pageTitle?: {
      className?: string;
    };
    pageDescription?: {
      className?: string;
    };
    pageSection?: {
      titleClassName?: string;
    };
    documentContents?: {
      className?: string;
    };
  };
}

let config: KitterConfig = {};

export const setKitterConfig = (newConfig: KitterConfig) => {
  config = newConfig;
};

export const getKitterConfig = (): KitterConfig => config;
