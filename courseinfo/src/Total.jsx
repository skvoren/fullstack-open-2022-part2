import React from "react";

const Total = (props) => {
    const parts = props.parts;
    const sumOfExercises = (parts) => {
        let result = 0;
        parts.forEach(part =>
        result += part.exercises)
        return result;
    }

    return (
        <p>Number of exercises {sumOfExercises(parts)}</p>
    )
}

export default Total;
