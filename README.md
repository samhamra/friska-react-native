# friska-react-native

DH2655 Friska grupp 1 react native application

## Running the app

To run the app you need to download some prerequisites:

- Download and install [Node.js](https://nodejs.org/en/) on your computer.
- Install [Expo](https://expo.io/learn) on your Mobile device.

```
git clone https://github.com/samhamra/friska-react-native.git
cd friska-react-native
cd react-native

npm install -g expo-cli
expo login (You might have to create an account on their website first.)
npm install
expo start
```

After these commands are made a tab in your browser should popup which is you expo dev-tools, which means that your project is running.

Now you should log in to the Expo app on your device. And then navigate to "Projects" and there should be a link which you can click on and now the project should start building and soon start running.

## Documentation

`/navigation/MainTabNavigator` is handeling most of navigation it controls which screens are in which tab. The tabs that need it has their own stackNavigation which controls how you can navigate through the app.

In the `config` folder the connection to Firebase is done and firebase-functions are defined.
