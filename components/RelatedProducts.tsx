const relatedProducts = [
  {
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    name: "Hydro Flask 24oz Sport",
    price: "$39.95"
  },
  {
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    name: "Hydro Flask Straw Lid",
    price: "$42.95"
  },
  {
    image: "https://pixabay.com/get/g706762ada0096b2a748882a5ddc75c86cdb84ea62025657fad076779688e74b691ea55be535c525a658d00bbdfb34699b5be5104297952798c98bcda19b7f56b_1280.jpg",
    name: "Hydro Flask 64oz Wide",
    price: "$59.95"
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    name: "Hydro Flask 18oz Standard",
    price: "$34.95"
  },
  {
    image: "https://pixabay.com/get/gf989f762a33c444131341aa45b9061d76d38577ab8b8381bbf099da13ffd515422d4e96445b7070025c1c9b746dee9546d20610b410cecbd2fe1e819c9fd92db_1280.jpg",
    name: "Hydro Flask Flip Lid",
    price: "$46.95"
  },
  {
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
    name: "Hydro Flask 40oz Wide",
    price: "$49.95"
  }
];

export default function RelatedProducts() {
  return (
    <div className="mt-8 border-t pt-8">
      <h3 className="text-xl font-bold mb-6">Customers who viewed this item also viewed</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {relatedProducts.map((product, index) => (
          <div key={index} className="text-center">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-contain mb-2"
            />
            <div className="text-xs amazon-blue hover:amazon-red cursor-pointer">{product.name}</div>
            <div className="text-sm font-bold">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
