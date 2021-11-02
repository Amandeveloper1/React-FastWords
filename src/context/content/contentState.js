import React from "react";
import ContentContext from "./contentContext"; 

const ContentState = (props) => {

    const contents = [
        {
            'sentence':'By adding short prepositional phrases to your sentence, you can tell when or where something happens A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence. adding short prepositional phrases to your sentence, you can tell when or where something happens A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence. adding short prepositional phrases to your sentence, you can tell when or where something happens A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence. adding short prepositional phrases to your sentence, you can tell when or where something happens A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence.'
        },
        {
            'sentence':'simplest sentences in English take the verb be, but be is not the only verb in English. Be is actually a primary auxiliary verb. The vast majority of verbs in English belong to a category called lexical verbs By adding short prepositional phrases to your sentence, you can tell when or where something happens A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence. By adding short prepositional phrases to your sentence, you can tell when or where something happens A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence. By adding short prepositional phrases to your sentence, you can tell when or where something happens A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence.'
        },
        {
            'sentence':'Note that we cannot use articles before an adjective. However, if the adjective is followed by a singular noun we have to use an article or another determiner By adding short prepositional phrases to your sentence, you can tell when or where something happens A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence. By adding short prepositional phrases to your sentence, you can tell when or where something happens A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence. By adding short prepositional phrases to your sentence, you can tell when or where something happens A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence.'
        },
        {
            'sentence':'A prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence. By adding short prepositional phrases to your sentence, you can tell when or where something happens prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence. By adding short prepositional phrases to your sentence, you can tell when or where something happens prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence. By adding short prepositional phrases to your sentence, you can tell when or where something happens  prepositional phrase is a group of words that begins with a preposition. The prepositional phrase usually goes at the end of the sentence.'
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