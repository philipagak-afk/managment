import { Table } from "react-bootstrap";
import { useProducts } from "../hooks/useProducts";
// import { useProducts } from "../hooks/useProducts";


function ProductsTable() {

  const {products} = useProducts()

  console.log(products);
  
   return (
    <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Category</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {
          products?.map((product)=>(
            <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.category}</td>
          <td>{product.stock === 1 ? `${product.stock} item`: `${product.stock} items` }</td>
        </tr>
          ))
        }
        
      </tbody>
    </Table>
  );
}

export default ProductsTable