import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from '@navigation/RootNavigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigator />
    </GestureHandlerRootView>
  );
}