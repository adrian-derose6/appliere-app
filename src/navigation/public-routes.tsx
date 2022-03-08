import { RouteObject } from 'react-router-dom';

import { authRoutes } from '@/features/auth';

export const publicRoutes: RouteObject[] = [...authRoutes];
