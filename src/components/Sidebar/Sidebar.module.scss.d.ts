export type Styles = {
  'admin': string;
  'icon': string;
  'link': string;
  'sider': string;
  'sider-menu': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
