import * as api from './src/modules/api';

const initApp = ({ setClientId, setCategories, setBrands }) => {
    const CLIENT_ID = 32;
    const handler = (data) => console.log(data);
    const clientApiId = api.getClientApiId(handler, CLIENT_ID);
};

export default initApp;