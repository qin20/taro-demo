import product1PNG from '../assets/images/product-1.png';
import product2PNG from '../assets/images/product-2.png';
import product3PNG from '../assets/images/product-3.png';
import product4PNG from '../assets/images/product-4.png';
import avatorPNG from '../assets/images/avator.png';

const tabList = [{
  title: 'Recommended',
  subTabs: [
    { title: 'Default' },
    { title: 'Recent' },
    { title: 'Hot' },
    { title: 'Nodes' },
  ],
}, {
  title: 'Fan Fiction',
  subTabs: [
    { title: 'Default' },
    { title: 'Recent' },
    { title: 'Hot' },
    { title: 'Nodes' },
  ],
}, {
  title: 'Sci-fi',
  subTabs: [
    { title: 'Default' },
    { title: 'Recent' },
    { title: 'Hot' },
    { title: 'Nodes' },
  ],
}, {
  title: 'RPG',
  subTabs: [
    { title: 'Default' },
    { title: 'Recent' },
    { title: 'Hot' },
    { title: 'Nodes' },
  ],
}];

const products = [
  {
    pid: 1,
    title: 'Spider Potter',
    descr: 'Love, celebration, and a promise of forever.',
    isNew: 1,
    counts: { view: 32145678, run: 18640 },
    productPNG: product1PNG,
    avatorPNG,
  },
  {
    pid: 2,
    title: 'Goddess Maria',
    descr: 'The rise and fall of an ancient empire.',
    isNew: 1,
    counts: { view: 25245, run: 5242 },
    productPNG: product2PNG,
    avatorPNG,
  },
  {
    pid: 3,
    title: 'Dolor duis',
    descr: 'Ex ex qui eiusmod eu quis  non tempor.',
    isNew: 1,
    counts: { view: 1000, run: 1000 },
    productPNG: product3PNG,
    avatorPNG,
  },
  {
    pid: 4,
    title: 'Deserunt do velit',
    descr: 'Lorem voluptate pariatur nisit ex.',
    isNew: 1,
    counts: { view: 1000, run: 1000 },
    productPNG: product4PNG,
    avatorPNG,
  },
  {
    pid: 5,
    title: 'Et Lorem voluptate',
    descr: 'Commodo magna laboris ut consectetur.',
    isNew: 1,
    counts: { view: 1000, run: 1000 },
    productPNG: product4PNG,
    avatorPNG,
  },
  {
    pid: 6,
    title: 'Consequat non ea',
    descr: 'Anim ut consectetur aliqua fugiat culpa',
    isNew: 1,
    counts: { view: 1000, run: 1000 },
    productPNG: product4PNG,
    avatorPNG,
  },
  {
    pid: 7,
    title: 'Spider Potter',
    descr: 'Love, celebration, and a promise of forever.',
    isNew: 1,
    counts: { view: 1000, run: 1000 },
    productPNG: product4PNG,
    avatorPNG,
  },
  {
    pid: 8,
    title: 'Spider Potter',
    descr: 'Love, celebration, and a promise of forever.',
    isNew: 1,
    counts: { view: 1000, run: 1000 },
    productPNG: product4PNG,
    avatorPNG,
  },
];

export function useTabList() {
  return tabList;
}

export function useProducts() {
  return products;
}

export function useProduct(pid?: number) {
  if (!pid) {
    return [];
  }
  return products.filter((p) => p.pid === pid);
}
