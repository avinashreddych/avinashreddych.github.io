

import React from 'react'
import Link from '@docusaurus/Link';


export default function Card({ props }) {



    return (

        <div className='flex flex-col w-72 bg-gray-300  text-black rounded-md my-7 p-4 '>
            <h1>{props.name}</h1>
            {/* <p>
                {props.description}
            </p> */}

            <Link to={props.hyperlink} className="m-4">
                <span className='bg-gray-500 hover:bg-gray-800 hover:text-white  text-black rounded-md p-3 '>Get Started</span>
            </Link>

        </div>

    )
}
