import {React, useState} from 'react';
import { ResultBar } from '../components';
import { useParams, Navigate } from 'react-router-dom';

const TestQuiz = ({testList}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const {testName} = useParams()
    const test = testList[testName]

    if (!testList.hasOwnProperty(testName)){
        return <Navigate to={'../notfound'} />
    }

    const btnClick = (e) => {
        test.categoryScores[test.questions[currentQuestion].category] += Number(e.target.value)
        setCurrentQuestion(currentQuestion + 1)
        if (currentQuestion >= test.questions.length - 1) {
            setShowResult(true)
        }   
    }
    // TODO ОТПРАВКА РЕЗУЛЬТАТОВ НА ПОЧТУ И В БД
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
        <div className='container'>

            <h1>{test.title}</h1>

            {/* Тернарник: если вопросы закончились, то showResult -> true и показывается блок с результатами*/}
            {showResult 
            ? 
            <>
                {/* Вывод результатов и прогрессбаров из test.categoryScores */}
                {Object.entries(test.categoryScores).map(score => {
                    return <div key={Math.random()} className='mb-4'>
                        {/* <p className='m-0' >{test.categoryNames[score[0]]}</p> */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id={"heading"+score[0]}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+score[0]} aria-expanded="true" aria-controls={"collapse"+score[0]}>
                                        {test.categoryNames[score[0]]}
                                    </button>
                                </h2>
                                <div id={"collapse"+[score[0]]} className="accordion-collapse collapse" aria-labelledby={"heading"+score[0]} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {test.interpretation[score[0]]}
                                    </div>
                                </div>
                                <ResultBar value={score[1]} max={test.max}/>
                            </div>
                    </div>
                })}
                <form onSubmit={sendResults} method='post'>
                    <div className="input-group">
                        <span className="input-group-text">Имя, фамилия</span>
                        <input name='firstName' type="text" aria-label="First name" className="form-control" placeholder='Иван'/>
                        <input name='lastName' type="text" aria-label="Last name" className="form-control" placeholder='Иванов'/>
                    </div>
                    <div className="input-group mt-2">
                        <span className="input-group-text">Класс, буква </span>
                        <input name='classNumber' type="text" aria-label="First name" className="form-control"  placeholder='1'/>
                        <input name='classLetter' type="text" aria-label="Last name" className="form-control"  placeholder='В'/>
                    </div>
                    <button className='btn btn-primary mt-2'>Отправить</button>
                </form>
            </>
            : 
            <>
                <p>{test.subtitle}</p>
                <p>{currentQuestion + 1}/{test.questions.length}</p>
                <h3>{test.questions[currentQuestion].question}</h3>
                <button className='btn btn-outline-success btn-lg me-2' onClick={btnClick} value={test.buttons.yes}>Да</button>
                <button className='btn btn-outline-danger btn-lg me-2' onClick={btnClick} value={test.buttons.no}>Нет</button>
                <button className='btn btn-outline-warning btn-lg' onClick={btnClick} value={test.buttons.ns}>Не знаю</button>
            </>
            }
           
        </div>
    );
}

export default TestQuiz;
