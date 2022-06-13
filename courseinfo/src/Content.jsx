import React from "react";
import Part from "./Part";

const Content = ({parts}) => {

    const TotalExercises = (parts) => {
        let result = 0

        for (let i = 0; i < parts.length; i++) {
            result+= parts[i].exercises
        }

        return result
    } 

    return (
        <div>
            {parts.map((part) =>
                <Part key={part.id} part={part}/>
            )}
            <p>total of {TotalExercises(parts)} exercises</p>
        </div>
    )
}

export default Content;
