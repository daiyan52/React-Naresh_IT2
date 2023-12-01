import { useEffect, useState } from "react";
export default function Shopping(){
    const [categories,setCategories] = useState([]);
    const [Product,setProducts] = useState([]);
     
    function LoadCategory(){
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then(response=> response.json())
        .then(data=>{
            setCategories(data);
        })
    }

    function LoadProducts(){
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response=> response.json())
        .then(date=>{
            setProducts(date)
        })
    }
    useEffect(()=>{
        LoadCategory();
        LoadProducts();
    },[])
     
    return(
        <div className="container-md">
            <header className="bg-danger text-white text-center p-2 m-2">
                <h2><span className="bi bi-cart p-3 m-3"></span>Category</h2>
            </header>
            <section className="d-flex flex-wrap">
                {
                    categories.map(Category=>
                        <div key={Category.id} className="card p-2 m-3 w-3">
                            <img src={Category.image} className="card-img-top" height="180"/>
                            <div className="card-header">
                                <p>{Category.name}</p>
                                <dl>
                                    <dt>CreationAt</dt>
                                    <dd>{Category.creationAt}</dd>
                                    <dt>UpdatedAt</dt>
                                    <dd>{Category.updatedAt}</dd>
                                </dl>
                            </div>
                        </div>)
                }
            </section>
            <main>
                <header className="bg-danger text-center text-white">
                    <h2>Products</h2>
                </header>
                <section className="d-flex flex-wrap">
                    {
                        Product.map(prod=>
                            <div  key={prod.id} className="card p-2">
                                <img src={prod.images} className="card-img-top" width="250" height="150"/>
                                <div className="card-header">
                                    <p>{prod.title}</p>
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{prod.price}</dd>
                                        <dd style={{width:'250px'}}>{prod.description}</dd>
                                    </dl>
                                </div>
                            </div>)
                    }
                </section>
            </main>
        </div>
    )
}