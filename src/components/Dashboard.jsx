import { useState, useMemo } from 'react';
import { Table, TableContainer, TableCell, TableRow, TableHead, TableBody, Paper, InputBase } from '@mui/material';

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
    const [direction, setDirection] = useState('asc');
    const [startFilter, setStartFilter] = useState('');
    const [endFilter, setEndFilter] = useState('');

    const filteredAndSortedStocks = useMemo(() => {
        const low = startFilter !== '' ? parseFloat(startFilter) : -Infinity;
        const high = endFilter !== '' ? parseFloat(endFilter) : Infinity;

        let filtered = stocks.filter(stock => stock.price >= low && stock.price <= high);

        filtered.sort((a, b) => {
            return direction === 'asc' ? a.price - b.price : b.price - a.price;
        });
        return filtered
    }, [startFilter, endFilter, direction]);

    const toggleSort = () => {
        setDirection(prevDirection => (prevDirection === 'asc' ? 'desc' : 'asc'));
    };

    const handleChangeStart = (e) => {
        setStartFilter(e.target.value);
    };

    const handleChangeEnd = (e) => {
        setEndFilter(e.target.value);
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ borderBottom: '2px solid black' }}>
                    <TableRow sx={{ fontWeight: '600' }}>
                        <TableCell sx={{ fontWeight: 'inherit', color: 'red' }}>Stock Name</TableCell>
                        <TableCell
                            sx={{ fontWeight: 'inherit', color: 'green', cursor: 'pointer' }}
                            onClick={toggleSort}
                        >
                            Stock Price {direction === 'asc' ? '↑' : '↓'}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredAndSortedStocks.length > 0 ? (
                        filteredAndSortedStocks.map(stock => (
                            <TableRow key={stock.id}>
                                <TableCell>{stock.name}</TableCell>
                                <TableCell>{stock.price}.00</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={2} style={{ textAlign: 'center' }}>
                                No stocks found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor='from-price' style={{ paddingLeft: '20px' }}>From $</label>
                <InputBase
                    type='number'
                    placeholder="0.00"
                    name='from-price'
                    value={startFilter}
                    sx={{ width: '25%', ml: '20px' }}
                    onChange={handleChangeStart}
                />
                <label htmlFor="to-price" style={{ paddingLeft: '20px' }}>Ending Price</label>
                <InputBase
                    type='number'
                    placeholder="0.00"
                    name='to-price'
                    value={endFilter}
                    sx={{ width: '25%', ml: '20px' }}
                    onChange={handleChangeEnd}
                />
            </div>
        </TableContainer>
    );
};

export default Dashboard;