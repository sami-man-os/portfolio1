import { api } from './client'

export const getHealth = () => api.get('/health').then((response) => response.data)