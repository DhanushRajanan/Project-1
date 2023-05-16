import '../App.css'

function ProductList({product,addToCart}) {
  return (
    <>
    <div className='flex'>
      {
        product.map((productItem,productIndex)=>{
  return(
    <div style={{width:'33%'}}>
      <div className='product-item'>
        <img src={productItem.url} height={'400px'}width={'100%'} />
        <p>{productItem.name} | {productItem.category}</p>
        <p>{productItem.seller}</p>
        <p>{productItem.price}/-</p>
        <button onClick={()=>addToCart(productItem)}>Add to Cart</button>
      </div>
    </div>
  )
        })
      }
      </div>
      </>
  )
}

export default ProductList