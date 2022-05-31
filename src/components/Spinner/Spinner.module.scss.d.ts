export type Styles = {
  'col': string;
  'row': string;
  'spinner': string;
  'undertitle': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
