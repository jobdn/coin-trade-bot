export type Styles = {
  'coin-list': string;
  'coin-list-title': string;
  'not-found': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
