import { ColumnGap, ColumnOffset, ColumnSize, ColumnThickness } from "../column";
import { HorizontalAlignment, TextAlignment, VerticalAlignment } from "./alignment";

export enum Responsiveness {
  Default =  '',
  Mobile = 'mobile',
  Tablet = 'tablet',
  TabletOnly = 'tablet-only',
  Desktop = 'desktop',
  DesktopOnly = 'desktop-only',
  Widescreen = 'widescreen',
  WidescreenOnly = 'widescreen-only',
  FullHD = 'fullhd',
}

export const addResponsiveness = (baseModifier: any, responsiveness: Responsiveness) => {
  return `${baseModifier}-${responsiveness}`;
}