

import NavBar from './NavBar'
import Banner from './Banner'
import ProductBar from './ProductBar';
import { Box, styled } from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from '../../constants/redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';


const Container = styled(Box)`
    padding: 7px;
    background-color: #f2f2f2;
`

function Home(){

    const { products } = useSelector(state => state.getProducts)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return(
        <>
        <NavBar />
        <Container>
        <Banner />
        <ProductBar products={products} title="Deals of the Day"/>
        <ProductBar products={products} title="Trending Offers"/>
        <ProductBar products={products} title="Best Selling"/>
        </Container>
        </>
    )
}

export default Home;