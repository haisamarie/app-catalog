export type Product = {
  id: string
  slug: string
  title: string
  description: string
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'eco-bag',
    title: 'エコバッグ',
    description: '再利用可能なハンドメイドエコバッグ',
  },
  {
    id: '2',
    slug: 'leather-wallet',
    title: 'レザーウォレット',
    description: '本革を使った手作り財布',
  },
  {
    id: '3',
    slug: 'ceramic-mug',
    title: 'セラミックマグ',
    description: '手作りのセラミック製マグカップ',
  },
  {
    id: '4',
    slug: 'wooden-toy',
    title: '木製おもちゃ',
    description: '自然素材の木製おもちゃ',
  },
  {
    id: '5',
    slug: 'handmade-soap',
    title: 'ハンドメイドソープ',
    description: 'オーガニック成分の手作り石鹸',
  },
]

export async function getAllProducts() {
  return products
}

export async function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
