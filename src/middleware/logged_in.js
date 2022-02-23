import store from "../store/index"
export default function auth({ next, Router }) {
  const s  = store();
 const logged_in =  s.getters['auth/isAuthenticated'];
    if(!logged_in){
     return next('login')
    }
    return next();
}
