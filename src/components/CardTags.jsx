import React from 'react'

function CardTags({ tags }) {
    return (
        <div className='flex flex-row gap-x-4'>
            {tags.map((tag, index) => {
                if (tag == "Study") return <div key={index} className='h-8 w-8 bg-red-300 rounded-full' />
                if (tag == "Vacation") return <div key={index} className='h-8 w-8 bg-orange-300 rounded-full' />
                if (tag == "Work") return <div key={index} className='h-8 w-8 bg-amber-300 rounded-full' />
                if (tag == "Hobbies") return <div key={index} className='h-8 w-8 bg-slate-300 rounded-full' />
            })}
        </div>
    )
}

export default CardTags