

export const ProductCard = ({id,name,price,inStock}) => {
  return (
    <li >
        <span>{id}</span>
        <span>{name}</span>
        <span>{price}</span>
        <span>{inStock}</span>
    </li>
  )
}
