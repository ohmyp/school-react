import React from 'react';


const Form = ({ test }) => {
    const sendResults = (e) => {
        e.preventDefault()
        let resultToSend = {test:{}, user:{}}
        Object.entries(test.categoryScores).forEach(score => {
            const key = test.categoryNames[score[0]]
            resultToSend.test[key] = score[1]
        })
        const formData = Object.fromEntries(new FormData(e.target).entries());
        resultToSend.user = formData
    
        console.log(resultToSend);
    }
    return (
        <form onSubmit={sendResults} method='post'>
            <div className="input-group">
                <span className="input-group-text">Имя, фамилия</span>
                <input name='firstName' type="text" aria-label="First name" className="form-control" placeholder='Иван'/>
                <input name='lastName' type="text" aria-label="Last name" className="form-control" placeholder='Иванов'/>
            </div>
            <div className="input-group mt-2">
                <span className="input-group-text">Класс, буква </span>
                <select name="classNumber" className="form-select" aria-label="Default select example">
                    <option defaultValue>Выберите класс</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
                <select name="classLetter" className="form-select" aria-label="Default select example">
                    <option defaultValue>Выберите букву</option>
                    <option value="А">А</option>
                    <option value="Б">Б</option>
                    <option value="В">В</option>
                    <option value="Г">Г</option>
                    <option value="Д">Д</option>
                    <option value="Е">Е</option>
                    <option value="Ж">Ж</option>
                    <option value="З">З</option>
                    <option value="И">И</option>
                </select>
            </div>
            <button className='btn btn-primary mt-2'>Отправить</button>
        </form>
    );
}

export default Form;
