export type Styles = {
  'icon': string;
  'link': string;
  'sider': string;
  'sider-menu': string;
  'user-plus': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
