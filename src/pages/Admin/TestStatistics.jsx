import axios from 'axios';
import { useState, useEffect } from 'react';
import TestStat from '../../components/TestStat/TestStat';
import CloseButton from '../../components/CloseButton/CloseButton'
const TestStatistics = () => {

    const [results, setResults] = useState([])
    const [filteredResults, setFilteredResults] = useState([])
    const [filters, setFilters] = useState({klimov: true, belov: true})

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/api/results`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.access_token
              }
        })
        .then(res => {
            console.log(res.data);
            setResults(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const checkHandler = (e) => {
        const { name } = e.target
        setFilters({...filters, [name]: !filters[name]})
    }

    useEffect(() => {
        const filtered = results.filter(res => filters[res.testId])
        console.log(filtered);
        setFilteredResults(filtered)
    }, [results, filters]);

    return (
        <div className='container'>
            <CloseButton />
            <hr />
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name='klimov' checked={filters.klimov} onChange={checkHandler}/>
                <label className="form-check-label">Климов</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name='belov' checked={filters.belov} onChange={checkHandler}/>
                <label className="form-check-label">Белов</label>
            </div>
            <hr />
            <TestStat result={filteredResults}/>
        </div>
    );
}

export default TestStatistics;
