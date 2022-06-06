export type Styles = {
  'coin-item': string;
  'coin-item-col': string;
  'coin-list': string;
  'coin-list-title': string;
  'coin-list-title-col': string;
  'coins-title': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
