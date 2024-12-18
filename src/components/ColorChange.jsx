const ColorChange = () => {
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
      ]
    return (
        <>
        {products.map(product=> 
        <li key={product.id}
        style={{color: product.isFruit ? 'magenta': 'darkgreen'}}
        >
        {product.title}
        </li>)}
        </> 
    );
};

export default ColorChange;