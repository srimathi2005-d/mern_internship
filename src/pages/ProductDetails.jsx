import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = [
    { id: 1, name: "Laptop", price: "30000", description: "HP laptop is i5" },
    { id: 2, name: "Mouse", price: "1000", description: "HP Mouse is lightweight" },
    { id: 3, name: "Mobile", price: "160000", description: "iphone 17 promax" },
    { id: 4, name: "Keyboard", price: "5000", description: "HP Keyboard" },
    { id: 5, name: "Charger", price: "3000", description: "Apple c-type charger" },
  ];

  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Name: {product.name}</h2>
      <h2>Price: ₹{product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
