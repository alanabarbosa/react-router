import React from 'react'
import { NavLink } from 'react-router-dom';
import useFetch from './useFetch';
import styleProduto from './Produtos.module.css'

const Produtos = () => {
    const {request, data, loading, error} = useFetch();

    React.useEffect(() => {
      const fetchData = async () => await request('https://ranekapi.origamid.dev/json/api/produto');
      fetchData();
    }, [request]);

    console.log(data)

    if (error) return <p>{error}</p>
    if (loading) return <p>Carregando...</p>
    if (data)
    return (
        <div className={styleProduto.content}>
            {data.map((produto) => (
                <NavLink key={produto.id} to={`/produtos/${produto.id}`} end>
                    <img src={produto.fotos[0].src} alt={produto.nome} />
                    <h1>{produto.nome}</h1>
                </NavLink>
                ))}
        </div>
    );
    else return null;
}

export default Produtos
