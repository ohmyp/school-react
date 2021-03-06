import { Routes, Route, Navigate } from "react-router-dom";

import { Home, Portfolio, ProfessionPupils, ProfessionTeachers, Projects, NotFound, CreateLesson, UpdateLesson, UpdatePost, Login, Admin, TestStatistics, Profile } from './pages/index'
import { Tests, TestQuiz, Post, Lesson, CreatePost } from './pages/index'

import { Header, Footer } from "./components/index";

import testList from './test_sources/index'
import Authprovider from "./providers/AuthProvider";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Test from "./pages/Test";


const App = () => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const posts = await axios.get(`${process.env.REACT_APP_API}/api/posts`)
      const teachers = await axios.get(`${process.env.REACT_APP_API}/api/profession/teachers`)
      console.log(1);
      const pupils = await axios.get(`${process.env.REACT_APP_API}/api/profession/pupils`)
      const tests = await axios.get(`${process.env.REACT_APP_API}/api/profession/tests`)
      const user = await axios.get(`${process.env.REACT_APP_API}/api/auth`, {headers: {'Authorization': `Bearer ${localStorage.access_token}`}})
      const status = await axios.get(`${process.env.REACT_APP_API}/api/status`)

      await setStatus(status.data[0].status)

      await dispatch({type: "ADD_POSTS", payload: posts.data})
      await dispatch({type: "ADD_LESSONS", payload: {teachers: teachers.data, pupils: pupils.data, tests: tests.data}})
      await dispatch({type: "ADD_USER", payload: user.data})
    }
    fetchData()
  }, [])

  return (
    status === 0 ? <h2 className="m-5">На сайте проводятся технические работы</h2> :

    <div className='d-flex flex-column h-100'>
        
    <Header />

     <main className='mt-3 mb-3'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post/:postID' element={<Post />}></Route>

        <Route path='/projects' element={<Projects />}/>

        <Route path='/portfolio' element={<Portfolio />}/>

        <Route path='/profession/pupils' element={<ProfessionPupils />}/>
        <Route path='/profession/pupils/:lessonID' element={<Lesson />}/>
        <Route path='/profession/teachers' element={<ProfessionTeachers />}/>
        <Route path='/profession/teachers/:lessonID' element={<Lesson />}/>
        <Route path='/profession/tests' element={<Tests />}/>
        <Route path='/profession/tests/:testName' element={<TestQuiz testList={testList}/>}/>

        <Route path='/Profile' element={<Profile />}/>

        <Route path='/admin' element={<Authprovider children={<Admin />} />}/>
        <Route path='/admin/createpost' element={<Authprovider children={<CreatePost />} />}/>
        <Route path='/admin/createlesson' element={<Authprovider children={<CreateLesson />} />} />
        <Route path='/admin/updatelesson' element={<Authprovider children={<UpdateLesson />} />} />
        <Route path='/admin/updatepost' element={<Authprovider children={<UpdatePost />} />} />
        <Route path='/admin/teststatistics' element={<Authprovider children={<TestStatistics />} />} />

        <Route path='/login' element={<Login />} />

        <Route path='/test' element={<Test />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route
          path="*"
          element={<Navigate to="/notfound" />}
        />
      </Routes> 
      </main>

      <Footer />
    </div>
  );
}

export default App;
