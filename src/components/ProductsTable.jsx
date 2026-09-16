import { Table } from "react-bootstrap";
// import { useProducts } from "../hooks/useProducts";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProducts";
import { useRealtimeProducts } from "../hooks/useRealtimeProducts";

function ProductsTable() {
  // const { products } = useProducts();

  const { products } = useRealtimeProducts();

  // console.log(products);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>
              {product.stock === 1
                ? `${product.stock} item`
                : `${product.stock} items`}
            </td>
            <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <UpdateProduct currentProduct={product} />
              <DeleteProduct product={product}/>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductsTable;