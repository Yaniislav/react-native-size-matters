import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseSizes = {
  guidelineBaseWidth: 350,
  guidelineBaseHeight: 680,
}

export const setGuidelineBaseValues = (guidelineWidth, guidelineHeight) => {
  guidelineBaseSizes.guidelineBaseHeight = guidelineHeight;
  guidelineBaseSizes.guidelineBaseWidth = guidelineWidth;
};

export const scale = size => shortDimension / guidelineBaseSizes.guidelineBaseWidth * size;
export const verticalScale = size => longDimension / guidelineBaseSizes.guidelineBaseHeight * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size, factor = 0.5) => size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
