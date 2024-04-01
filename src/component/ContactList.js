import React from 'react'
import { SearchBox } from './SearchBox'
import { ContactItem } from './ContactItem'
import { useSelector } from 'react-redux'

export const ContactList = () => {
    const list = useSelector((state)=>state.contactList)
    const kw = useSelector((state)=>state.kw)
    let filterList = list.filter((item)=>item['name'].includes(kw))
  return (
    <div>
        <SearchBox/>
        {kw==='' ?
         list.map((item,idx)=><ContactItem key={idx} item={item}/>) :
          filterList.map((item,idx)=><ContactItem key={idx} item={item}/>)}
    </div>
  )
}
