import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCartStore();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link to="/" className="text-blue-500">
            Continue shopping
          </Link>
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row cart-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex cart-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-500">Price: ₹{item.price}</p>
                    <p className="text-gray-500">
                      Total: ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex cart-center gap-4 flex-col mt-4 sm:mt-0">
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 py-1 bg-gray-200 rounded-md flex-1"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded-md flex-1"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 border-t border-gray-200">
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">Subtotal:</span>
              <span className="text-lg font-semibold">
                ₹{subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="mt-4 flex gap-4">
              <p className="w-full py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Checkout
              </p>
              <button
                onClick={clearCart}
                className="w-full py-2 text-center text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
