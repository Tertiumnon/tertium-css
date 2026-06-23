export interface HSLValue {
  hue: number;
  saturation: number;
  lightness: number;
}

export interface ColorDef {
  name: string;
  hsl: HSLValue;
}

export interface ThemeConfig {
  metadata: {
    name: string;
    description: string;
    darkness: "dark" | "light";
  };
  "primary-color": ColorDef;
  "accent-color": ColorDef;
  variations: {
    "primary-light-offset": number;
    "primary-dark-offset": number;
    "accent-light-offset": number;
    "accent-dark-offset": number;
  };
  "text-colors": {
    primary: string;
    secondary: string;
    "on-primary": string;
    "on-accent": string;
    inverse: string;
  };
  borders: {
    color: string;
    "color-strong": string;
    "color-light": string;
  };
  shadows: {
    color: string;
  };
  status: {
    success: string;
    warning: string;
    danger: string;
    info: string;
  };
  backgrounds: {
    "page-offset": number;
    "card-offset": number;
    "form-offset": number;
    "form-input-offset": number;
    "button-light-offset": number;
    "button-hover-light-offset": number;
  };
}
