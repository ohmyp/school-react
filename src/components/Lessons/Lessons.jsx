import { LessonPreview } from '../index';

const Lessons = ({lessons}) => {
    console.log(lessons);
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3">
            {lessons.map((lesson, i) =>{
                return <LessonPreview
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
