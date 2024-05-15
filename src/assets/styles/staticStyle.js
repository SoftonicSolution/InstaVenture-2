export const colors = {
  primary: '#99bfec',
  // primary: '#ff9900', // SOW
  // primary: '#03bd87', // Blue Dark
  // primary: '#c466ff', // Purple LIght
  // primary: '#ad50f8', // Purple
  // primary: '#f21a34', // Red

  primaryDark: '#0360d1',
  secondary: '#224C90',
  thirdColor: '#ffffff',
  white: '#ffffff',
  yellowWhite: '#ffff1c',
  grey: '#9A9594',
  danger: '#D70B0B',
  orange: '#ff8231',
  yellow: '#C8BA18',
  gold: '#FFC300',
  dark: '#2A2727',
  greyText: '#A6ACAF',
  greyLight: '#BBB5B4',
  greyBorder: '#DADADA',
  backgroundLight: '#F6FBFF',
};

export const commonTopMargin = 20;
export const padding10 = {padding: 10};
export const padding20 = {padding: 20};
export const marginTop10 = {marginTop: 10};
export const marginTop20 = {marginTop: 20};
export const fontExSmSize = {fontSize: 9};
export const fontSize10 = {fontSize: 10};
export const fontSmSize = {fontSize: 12};
export const fontMdSize = {fontSize: 14};
export const fontLgSize = {fontSize: 17};
export const fontXlLgSize = {fontSize: 20};
export const width100pc = {width: '100%'};
export const height100pc = {height: '100%'};
export const marginBottom50 = {marginBottom: 50};
export const marginBottom100 = {marginBottom: 100};

export const GradientLeftTopCorner = {
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
};

export const GradientPrimaryColor = [
  colors.primary,
  colors.white,
  colors.white,
  colors.white,
  colors.white,
];
export const GradientPrimaryColor50 = [
  colors.primary,
  colors.white,
  colors.white,
];

export const hideScrollBar = {
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
};
export const shadowBox = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.18,
  shadowRadius: 4.59,
  elevation: 5,
};
export const titleText = {
  fontSize: fontLgSize?.fontSize,
  fontWeight: 'bold',
  color: colors.dark,
};

export const bodyText = {
  fontSize: fontMdSize?.fontSize,
  color: colors.grey,
};
export const titleTextOuter = {
  fontSize: fontLgSize?.fontSize,
  fontWeight: 'bold',
  color: colors.dark,
};
export const bodyTextOuter = {
  fontSize: fontMdSize?.fontSize,
  color: colors.grey,
};

export const center = {
  textAlign: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
};

export const boldText = {
  fontWeight: 'bold',
};

export const flexRowSpaceBet = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
export const flexColumnCenter = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const flexRowLeft = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

export const flexRowRight = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
};
