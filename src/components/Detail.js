import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Detail() {
    const location = useLocation();
    const show = location.state.show;

    const image = show.image ? show.image.original : "/";

    return (
        <div className="show_details">
            <div className="title">{show.name}</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={image} alt="not found" height="600px" />
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-6 detail">
                        <div className="other_details">
                            <div className="language">
                                <h4>Language: {show.language}</h4>
                            </div>
                            <div className="rating">
                                <h4>Rating: {show.rating.average ? show.rating.average : 6.8}</h4>
                            </div>
                            <div className="category">
                                <h4>Category: {show.genres.join(' ')}</h4>
                            </div>
                        </div>
                        <div>
                            <h4>Summary:</h4>
                            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
                        </div>
                        <Link to="/bookshow" state={{ show }}>
                            <button className="book_ticket mx-2">Book Ticket</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
