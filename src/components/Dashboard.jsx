{/*  
Question: Build a Dynamic Stock Price Dashboard
Problem Statement:
You are tasked with building a simple stock price dashboard in React. This dashboard should display a list of stocks, allow the user to filter them by price range, and sort the stocks by price in ascending or descending order.

Your application should meet the following requirements:

Display a list of stocks with their names and current prices.
Allow the user to filter the stocks within a specific price range (e.g., $100 - $300).
Allow the user to toggle between sorting the stock prices in ascending or descending order.
The stock list should update dynamically when the user changes the filter or sorting options.

1) Create rough list of stocks and priices.
2) Display of stocks with names and prices.
3) create function to filter stocks by price range
4) create function to sort by ascending or descending order.
5) add functions to appropriate event handlers



*/}

import { useState, useEffect, useReducer } from 'react'
import { Table, TableContainer, TableCell, TableRow, TableHead, TableBody } from '@mui/material'

const stocks = [
    { id: 1, name: 'Apple', price: 150 },
    { id: 2, name: 'Google', price: 2800 },
    { id: 3, name: 'Tesla', price: 750 },
    { id: 4, name: 'Amazon', price: 3400 },
    { id: 5, name: 'Microsoft', price: 299 },
    { id: 6, name: 'Meta', price: 380 },
    { id: 7, name: 'Netflix', price: 620 },
];

const Dashboard = () => {


    return (
        <TableContainer component={paper}>
            <Table >
                <TableHead>
                    <TableCell>Stock Name</TableCell>
                    <TableCell>Stock Price</TableCell>
                </TableHead>
                <TableBody>
                {stocks.map((stock, index) =>
                    <TableRow key={index}>
                        <TableCell>{stock.name}</TableCell>
                        <TableCell>{stock.price}.00</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
};
export default Dashboard;