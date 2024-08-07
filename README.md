# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

### /app Directory

The [`/app`] directory is the main directory for your application code. It contains the following subdirectories and files:

- **_layout.tsx**: Layout component for the app.
- **assets/**: Contains fonts and images used in the app.
  - **fonts/**: Custom fonts used in the app.
  - **images/**: Images used in the app.
- **components/**: Reusable components for the app.
  - **common/**: Commonly used components like `ExternalLink.tsx`.
  - **navigation/**: Navigation-related components.
- **constants/**: Constants used throughout the app, like `Colors.ts`.
- **hooks/**: Custom hooks used in the app.
- **index.tsx**: Entry point for the app.
- **navigation/**: Navigation configuration and screens.
- **screens/**: Screens for the app.


/my-expo-app
│
├── /assets
│   ├── /fonts
│   └── /images
│
├── /src
│   ├── /components
│   │   ├── /common
│   │   └── /specific
│   │
│   ├── /constants
│   │   └── Colors.ts
│   │
│   ├── /hooks
│   │   └── useCustomHook.ts
│   │
│   ├── /navigation
│   │   └── AppNavigator.tsx
│   │
│   ├── /screens
│   │   ├── HomeScreen.tsx
│   │   └── DetailsScreen.tsx
│   │
│   ├── /services
│   │   └── ApiService.ts
│   │
│   ├── /store
│   │   ├── /actions
│   │   ├── /reducers
│   │   └── store.ts
│   │
│   ├── /styles
│   │   └── globalStyles.ts
│   │
│   ├── /types
│   │   └── index.d.ts
│   │
│   └── App.tsx
│
├── .gitignore
├── app.json
├── babel.config.js
├── package.json
├── tsconfig.json
└── README.md