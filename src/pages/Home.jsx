import { useQuery } from '@tanstack/react-query'
import { useOutletContext } from 'react-router-dom'


const Home = () => {

    const { addToCart } = useOutletContext();

    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['storeData'],
        queryFn: async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            return await response.json()
        },
    }) 

    if (isPending) {
        return (
            <div className="home-page">
                <h1 style={{textAlign: 'center', fontSize: '5rem'}}>Welcome to our Store!</h1>
                <div style={{textAlign: 'center', fontSize: '2rem'}}>
                    <p>Loading Products...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="home-page">
                <h1 style={{textAlign: 'center', fontSize: '5rem'}}>Welcome to our Store!</h1>
                <div style={{textAlign: 'center', fontSize: '2rem'}}>
                    <p>An error has occurred: {error.message}</p>
                </div>
            </div>
        )
    }


   


    return (
        <div className="home-page">
            <h1 style={{textAlign: 'center', fontSize: '5rem'}}>Welcome to our Store!</h1>
            <div style={{textAlign: 'center', fontSize: '2rem'}}>
                <p>products</p>
                <ul style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem'}}>
                    {data.map(item => (
                        <li key={item.id}>
                            <div style={{display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between', // key!
                                    backgroundColor: 'lightgrey',
                                    height: '100%',
                                    padding: '1rem'}}>
                                <img src={item.image} alt={`image of ${item.title}`} style={{height: '200px', objectFit: 'contain'}}/>
                                <p style={{fontSize: '1.5rem'}}>{item.title}</p>
                                <p>${item.price}</p>
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home;