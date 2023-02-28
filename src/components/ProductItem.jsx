import Testjpg from "../assets/test.jpg";

export default function ProductItem({ product }) {
  return (
    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
      <a href={`/product/${product.title}`}>
        <img
          src={Testjpg}
          // src={product.image}
          // alt={product.name}
          className="rounded shadow"
        />
      </a>

      <div
        className="flex flex-col items-center justify-center p-5"
        referrerPolicy="no-referrer"
      >
        <a href="/">
          <h2 className="text-sm font-medium text-gray-500 truncate">
            {product.title}
          </h2>
        </a>
        <p className="mb-2 text-lg font-semibold text-gray-900">
          {/* {product.category} */}
          {product.description}
        </p>
        <p className="mt-1 text-3xl font-semibold text-gray-900">
          {/* ${product.price} */}
          {product.author.name}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          type="button"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
