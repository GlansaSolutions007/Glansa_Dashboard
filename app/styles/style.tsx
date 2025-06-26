import { Platform } from "react-native";

import { color } from "./theme";

export const gstyle = {
  container: {
    padding: 8,
  },

  // color ----------- start
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
  success: {
    color: color.success,
  },
  white: {
    color: color.white,
  },

  neutral100: {
    color: color.neutral[100],
  },
  neutral200: {
    color: color.neutral[200],
  },
  neutral300: {
    color: color.neutral[300],
  },
  neutral500: {
    color: color.neutral[500],
  },
  bgneutral200: {
    backgroundColor: color.neutral[200],
  },
  bgneutral300: {
    backgroundColor: color.neutral[300],
  },
  bgneutral500: {
    backgroundColor: color.neutral[500],
  },
  // color ----------- end

  // background color ----------- start
  bgprimary: {
    backgroundColor: color.primary,
  },
  bgsecondary: {
    backgroundColor: color.secondary,
  },
  bgwhite: {
    backgroundColor: color.white,
  },
  // background color .............. end

  // fontSize  ----------- start
  f1: { fontSize: 8 },
  f2: { fontSize: 12 },
  f3: { fontSize: 16 },
  f18: { fontSize: 18 },
  f4: { fontSize: 20 },
  f5: { fontSize: 24 },
  f6: { fontSize: 28 },
  f7: { fontSize: 32 },
  f8: { fontSize: 36 },
  f9: { fontSize: 40 },
  f10: { fontSize: 44 },
  // fontSize  .............. end

  borderRadius: {
    borderRadius: 8,
  },
  borderRadiustoplr: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  borderRadiustoblr: {
        borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 12,
    backgroundColor: color.white,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
      },
      android: {
        shadowColor: "#000",
        elevation: 3,
      },
    }),
  },

  // Dropdown styles .............. start
  dropdown: {
    borderColor: color.neutral[500],
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  // Dropdown styles .............. end

  // Card ----------start
  Card: {
    padding: 12,
    backgroundColor: color.white,
    borderRadius: 8,
    margin: 3,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
      },
      android: {
        shadowColor: "#000",
        elevation: 3,
      },
    }),
  },

  CardBorder: {
    marginVertical: 5,
    textAlignVertical: "top",
    padding: 10,
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
  },

  containerbg: {
    padding: 15,
    backgroundColor: color.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 30,
      },
    }),
  },
  // Card ............ end

  searchinput: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  width100: {
    width: "100%",
  },
};
