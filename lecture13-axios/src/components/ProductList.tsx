import Product from "../types/product.type";

export default function ProductList({products} : {products: Product[]}) {
  
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(prod => (
                        <tr key={prod.id}>
                            <th scope="row">{prod.id}</th>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td>{prod.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
