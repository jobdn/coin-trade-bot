export type Styles = {
  'error': string;
  'text': string;
  'title': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
