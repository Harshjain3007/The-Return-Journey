import  {Product} from '../interfaces/productinterface'



const products: Product[] = [];


export const getDataStore = () => products

export const addItem = (newProduct:Product) => {
     products .push(newProduct);
};