import { service } from './config';

const call = service();

export const getAllPosts = () => call.get('/posts').then(res => res.data);
