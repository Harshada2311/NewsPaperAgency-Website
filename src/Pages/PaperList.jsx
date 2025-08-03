import React from "react";
import '../CSS/paperList.css';
import { Link } from "react-router-dom";

function PaperList({ paperList }) {
    const renderPapers = () => {
        if (paperList) {
            return paperList.map((data) => {
                return (
                    <Link to={`/Papers/${data.id}`} className="card-link-wrapper">
                        <div className="card" key={data.id}>
                            <img
                                className="card-img-top"
                                src={data.img}
                                alt={data.papername}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{data.papername}</h5>
                            </div>
                          
                        </div>
                    </Link>


                );
            });
        }
    };

    return (
        <div className="paper-list">
            {renderPapers()}
        </div>
    );
}

export default PaperList;
