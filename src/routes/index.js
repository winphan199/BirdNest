import Home from '~/pages/Home';
import routes from '~/configs/routes';

const publicRoutes = [
    { path: routes.home, component: Home },
    // { path: '/upload', component: Upload, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
