/** Interface to configure kitter.js defaults */
export interface KitterConfig {
  styles?: {
    documentation?: {
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
    color?: {
      colorSwatch?: {
        size?: string;
        radius?: string;
        shadow?: string;
        colorCodeStyle?: string;
        labelStyle?: string;
      };
    };
  };
}

let config: KitterConfig = {};

export const setKitterConfig = (newConfig: KitterConfig) => {
  config = newConfig;
};

export const getKitterConfig = (): KitterConfig => config;

export const initializeKitter = (newConfig: KitterConfig) => {
  setKitterConfig(newConfig);
};
