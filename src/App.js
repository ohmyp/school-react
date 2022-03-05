import { Routes, Route, Navigate } from "react-router-dom";

import { Home, Outschool, Portfolio, ProfessionPupils, ProfessionTeachers, Projects, NotFound, CreateLesson, UpdateLesson, UpdatePost, Login, Admin, TestStatistics } from './pages/index'
import { Tests, TestQuiz, Post, Lesson, CreatePost } from './pages/index'

import { Header, Footer } from "./components/index";

import testList from './test_sources/index'
import Authprovider from "./providers/AuthProvider";

function App() {
  return (
    <div className='d-flex flex-column h-100'>
        
    <Header />

     <main className='mt-3 mb-3'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post/:postID' element={<Post />}></Route>

        <Route path='/projects' element={<Projects />}/>

        <Route path='/outschool' element={<Outschool />}/>

        <Route path='/portfolio' element={<Portfolio />}/>

        <Route path='/profession/pupils' element={<ProfessionPupils />}/>
        <Route path='/profession/pupils/:lessonID' element={<Lesson />}/>
        <Route path='/profession/teachers' element={<ProfessionTeachers />}/>
        <Route path='/profession/teachers/:lessonID' element={<Lesson />}/>
        <Route path='/profession/tests' element={<Tests />}/>
        <Route path='/profession/tests/:testName' element={<TestQuiz testList={testList}/>}/>

        <Route path='/admin' element={<Authprovider children={<Admin />} />}/>
        <Route path='/admin/createpost' element={<Authprovider children={<CreatePost />} />}/>
        <Route path='/admin/createlesson' element={<Authprovider children={<CreateLesson />} />} />
        <Route path='/admin/updatelesson' element={<Authprovider children={<UpdateLesson />} />} />
        <Route path='/admin/updatepost' element={<Authprovider children={<UpdatePost />} />} />
        <Route path='/admin/teststatistics' element={<Authprovider children={<TestStatistics />} />} />

        <Route path='/login' element={<Login />} />

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
