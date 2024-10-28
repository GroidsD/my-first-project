import React, { useState } from 'react';
import Products from './Products';
import ProductsAdd from './Products_Add';
import ProductSearch from './Products_Search';
import ProductDetail from './Product_Detail';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Hoặc thư viện icon bạn đang sử dụng

// Định nghĩa kiểu cho route
interface Route {
  key: string;
  title: string;
  icon: string;
  focusedIcon: string; // Thêm thuộc tính focusedIcon
}

export default App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: 'Products', title: 'Products', icon: 'home', focusedIcon: 'home' },
    { key: 'Products_Add', title: 'Add', icon: 'add', focusedIcon: 'add' },
    { key: 'Products_Search', title: 'Search', icon: 'search', focusedIcon: 'search' },
    { key: 'Product_Detail', title: 'Details', icon: 'info', focusedIcon: 'info' },
]);

  const renderScene = BottomNavigation.SceneMap({
    Products: Products,
    Products_Add: ProductsAdd,
    Products_Search: ProductSearch,
    Product_Detail: ProductDetail,
  });

  const renderIcon = ({ route, focused, color }: { route: Route; focused: boolean; color: string }) => {
    const iconName = focused ? route.focusedIcon : route.icon;
    return <Icon name={iconName} size={30} color={color} />; 
};

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
      />
    </SafeAreaProvider>
  );
};