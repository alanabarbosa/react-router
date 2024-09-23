import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useFetch from './useFetch';
import styleProduto from './Produto.module.css'

const Produto = () => {
  const params = useParams();
  const {request, data, loading, error} = useFetch();

  React.useEffect(() => {
    const fetchData = async () => await request(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);

    fetchData();
  }, [request]);

  console.log(data);

  if (error) return <p>{error}</p>
  if (loading) return <p>Carregando...</p>
  if (data)
  return (
    <div>
        <div className={styleProduto.content}>
            <div className={styleProduto.box_img}>
            {data.fotos.map((foto, index) => (
              <img 
                key={index} 
                src={foto.src} 
                alt={foto.titulo} 
                className={styleProduto.imagem}
              />
            ))}
            </div>
            <div className={styleProduto.box_text}>
               <h2>{data.nome}</h2>
               <p>R$ {data.preco}</p>
               <p>{data.descricao}</p>
            </div>
        </div>
    </div>
  );
  else return null;
};

export default Produto;
