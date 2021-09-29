const Header = ({course}) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({course}) => {
    // const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    const sum = course.parts.reduce((x, y) => x + y.exercises, 0)
    return (
        <p>Number of exercises {sum}</p>
    )
}

const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Content = ({course}) => {
    return (
        <div>
            {course.parts.map(x => <Part key={x.id} part={x}/>)}
        </div>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </>
    );
}


export default Course;