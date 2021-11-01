import React from "react";
import ContentContext from "./contentContext"; 

const ContentState = (props) => {

    const contents = [
        {
            'sentence':'This is my firt sentence'
        },
        {
            'sentence':'This is my second sentence'
        },
        {
            'sentence':'This is my third sentence'
        },
        {
            'sentence':"That is my first name is a hero and what can i do now this is my favirate word is computer."
        },
        {
            'sentence':'This is my forth sentence'
        }
       
    ]

    return ( < > 

        <ContentContext.Provider value={ contents }>
            { props.children } 
        </ContentContext.Provider>
    </>
    )
}

export default ContentState;