import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: {
      lighter: string;
      darker: string;
    },
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
