import React, {useState} from "react"
function  MoodDisplay({value}) {
    const moods = {
        happy:"Keep Smiling!😃",
        sad: "It's okay to be sad sometimes 😔",
        excited:"Let's celebrate!😄",
        angry:"Take a deep breath😡",
    };
    return (
        <div className="box">
            {
                value ? <p>{moods[value]}</p> : <p>Click on a button</p>
            }

        </div>
    );
}

export default MoodDisplay ;
