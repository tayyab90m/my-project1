
import './App.css';
import React from 'react';
import Movis from './movi/index'
import Login from './sinup/sinup';
import ProtectedRoute from './hoc';
import Layout from './layout/layout';
import RootContext from './Context/'
import Moviedetail from './movidetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';





function App() {


    return (
        <RootContext>
        <BrowserRouter>
            <Switch>
                <Route path="/Login" exact>
                    <Login/>
                </Route>
                <ProtectedRoute path="/" exact>
                    
                        <Layout>
                    
                    </Layout>
                     <Movis path="/Movis" exact/>
                </ProtectedRoute>
                <ProtectedRoute path="/card">
                    <Layout>
                        <Moviedetail Movis={{

                            name: "khuda or Muhabat",
                            description: "4 Some quick function of a card"

                        }}
                            index={1}
                        />
                    </Layout>
                </ProtectedRoute>


            </Switch>
        </BrowserRouter>
        </RootContext>
    );
}

export default App;