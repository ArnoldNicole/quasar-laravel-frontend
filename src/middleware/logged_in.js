import store from "../store";

export default function auth({ next, Router }) {
    // if (!store.getters.isConfigured) {
    //     return router.push('/app/settings');
    // }
    // return Router.push('/login');
    // console.log(Router)
    return next();
}
