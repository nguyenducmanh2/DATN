import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './Dasboard.css';
import {Chart}  from '../chart/Chartjs';
import { Outlet, Link, useNavigate, useLocation ,Navigate} from "react-router-dom";
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

 import { fetchUserById, fetchById } from './../features/apiSave/recallApiLoading';
 // add hoook
import { useSelector, useDispatch } from 'react-redux';
import { 
    increment, 
    decrement, incrementByAmount } from './../features/counter/counterReducer';
import { useState } from 'react';
import { useAuth } from "./../main";


export const Dasboard = () => {
    const count = useSelector(state => state.counter.value);
    const name = useSelector(state => state.counter.name);
    const dispatch = useDispatch();
    // let navigate = useNavigate();
    // let location = useLocation();
    // let auth = useAuth();
    // const geUserStorage = localStorage.getItem("tokenUser");
    // if (!auth.user) {
    //   // Redirect them to the /login page, but save the current location they were
    //   // trying to go to when they were redirected. This allows us to send them
    //   // along to that page after they login, which is a nicer user experience
    //   // than dropping them off on the home page.
    //  return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    const [test, setTest] = useState(false);

    useEffect(() => {
        if(test){
            dispatch(fetchUserById());
        }
    }, [test]);
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      

    return (
        <>
        <main className='main-container'>
            
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Welcome! to</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1>...</h1>
                </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>My Website</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>...</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>At Home</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>...</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DashBoard</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>...</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer >
            <BarChart
            
            data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer >
                <LineChart
                
                data={data}
                
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
        </main>


        <Chart />
        <div>

            <button
                    aria-label="Increment value"
                    onClick={() =>  dispatch(fetchById(16))}
                >
                    call api detail 16
                </button>
            <button
                    aria-label="Increment value"
                    onClick={() =>  dispatch(fetchUserById())}
                >
                    call api
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() =>  setTest(!test)}
                >
                    call api when change any iem
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(decrement())}
                >
                    decrement
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementByAmount(3))}
                >
                    Increment + 3
                </button>

        </div>
            <h2>this is state of Redux hello: {count}</h2>
            <h2>this is state name of Redux: {name}</h2>
        
        </>
    )
}