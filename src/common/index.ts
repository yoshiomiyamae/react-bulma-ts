export * from './responsiveness';
export * from './color';
export * from './gradient';
export * from './size';
export * from './base-component';

export const classNameBuilder = (classNames: (string | null | undefined)[]) => (classNames.filter((className) => className) as string[]).reduce((previousValue, currentValue) => `${previousValue} ${currentValue}`);