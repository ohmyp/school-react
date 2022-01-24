import {React, useState} from 'react';
import { ResultBar, Form, Accordion } from '../components';
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

    return (
        <div className='container'>

            <h1>{test.title}</h1>

            {/* Тернарник: если вопросы закончились, то showResult -> true и показывается блок с результатами*/}
            {showResult 
            ? 
            <>
                {/* Вывод результатов и прогрессбаров из test.categoryScores, где score = [name, value] */}
                {Object.entries(test.categoryScores).map(score => {
                    return <div key={Math.random()} className='mb-4'>
                                <Accordion name={score[0]} test={test} />
                                <ResultBar value={score[1]} max={test.max}/>
                            </div>
                })}
                <Form test={test}/>
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
