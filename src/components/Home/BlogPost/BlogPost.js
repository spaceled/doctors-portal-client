import React from 'react';

const BlogPost = ({blog}) => {
    return (
        
        <div className="card shadow-sm">
            <div className="card-header d-flex align-items-center">
                <img src={blog.authorImg} alt="" className="mx-3" width="60"/>
                <div>
                    <h6 className="text-primary">{blog.author}</h6>
                    <p className="m-0">{blog.data}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{blog.title}</h5>
                <p className="card-text text-secondary mt-4">{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogPost;