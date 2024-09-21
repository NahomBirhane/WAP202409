import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios";
import Product from "../types/product.type";
import { post } from '../services/product.service';

type PropsType = {
    onAddNewProduct: (newProduct: Product) => void;
}

export default function AddProduct(props: PropsType) {

    const [product, setProduct] = useState<Product>({ id: '', title: '', price: 0, description: '' });

    const { onAddNewProduct } = props;

    // const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.name);
    //     setProduct({ ...product, title: e.target.value });
    // }

    // const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setProduct({...product, price: parseInt(e.target.value)});
    // }

    // const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     setProduct({...product, description: e.target.value});
    // }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await post(product);
        // console.log(response.data);
        onAddNewProduct(response.data);
        setProduct({ id: '', title: '', price: 0, description: '' });

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control"
                        name="title"
                        id="title"
                        placeholder="Enter a title"
                        value={product.title}
                        onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="Enter a price"
                        value={product.price}
                        onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}></textarea>
                </div>

                <button>Submit</button>
            </form>

        </div>
    )
}
