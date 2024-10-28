import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { cart } = useCartStore();
  const {
    handleLogin,
    handleLogout,
    handleUnauthorizedAction,
    isAuthenticated,
    user,
  } = useAuth();

  const userName = user?.nickname as string;

  const cartItemCount = cart.reduce(
    (total: any, item: { quantity: any }) => total + item.quantity,
    0
  );

  const handleCartClick = () => {
    if (!isAuthenticated) {
      handleUnauthorizedAction();
    }
  };

  return (
    <header className="bg-blue-600 p-4 flex items-center justify-between text-white">
      <Link to="/">
        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <img
              src={user?.picture || "https://via.placeholder.com/150"}
              alt="Logo"
              className="w-8 h-8"
            />
            <h1 className="text-lg">
              {userName?.charAt(0).toUpperCase() + userName?.slice(1)}
            </h1>
          </div>
        ) : (
          <h1 className="text-lg">{"Hello Guest"}</h1>
        )}
      </Link>
      <nav className="flex items-center gap-4">
        <Link
          to={isAuthenticated ? "/cart" : "#"}
          onClick={handleCartClick}
          className="relative flex items-center hover:text-gray-200"
        >
          <svg
            version="1.1"
            id="shopping_x5F_carts_1_"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 128 128"
            style={{ width: "2em", height: "2em", fill: "white" }}
            xmlSpace="preserve"
          >
            <style>
              {`.st0{display:none}.st1{display:inline}.st2{fill:#FFF}`}
            </style>
            <g id="_x37__1_">
              <path
                className="st2"
                d="M107.6 74.2L128 27.6H40.7l11.6 46.5h55.3zm-17-16.5l8.7-16.8c.8-1.5 2.6-2.1 4-1.2 1.4.9 1.9 2.9 1.1 4.4l-8.7 16.8c-.8 1.5-2.6 2.1-4 1.2-1.5-.9-1.9-2.8-1.1-4.4zm-14.6 0l8.7-16.8c.8-1.5 2.6-2.1 4-1.2 1.4.9 1.9 2.9 1.1 4.4l-8.7 16.8c-.8 1.5-2.6 2.1-4 1.2-1.4-.9-1.9-2.8-1.1-4.4zm-14.5 0l8.7-16.8c.8-1.5 2.6-2.1 4-1.2 1.4.9 1.9 2.9 1.1 4.4l-8.7 16.8c-.8 1.5-2.6 2.1-4 1.2-1.4-.9-1.9-2.8-1.1-4.4zM32 10.2H20.4V7.3H8.7S0 8.9 0 13.1c0 4.5 8.7 5.8 8.7 5.8h11.6V16h5.8l20.4 69.8h66.9v5.8H46.5v5.8h72.7V80H49.5L32 10.2zm71.3 90.2c-5.6 0-10.2 4.6-10.2 10.2s4.6 10.2 10.2 10.2 10.2-4.6 10.2-10.2c0-5.7-4.6-10.2-10.2-10.2zm0 17.4c-4 0-7.3-3.3-7.3-7.3s3.3-7.3 7.3-7.3 7.3 3.3 7.3 7.3c-.1 4.1-3.3 7.3-7.3 7.3zm-43.7-17.4c-5.6 0-10.2 4.6-10.2 10.2s4.6 10.2 10.2 10.2 10.2-4.6 10.2-10.2c0-5.7-4.5-10.2-10.2-10.2zm0 17.4c-4 0-7.3-3.3-7.3-7.3s3.3-7.3 7.3-7.3 7.3 3.3 7.3 7.3c0 4.1-3.2 7.3-7.3 7.3z"
                id="icon_8_"
              />
            </g>
          </svg>
          <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-600 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItemCount}
          </span>
        </Link>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Login
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
