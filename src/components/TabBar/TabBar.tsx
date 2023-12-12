import { View } from "@tarojs/components";

import './TabBar.less'

export default function TabBar() {
  return (
    <View className='comp-tab-bar'>
      <View className='bar-item active at-icon at-icon-home'>Home</View>
      <View className='bar-item-main'>
        <svg width='30' height='33' viewBox='0 0 30 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path fill-rule='evenodd' clip-rule='evenodd' d='M0.845703 32.5385H4.07324C5.14909 27.2314 7.84193 24.3127 12.1534 23.7808C18.6149 22.9847 23.4611 17.4116 25.0765 12.6347L22.6534 11.0424L24.2688 9.45008C25.8842 7.85777 27.506 5.46931 29.9226 0.692383C5.69187 0.692383 2.4611 22.9847 0.845703 32.5385Z' fill='white' />
        </svg>
      </View>
      <View className='bar-item at-icon at-icon-user'>Mine</View>
    </View>
  )
}
