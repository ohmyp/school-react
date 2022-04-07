const TestStat = ({ result }) => {
    if (result.length < 1) return <h5>Нет данных</h5>
    return (
            <div className="row row-cols-1 row-cols-md-3 g-4" >
                    {result.map((result, i) => 
                    <div className="col" key={result.id}>
                        <div className="card h-100" >
                            <div className="card-header">{result.testName}</div>
                            <div className="card-body">
                                <h5 className="card-title">{result.firstName} {result.lastName}, {result.classNumber}{result.classLetter}</h5>
                                {Object.entries(result.results).map((r, i) => {return <p className="card-text m-0" key={r}>{r[0]}: {r[1]}</p>})}
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">{result.date}</small>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    )
}

export default TestStat;
