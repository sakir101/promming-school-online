import React from 'react';
import './Course.css'
import {Link} from 'react-router-dom'

const Course = ({ course, length }) => {
    const { name, id, photoUrl } = course;
    return (
        
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <img src={photoUrl} className="card-img-top img-fluid img-fix" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <Link to={`/category/${id}`}><button className='btn btn-outline-primary my-3'>View Details</button></Link>
            </div>
          </div>
        </div>
     
        );
}
export default Course;