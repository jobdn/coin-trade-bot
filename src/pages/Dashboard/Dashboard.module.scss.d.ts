export type Styles = {
  'card': string;
  'col': string;
  'dashboard': string;
  'row': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
