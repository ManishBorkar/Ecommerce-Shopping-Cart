import useCartStore from "../store/cartStore";
import ImageLoader from "./ImageLoader";

type ProductProps = {
  product: {
    id: number;
    title: string;
    price: number;
    rating: number;
    category: string;
    thumbnail: string;
  };
  isAuthenticated: boolean;
  handleUnauthorizedAction: () => void;
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

const ProductCard = ({ product, isAuthenticated, handleUnauthorizedAction }: ProductProps) => {
  const { cart, addToCart, removeFromCart } = useCartStore();
  const { title, rating, price, thumbnail: image } = product;

  const isInCart = (productId: number) =>
    cart.some((item) => item.id === productId);

  const handleAddToCart = (product: CartItem) => {
    if (!isAuthenticated) {
      handleUnauthorizedAction();
    } else {
      addToCart({ ...product, quantity: 1 });
    }
  };

  const showRatings = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-500">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="text-yellow-500">★</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white border border-gray-400 rounded-lg p-4 flex flex-col justify-between transition-transform duration-200 hover:shadow-lg">
      <div className="h-40 overflow-hidden">
        <ImageLoader src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="mt-3 text-ellipsis overflow-hidden h-10">
        <h3 className="text-lg font-semibold leading-tight">
          <a href="#" className="hover:underline">
            {title}
          </a>
        </h3>
      </div>
      <div className="flex justify-between mt-2">
        {showRatings(rating)}
        <p className="text-lg font-semibold text-gray-700">₹{price}</p>
      </div>
      <div className="flex gap-2 mt-4">
        {isInCart(product.id) ? (
          <button
            onClick={() => removeFromCart(product.id)}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() =>
              handleAddToCart({
                title,
                price,
                id: product.id,
                image,
                quantity: 1,
              })
            }
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
