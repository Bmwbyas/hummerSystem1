import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        component: React.lazy(() => import('views/app-views/dashboard')),
    },
    {
        key: 'catalog-products',
        path: `${APP_PREFIX_PATH}/main/catalog/products`,
        component: React.lazy(() => import('views/app-views/catalog/products')),
    },
    {
        key: 'main-catalog-categories',
        path: `${APP_PREFIX_PATH}/main/catalog/categories`,
        component: React.lazy(() => import('views/app-views/catalog/categories')),
    },
    {
        key: 'catalog-collection',
        path: `${APP_PREFIX_PATH}/main/catalog/collection`,
        component: React.lazy(() => import('views/app-views/catalog/collection')),
    },
    {
        key: 'catalog-combo',
        path: `${APP_PREFIX_PATH}/main/catalog/combo`,
        component: React.lazy(() => import('views/app-views/catalog/combo')),
    },
    {
        key: 'main-clients-clientList',
        path: `${APP_PREFIX_PATH}/main/clients/client-list`,
        component: React.lazy(() => import('views/app-views/clients/clientList')),
    },
    {
        key: 'main-clients-aboutClient',
        path: `${APP_PREFIX_PATH}/main/clients/about-client`,
        component: React.lazy(() => import('views/app-views/clients/aboutClient')),
    }
]