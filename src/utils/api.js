import axios from 'axios';
import { baseURL } from './urls';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Authorization: "Bearer 2095984abb3b630d464e30e61309e1876f4fba938fe186b86c910d92ebc3dad0e150f879d68792ae60cfb94b202ae4d33dfa390848b4086b0f373bddfd140dd875ae4a081b45a2ff7d6027b476de8497d161c65bc3dde1c5a40a2596e55eb35f84a26ee8289144c47669dab7846eb884e1fc6d6294364baa4bee0a211b99fc93"
    },
});


export default api;