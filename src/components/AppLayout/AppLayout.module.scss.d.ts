export type Styles = {
  'content': string;
  'layout': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
