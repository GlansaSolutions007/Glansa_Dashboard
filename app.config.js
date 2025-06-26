export default () => ({
  expo: {
    name: "GlansaDashBoard_F",
    slug: "GlansaDashBoard_F",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "glansadashboardf",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true
    },
    android: {
      googleServicesFile: "./google-services.json",
      package: "com.glansasol2026.glansa_dashboard",
      useNextNotificationsApi: true,
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ],
      "expo-notifications",
      "expo-secure-store"
    ],
    experiments: {
      typedRoutes: true
    },
     extra: {
      eas: {
        projectId: "f7bdcebd-0854-4af0-8d3d-b9b7388161bb"
      }
    }
  }
});
