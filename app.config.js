export default{
  "expo": {
    "name": "WealthWise",
    "slug": "wealth-wise",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.wealthwise.wealthwise-native",
      "buildNumber": "1.0.0",
      "googleServicesFile": process.env.GOOGLE_SERVICE_PLIST
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.jayana_dev.wealthwise",
      "googleServicesFile": process.env.GOOGLE_SERVICE_JSON
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "818c5712-5f0e-4615-afd4-ed453e3e1118"
      }
    },
    "owner": "jayana_dev",
    "scheme": "wealth-wise",
    "plugins": [
      "expo-font"
    ]
  }
}
