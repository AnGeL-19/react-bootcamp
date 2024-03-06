import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { onGetCompany } from '../helpers/getTagColor';

export const ProductCard = ({ name, price, company_id, inStock }) => {
  

  const companyInfo = onGetCompany(company_id);

  return (
    <div className='card col'>
      <Card title={name} className='w-25rem'>
        <h3>Precio: ${price}</h3>
        <h3>Existe en inventario: {inStock ? 'Si hay' : 'No hay'}</h3>
        <Tag value={companyInfo?.name} severity={companyInfo.color} />
      </Card>
    </div>
  );
};
