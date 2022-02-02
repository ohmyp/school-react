import axios from 'axios';
import { useState, useEffect } from 'react';

const Form = ({ test }) => {
    const inputState = {firstName: '', lastName: '', classNumber: '', classLetter: ''}
    const errorsState = {firstName: null, lastName: null, classNumber: null, classLetter: null}
    const isOkState = {firstName: false, lastName: false, classNumber: false, classLetter: false}
    const [inputData, setInputData] = useState(inputState)
    const [formErrors, setFormErrors] = useState(errorsState)
    const [formIsOk, setFormIsOk] = useState(isOkState)
    const [canSubmit, setCanSubmit] = useState(false)
    
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputData({ ...inputData, [name]: value })
        if (value === ''){
            setFormErrors({ ...formErrors, [name]: 'Поле должно быть заполнено' })
            setFormIsOk({...formIsOk, [name]: false })
        } else if (value.length > 15) {
            setFormErrors({ ...formErrors, [name]: 'Превышено допустимое значение' })
            setFormIsOk({...formIsOk, [name]: false })
        }
        else {
            setFormErrors({ ...formErrors, [name]: null })
            setFormIsOk({...formIsOk, [name]: true })
        }
    }
    useEffect(() => {
        if (Object.values(formIsOk).every(Boolean)){
            setCanSubmit(true)
        } else {
            setCanSubmit(false)
        }
    }, [inputData, formIsOk]);

    async function sendResults(e){
        e.preventDefault()
        let resultToSend = {test:{}, user:{}}
        Object.entries(test.categoryScores).forEach(score => {
            const key = test.categoryNames[score[0]]
            resultToSend.test[key] = score[1]
        })
        const formData = Object.fromEntries(new FormData(e.target).entries());
        resultToSend.user = formData
    
        console.log(resultToSend);
        const res = await axios.post('http://localhost:3001/api/results/', resultToSend);
        console.log(res);

    }


    return (
        <form onSubmit={sendResults} method='post'>
            <div className="input-group">
                <span className="input-group-text">Имя, фамилия</span>
                <input name='firstName' type="text" aria-label="First name" className="form-control" placeholder='Иван'onChange={inputHandler} value={inputData.firstName}/>
                <input name='lastName' type="text" aria-label="Last name" className="form-control" placeholder='Иванов'onChange={inputHandler} value={inputData.lastName}/>
            </div>
            <div className="input-group mt-2">
                <span className="input-group-text">Класс, буква </span>
                <select name="classNumber" className="form-select" aria-label="Default select example" onChange={inputHandler} value={inputData.classNumber}>
                    <option defaultValue value=''>Выберите класс</option>
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
                <select name="classLetter" className="form-select" aria-label="Default select example" onChange={inputHandler} value={inputData.classLetter}>
                    <option defaultValue value=''>Выберите букву</option>
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
            <button className={canSubmit?'btn btn-primary mt-2':'btn btn-primary mt-2 disabled'}>Отправить</button>
        </form>
    );
}

export default Form;
