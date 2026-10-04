const defaultAppSettings = { appTheme: "light" };
const userCustomSettings = { textFontSize: 14 };
const finalMergedSettings = { ...defaultAppSettings, ...userCustomSettings };
const getAppTheme = (configObj) => configObj.appTheme;
const getTextFont = (configObj) => configObj.textFontSize;
console.log("Item 15:", getAppTheme(finalMergedSettings), getTextFont(finalMergedSettings));