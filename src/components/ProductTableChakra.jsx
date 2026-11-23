import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useRealtimeProducts } from '../hooks/useRealtimeProducts';
import UpdateProduct from './UpdateProductChakra';
import DeleteProduct from './DeleteProductChakra';
function ProductsTable() {
    const { products } = useRealtimeProducts();
  
  return (
<TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
          <Th>Category</Th>
          <Th>Stock</Th>
          <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {products?.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.name}</Td>
                  <Td>{product.category}</Td>
                  <Td>
                    {product.stock === 1
                      ? `${product.stock} item`
                      : `${product.stock} items`}
                  </Td>
                  <Td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <UpdateProduct currentProduct={product} />
                    <DeleteProduct product={product} />
                  </Td>
                </Tr>
              ))}
      
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Name</Th>
          <Th>Category</Th>
          <Th>Stock</Th>
          <Th></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>  )
}

export default ProductsTable