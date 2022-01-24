import React from 'react';
import { Link } from 'react-router-dom';


const FileLoader = ({id}) => {
    return (
        <>
            <h4 className="card-title">Загрузка работы</h4>
            <div className="input-group">
                <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                <Link className="btn btn-outline-secondary" type="button" to={id}>Загрузить</Link>
            </div>
        </>
    );
}

export default FileLoader;
