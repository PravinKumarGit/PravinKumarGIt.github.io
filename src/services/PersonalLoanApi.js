import api from './api';
import apiRoutes from './apiRoutes';

export const getLoanAmount = data => api.get(apiRoutes.LOAN_AMOUNT);

