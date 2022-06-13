import React from "react";
import Part from "./Part";

const Content = ({parts}) => {

    const totalExercises = parts.reduce((total, part) => {
        return total + part.exercises
    }, 0)

    return (
        <div>
            {parts.map((part) =>
                <Part key={part.id} part={part}/>
            )}
            <p>total of {totalExercises} exercises</p>
        </div>
    )
}

export default Content;
