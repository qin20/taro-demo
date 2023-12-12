import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/icon.scss";

import TabBar from "../TabBar";
import './Layout.less';

export default function Layout({
  backVisible,
  menuVisible,
  tabBarVisible,
  children,
  className = '',
}: {
  backVisible?: boolean;
  menuVisible?: boolean;
  tabBarVisible?: boolean;
  children?: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <View className={[
      'comp-layout',
      backVisible ? 'back-visible' : '',
      menuVisible ? 'menu-visible' : '',
      tabBarVisible ? 'tab-bar-visible' : '',
      className,
    ].join(' ')}
    >
      {backVisible && (
        <View className='comp-layout-back at-icon at-icon-arrow-left' onClick={() => Taro.navigateBack()} />
      )}
      {menuVisible && (
        <View className='comp-layout-menu at-icon at-icon-menu' />
      )}
      {tabBarVisible && <TabBar />}
      {children}
    </View>
  )
}
