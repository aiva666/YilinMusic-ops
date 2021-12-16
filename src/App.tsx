import { FC } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "@/redux";
import routerConfig from "./routes/index.jsx";

import "./App.less";
import "./App.scss";

const App: FC = () => useRoutes(routerConfig);

const AppWrapper: FC = () => (
    <Provider store={Store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

export default AppWrapper;
