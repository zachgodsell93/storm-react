import * as CSS from "csstype";

export interface BasePalette {
  [k: string]: CSS.Property.Color;
}
export interface Palette {
  [k: string]: CSS.Property.Color;
}

export interface Device {
  minDevice: string;
  mobile: string;
  mobileLarge: string;
  tablet: string;
  tabletLarge: string;
  laptop: string;
  desktop: string;
  maxDevice: string;
}
