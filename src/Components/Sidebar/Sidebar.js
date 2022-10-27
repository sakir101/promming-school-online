import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/category')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    console.log(categories);
    return (
        <div className='my-4'>
            <h2 className='text-decoration-underline my-4'>Total Courses: {categories.length}</h2>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`} className="text-decoration-none">{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Sidebar;