
export type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  ratingValue: number;
  ratingCount: number;
  isHot: boolean;
  imageUrl: string;
  category: string; 
  colors: string[]; 
};


export const mockProducts: Product[] = [
  { id: 1, name: 'Nike Air Max 270 React', price: 524.33, discountPrice:299.43, discountPercent:24, ratingValue: 4, ratingCount: 52, isHot: true, imageUrl: '/placeholder.png', category: 'Nike', colors: ['#006CFF', '#FC3E39'] },
  { id: 2, name: 'Adidas Ultraboost 21', price: 180.00,discountPrice:299.43, discountPercent:24, ratingValue: 5, ratingCount: 112, isHot: false, imageUrl: '/placeholder.png', category: 'Adidas', colors: ['#171717', '#FFF600'] },
  { id: 3, name: 'Vans Old Skool Classic', price: 60.00,discountPrice:299.43, discountPercent:24, ratingValue: 4, ratingCount: 89, isHot: true, imageUrl: '/placeholder.png', category: 'Vans', colors: ['#171717'] },
  { id: 4, name: 'Nike React Phantom Run', price: 140.00,discountPrice:299.43, discountPercent:24, ratingValue: 4, ratingCount: 75, isHot: false, imageUrl: '/placeholder.png', category: 'Nike', colors: ['#FF00B4', '#EFDFDF'] },
  { id: 5, name: 'Adidas NMD_R1', price: 130.00, discountPrice:299.43, discountPercent:24,ratingValue: 5, ratingCount: 201, isHot: false, imageUrl: '/placeholder.png', category: 'Adidas', colors: ['#006CFF'] },
  { id: 6, name: 'Converse Chuck Taylor', price: 55.00,discountPrice:299.43, discountPercent:24, ratingValue: 4, ratingCount: 300, isHot: false, imageUrl: '/placeholder.png', category: 'All Stars', colors: ['#FC3E39', '#171717'] },
  { id: 7, name: 'Nike Air Force 1 \'07', price: 90.00, discountPrice:299.43, discountPercent:24,ratingValue: 5, ratingCount: 500, isHot: true, imageUrl: '/placeholder.png', category: 'Nike', colors: ['#EFDFDF'] },
  { id: 8, name: 'Adidas Stan Smith', price: 80.00, discountPrice:299.43, discountPercent:24,ratingValue: 4, ratingCount: 450, isHot: false, imageUrl: '/placeholder.png', category: 'Adidas', colors: ['#FFF600', '#171717'] },
  { id: 9, name: 'Vans Slip-On', price: 50.00, ratingValue: 4, ratingCount: 250, isHot: false, imageUrl: '/placeholder.png', category: 'Vans', colors: ['#FF00B4'] },
  { id: 10, name: 'Nike Blazer Mid \'77', price: 100.00,discountPrice:299.43, discountPercent:24, ratingValue: 5, ratingCount: 320, isHot: false, imageUrl: '/placeholder.png', category: 'Nike', colors: ['#006CFF', '#FC3E39'] },
  { id: 11, name: 'Adidas Superstar', price: 85.00,discountPrice:299.43, discountPercent:24, ratingValue: 5, ratingCount: 600, isHot: false, imageUrl: '/placeholder.png', category: 'Adidas', colors: ['#171717', '#FFFFFF'] },
  { id: 12, name: 'New Balance 990v5', price: 175.00,discountPrice:299.43, discountPercent:24, ratingValue: 4, ratingCount: 89, isHot: false, imageUrl: '/placeholder.png', category: 'New Balance', colors: ['#C1C8CE'] },
  { id: 13, name: 'Puma Suede Classic', price: 65.00, discountPrice:299.43, discountPercent:24,ratingValue: 4, ratingCount: 180, isHot: false, imageUrl: '/placeholder.png', category: 'Puma', colors: ['#171717', '#FC3E39'] },
  { id: 14, name: 'Reebok Classic Leather', price: 75.00, ratingValue: 4, ratingCount: 220, isHot: false, imageUrl: '/placeholder.png', category: 'Reebok', colors: ['#FFFFFF'] },
  { id: 15, name: 'Nike Air Max 90', price: 120.00,discountPrice:299.43, discountPercent:24, ratingValue: 5, ratingCount: 480, isHot: true, imageUrl: '/placeholder.png', category: 'Nike', colors: ['#FF00B4', '#FFF600'] },
  { id: 16, name: 'Adidas Gazelle', price: 80.00, ratingValue: 4, ratingCount: 310, isHot: false, imageUrl: '/placeholder.png', category: 'Adidas', colors: ['#006CFF'] },
  { id: 17, name: 'Vans Sk8-Hi', price: 65.00, ratingValue: 5, ratingCount: 290, isHot: false, imageUrl: '/placeholder.png', category: 'Vans', colors: ['#171717'] },
  { id: 18, name: 'Converse One Star', price: 60.00, discountPrice:299.43, discountPercent:24,ratingValue: 4, ratingCount: 150, isHot: false, imageUrl: '/placeholder.png', category: 'All Stars', colors: ['#FFF600'] },
  { id: 19, name: 'Nike Dunk Low', price: 100.00, ratingValue: 5, ratingCount: 700, isHot: true, imageUrl: '/placeholder.png', category: 'Nike', colors: ['#006CFF', '#FFFFFF'] },
  { id: 20, name: 'Adidas Forum Low', price: 90.00, ratingValue: 4, ratingCount: 120, isHot: false, imageUrl: '/placeholder.png', category: 'Adidas', colors: ['#EFDFDF'] },
  { id: 21, name: 'Puma Cali', price: 80.00,discountPrice:299.43, discountPercent:24, ratingValue: 4, ratingCount: 95, isHot: false, imageUrl: '/placeholder.png', category: 'Puma', colors: ['#FFFFFF', '#FF00B4'] },
  { id: 22, name: 'Reebok Club C 85', price: 70.00, ratingValue: 5, ratingCount: 400, isHot: false, imageUrl: '/placeholder.png', category: 'Reebok', colors: ['#FFFFFF'] },
  { id: 23, name: 'New Balance 574', price: 85.00,discountPrice:299.43, discountPercent:24, ratingValue: 4, ratingCount: 350, isHot: false, imageUrl: '/placeholder.png', category: 'New Balance', colors: ['#171717', '#C1C8CE'] },
  { id: 24, name: 'Nike Air Jordan 1 Mid', price: 115.00,discountPrice:299.43, discountPercent:24, ratingValue: 5, ratingCount: 850, isHot: true, imageUrl: '/placeholder.png', category: 'Nike', colors: ['#FC3E39', '#171717', '#FFFFFF'] },
];