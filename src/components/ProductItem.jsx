export default function ProductItem({ product }) {
  return (
    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
      <a href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
      </a>

      <div className="flex flex-col items-center justify-center p-5">
        <a href='/'>
        <h2 className="text-sm font-medium text-gray-500 truncate">{product.name}</h2>
        </a>
        <p className="mb-2 text-lg font-semibold text-gray-900">{product.category}</p>
        <p className="mt-1 text-3xl font-semibold text-gray-900">${product.price}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" type="button">
          Comprar
        </button>
      </div>
    </div>
  );
}