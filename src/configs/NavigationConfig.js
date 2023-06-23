import {DashboardOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'


const mainNavTree = [
{
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'основные',
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
        {
            key: 'main-dashboard',
            path: `${APP_PREFIX_PATH}/main/dashboard`,
            title: 'Дашборд',
            icon: DashboardOutlined,
            breadcrumb: true,
            submenu: []
        },

        {
            key: 'main-catalog',
            path: `${APP_PREFIX_PATH}/main/catalog`,
            title: 'Каталог',
            icon: ShoppingCartOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'main-catalog-products',
                    path: `${APP_PREFIX_PATH}/main/catalog/products`,
                    title: 'Товары',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'main-catalog-categories',
                    path: `${APP_PREFIX_PATH}/main/catalog/categories`,
                    title: 'Категории',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'main-catalog-collection',
                    path: `${APP_PREFIX_PATH}/main/catalog/collection`,
                    title: 'Коллекции',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'main-catalog-combo',
                    path: `${APP_PREFIX_PATH}/main/catalog/combo`,
                    title: 'Комбо',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                }
            ]
        },
        {
            key: 'main-clients',
            path: `${APP_PREFIX_PATH}/main/clients`,
            title: 'Клиенты',
            icon: UserOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'main-clients-clientList',
                    path: `${APP_PREFIX_PATH}/main/clients/client-list`,
                    title: 'Список клиентов',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'main-clients-aboutClient',
                    path: `${APP_PREFIX_PATH}/main/clients/about-client`,
                    title: 'Подробнее о клиенте',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                }
            ]
        }
    ]
}]



const navigationConfig = [
    ...mainNavTree
]

export default navigationConfig;
