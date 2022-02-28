import React from 'react'
import CharactersItem from './CharactersItem'


const CharacterGrid = ({items, isLoading}) => {
  return  isLoading ?(
       <h1>Loading.....</h1>
       ) : ( 
       <section className='cards'>
        {items.map((item)=>(
           
         
            <CharactersItem key={item.char_id} item={item}></CharactersItem>
           
               
            ))}
    </section>
    

  )
}

export default CharacterGrid