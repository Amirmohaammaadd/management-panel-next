"use client";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

interface MuiRTLConfigProps {
  children: ReactNode;
}

// for button to show the auto compelete in Button comp
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

declare module "@mui/material/Tabs" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

// for MUI to access the custom color

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }
}

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  palette: {
    custom: {
      main: "#5458ff",
      contrastText: "#ffffff",
    },
    primary: {
      main: "#d21919",
    },
    secondary: {
      main: "#ff4081",
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#5458ff", // Change border color on hover
            },

            "&.Mui-focused fieldset": {
              borderColor: "#5458ff",
            },
          },
        },
      },
    },
  },
});

const MuiRTLConfig = ({ children }: MuiRTLConfigProps) => {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MuiRTLConfig;

// useage for button

{
  /* <Button
  type="submit"
  variant="contained"
  color="custom"
  loading={loadig}
  className="IRANSansX !text-white"
>
  ارسال
</Button>; */
}
