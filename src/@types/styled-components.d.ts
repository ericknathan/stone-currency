import 'styled-components';
import { defaultTheme } from '../presentation/styles/theme/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}