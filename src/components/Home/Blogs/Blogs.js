import React from 'react';
import wilson from '../../../images/wilson.png';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';

const blogData = [
    {
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, blanditiis.',
        author: 'Dr. Hudi',
        authorImg: wilson,
        data: '23 April 2019'
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, blanditiis.',
        author: 'Dr. Sinthia',
        authorImg: wilson,
        data: '23 April 2019'
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, blanditiis.',
        author: 'Dr. Hudi',
        authorImg: wilson,
        data: '23 April 2019'
    },

]
const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 className="text-primary text-uppercase">OUR BLOG</h5>
                   <h1>From Our Blog News</h1>
               </div>
               <div className="d-flex text-align-center mt-5">
                   {
                       blogData.map(blog => <BlogPost key={blog.title} blog={blog} />)
                   }
               </div>
           </div>
       </section>
    );
};

export default Blogs;