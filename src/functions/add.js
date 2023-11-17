export default function Add(produto,quantity,carrinho){
    const index = carrinho.findIndex(item => item.id == produto.id)
    if(index < 0){
        const Carrinho = {
            code: produto.id,
            name: produto.name,
            img: produto.img.img1,
            price: (produto.price * produto.discount) / 100,
            quantity: quantity,
        }
        return Carrinho
    }else{
        const Carrinho = {
            code: carrinho[index].id, 
            name: produto.name,
            img: produto.img.img1,
            price: (produto.price * produto.discount) / 100,
            quantity: quantity,
        }
        return Carrinho
    }
}