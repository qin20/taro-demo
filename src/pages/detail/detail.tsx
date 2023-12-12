import { Button, Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useProduct } from "../../hooks/api";
import Layout from "../../components/Layout";

import styles from './detail.module.less';

export default function Detail(): JSX.Element {
  const params = Taro.getCurrentInstance().router?.params;
  const product = useProduct(Number(params?.pid))[0];

  if (!product) {
    return <h1>not found</h1>;
  }

  return (
    <Layout className={styles.detail} menuVisible backVisible>
      <Image className={styles.img} src={product.productPNG}></Image>
      <View className={styles.title}>{product.title}</View>
      <View className={styles.userinfo}>
        <Image src={product.avatorPNG}></Image>
        <Text>Fannings</Text>
      </View>
      <View className={styles.descr}>
      You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky.
      </View>
      <View className={styles.tags}>
        <View>#Romantic</View>
        <View>#Fiction</View>
        <View>#Love story</View>
        <View>#Love story</View>
        <View>#Fiction</View>
        <View>#Romantic</View>
        <View>#Fiction</View>
        <View>#Love story</View>
        <View>#Love story</View>
        <View>#Fiction</View>
      </View>
      <View className={styles.catogery}>
        <View>Time travel</View>
        <View>RPG</View>
        <View>Science Fiction</View>
        <View>Fantasy</View>
      </View>
      <View className='flex justify-between mt-3'>
        <View className={styles.contributors}>
          <View className={styles.contributorsCircle}></View>
          <View className={styles.contributorsCircle}></View>
          <View className={styles.contributorsCircle}></View>
          <Text className={styles.contributorsText}>+28 contributors</Text>
        </View>
        <View className={styles.counts}>
          <View className={styles.countsCircle}></View>
          <Text className={styles.countsText}>2429</Text>
        </View>
      </View>
      <Button className={styles.enterDream}>Enter Dream</Button>
      <View className={styles.viewDreamDetail}>
        View Dream Details
      </View>
    </Layout>
  );
}
