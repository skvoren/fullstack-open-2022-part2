import React from 'react';
import Language from "./Language";

const LanguagesList = ({languages}) => {
    const languagesValues = Object.values(languages)
    return (
        <div>
            <h4>Languages:</h4>
            <ul>
                {languagesValues.map(language =>
                    <Language key={language} languageData={language}/>
                )}
            </ul>
        </div>
    );
};

export default LanguagesList;
