import { LessonPreview } from '../index';

const Lessons = ({lessons, test}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3">
            {lessons.map((lesson, i) =>{
                if (test) {
                    console.log(123);
                    return <LessonPreview
                    title={lesson.title}
                    id={lesson.tag}
                    tag={lesson.tag}
                    key={lesson.id}
                />   
                }
                else return <LessonPreview
                    title={lesson.title}
                    id={lesson.id}
                    tag={lesson.tag}
                    key={lesson.id}
                />     
            })}    
        </div>
    );
}

export default Lessons;
