import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import routes from "./config/Routes";
import "./App.css";
import Theme from "./theme";

import { UserProvider } from "context/UserContext";
import { UserManageProvider } from "context/UserManage";
const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <UserProvider>
        <UserManageProvider>
          <QueryClientProvider client={queryClient}>
            <Switch>
              {routes.map((route, index) => (
                <RouterWithSubRoutes key={index} {...route} />
              ))}
            </Switch>
          </QueryClientProvider>
        </UserManageProvider>
      </UserProvider>
    </Router>
  );
}

function RouterWithSubRoutes(route) {
  return (
    <ThemeProvider theme={Theme}>
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component routes={route.routes} {...props} />}
      />
    </ThemeProvider>
  );
}

export default App;
