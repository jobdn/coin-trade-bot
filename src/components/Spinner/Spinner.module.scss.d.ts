export type Styles = {
  'col': string;
  'row': string;
  'spinner': string;
  'under-title': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
