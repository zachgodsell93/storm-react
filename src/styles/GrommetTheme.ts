import { css } from "styled-components";
import { ThemeType } from "grommet";
import colours from "./Colors";
import palette from "./Palette";
import {
  CaretDownFill,
  CaretUpFill,
  FormNext,
  FormPrevious,
} from "grommet-icons";

const GrommetTheme: ThemeType = {
  global: {
    colors: {
      brand: palette.primary,
      ...colours,
      ...palette,
    },
    font: {
      size: "14px",
    },
  },
  heading: {
    level: {
      1: {
        medium: {
          size: "40px",
        },
      },
      2: {
        medium: {
          size: "18px",
          height: "22px",
        },
      },
    },
    weight: 600,
    extend: css`
      margin: 0;
    `,
  },
  paragraph: {
    medium: {
      size: "14px",
    },
    extend: css`
      font-weight: 300;
    `,
  },
  select: {
    background: "none",
    control: {
      extend: css`
        padding-left: 12px;
        height: 100%;
      `,
    },
    icons: {
      color: palette.contentText,
    },
  },
  textInput: {
    extend: css`
      font-weight: 300;
    `,
  },
  text: {
    xsmall: {
      size: "12px",
    },
    small: {
      size: "13px",
    },
    medium: {
      size: "14px",
    },
    large: {
      size: "16px",
    },
  },
  dataTable: {
    header: {
      color: palette.headerAltLink,
      border: {
        side: "bottom",
        color: palette.separatorLine,
      },
    },
    icons: {
      ascending: CaretDownFill,
      descending: CaretUpFill,
    },
  },
  pagination: {
    button: {
      border: {
        color: palette.buttonBorder,
        width: "1px",
      },
      active: {
        background: palette.primary,
        color: palette.primaryButtonText,
      },
    },
    container: {
      align: "center",
      width: "full",
      margin: {
        top: "40px",
      },
    },
    controls: {
      gap: "8px",
    },
    icons: {
      next: FormNext,
      previous: FormPrevious,
    },
  },
};

export default GrommetTheme;
