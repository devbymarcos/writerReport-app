const { getDefaultConfig } = require("expo/metro-config");
// metro.config.js
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

const config = getDefaultConfig(__dirname);

// Adicione suporte para assets
config.resolver.assetExts.push(
  // Imagens
  "png",
  "jpg",
  "jpeg",
  "gif",
  "webp"
);

module.exports = wrapWithReanimatedMetroConfig(config);
