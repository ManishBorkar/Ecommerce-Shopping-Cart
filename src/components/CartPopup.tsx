import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  size: string;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    title: "Rey Nylon Backpack",
    price: 74,
    quantity: 1,
    image: "https://via.placeholder.com/50",
    description: "Natural",
    size: "XL",
  },
  {
    id: 2,
    title: 'Round Buckle 1" Belt',
    price: 68,
    quantity: 1,
    image: "https://via.placeholder.com/50",
    description: "Natural",
    size: "XL",
  },
  {
    id: 3,
    title: "Waffle Knit Beanie",
    price: 132,
    quantity: 1,
    image: "https://via.placeholder.com/50",
    description: "Natural",
    size: "XL",
  },
];

const CartPopup = () => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="relative">
      <button className="relative text-gray-600 hover:text-gray-800">
        🛒 Cart ({2})
      </button>
      <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg hidden lg:block p-4">
        <h2 className="text-lg font-semibold mb-4">Shopping cart</h2>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 rounded-md object-cover"
              />

              <div className="flex-1 ml-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.description} • {item.size}
                </p>
                <p className="text-sm text-gray-500">Qty {item.quantity}</p>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-green-600 font-semibold">
                  ₹{item.price}
                </span>
                <button className="text-blue-500 text-sm mt-1 hover:underline">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-medium">Subtotal</span>
            <span className="text-gray-900 font-semibold">
              ₹{subtotal.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Shipping and taxes calculated at checkout.
          </p>

          <div className="flex space-x-2">
            <Link
              to="/cart"
              className="flex-1 text-center border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100"
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
