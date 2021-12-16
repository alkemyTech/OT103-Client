import {Route, Redirect, Switch} from 'react-router-dom';
import useAuthActions from '../../store/hooks/useAuthActions'


const PrivateRoute = (props,{component, ...rest}) => {
    const {isLogged} = useAuthActions()
    console.log (props.component); 
    return(
           <Route {...rest} render={()=> isLogged ? component  : <Redirect to="/login-form" />
        }> </Route>        
    );
};
export default PrivateRoute;