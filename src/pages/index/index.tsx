import { useState } from 'react';
import { Image, Swiper, SwiperItem, View, Button, Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtSearchBar } from 'taro-ui'

import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/tabs.scss";

import format from '../../utils/format';
import Layout from '../../components/Layout';
import { useTabList, useProducts } from '../../hooks/api';
import bannerImage from '../../assets/images/banner.png';
import './index.less';

export default function Index():JSX.Element {
  const [q, setQ] = useState('');
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const tabList = useTabList();
  const products = useProducts();
  const currentTab = tabList[currentTabIndex];

  return (
    <Layout className='index' menuVisible tabBarVisible>
      <AtSearchBar className='search' value={q} onChange={setQ} placeholder='Search for dreams' />
      <Swiper
        autoplay
        className='swiper'
        indicatorDots
        indicatorActiveColor='#C84B6A'
        indicatorColor='#C4C4C4'
      >
        {new Array(7).fill(1).map((_, i) => (
          <SwiperItem
            key={i}
            style={{ height: 272 }}
            className='relative border-[8px] border-transparent border-solid h-[272px] bg-[#FF59DD] bg-opacity-[0.18]'
          >
            <Image src={bannerImage} className='rounded-sm' />
            <View className='absolute top-0 right-0 w-1/2 h-full pt-[16px] pl-[70px] text-black bg-gradient-to-l from-white'>
              <View className='text-[24px] leading-[36px] font-bold'>Arachna</View>
              <View className='text-[12px] leading-[18px]'>A group of spider women on the outskirts of the city. These fierce and elegant creatures possess the upper body of a woman and the lower body of a spider...</View>
              <Button className='btn-get-started'>Get started</Button>
            </View>
          </SwiperItem>
        ))}
      </Swiper>
      <View className='tabs'>
        <View className='tabs-navigator'>
          {tabList.map(({ title }, i) => (
            <View className={`${currentTab.title === title ? 'active': ''}`} key={title} onClick={() => setCurrentTabIndex(i)}>{title}</View>
          ))}
          <View className='at-icon at-icon-chevron-right absolute right-0 top-[2px] text-[18px]'></View>
        </View>
        <View className='tabs-panels'>
          <View className='sub-tabs-navigator'>
            {currentTab.subTabs.map(({ title }, i) => (
              <View className={i === 0 ? 'active': ''} key={title}>{title}</View>
            ))}
            <View className='filters'>Filter</View>
          </View>
          {tabList.map(({ title }) => (
            <View className={`products ${currentTab.title === title ? 'show': 'hide'}`} key={title}>
              {products.map((pro) => (
                <View key={pro.pid} className='product-item' onClick={() => {
                  Taro.navigateTo({
                    url: `/pages/detail/detail?pid=${pro.pid}`,
                  });
                }}
                >
                  {pro.isNew && <View className='is-new'>New</View>}
                  <Image src={pro.productPNG}></Image>
                  <View className='product-counts'>
                    <View className='at-icon at-icon-eye'>{format(pro.counts.view)}</View>
                    <View className='at-icon at-icon-play'>{format(pro.counts.run)}</View>
                  </View>
                  <View className='p-[6px] pt-0'>
                    <Text className='product-title'>{pro.title}</Text>
                    <View className='flex items-end'>
                      <Text className='product-descr'>{pro.descr}</Text>
                      <Image src={pro.avatorPNG} className='flex-none ml-[8px] rounded-full w-[32px] h-[32px]'></Image>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </Layout>
  );
}
