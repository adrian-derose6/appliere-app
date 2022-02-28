import { RouteObject } from 'react-router-dom';

import authRoutes from '@/features/auth/routes';

const publicRoutes: RouteObject[] = [...authRoutes];

export default publicRoutes;
