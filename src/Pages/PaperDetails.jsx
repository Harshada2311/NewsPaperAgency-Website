import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JSON from '../Model/Papers.json'
import '../CSS/paperDetails.css'

const PaperDetails = () => {
    const { id } = useParams();
    const [paper, setPaper] = useState(null);

    useEffect(() => {
        const selectedPaper = JSON.find(p => p.id === parseInt(id));
        setPaper(selectedPaper);
    }, [id]);

    if (!paper) {
        return <p>Loading...</p>;
    }
    const monthlyTotal = paper.charges.reduce((acc, curr) => acc + parseInt(curr.charge), 0) * 4;
    const today = new Date().toLocaleDateString();

    return (
        <div >
            {paper ? (
                <div className="paper-detail-container">
                    <h1>{paper.papername}</h1>
                    <img src={paper.img} alt={paper.papername} />
                    <ul className="price-list">
                        {paper.charges.map((charge, index) => (
                            <li className="price-item" key={index}>
                                <span className="day">{charge.day}</span>
                                <span className="price">₹{charge.charge}</span>
                            </li>
                        ))}
                    </ul>
                    {/* Distribution Area */}
                    <div className="distribution-area">
                        <h2>Distributed In Area:</h2>
                        <ul>
                            {paper.DistributionArea.map((area, index) => (
                                <li key={index}>{area}</li>
                            ))}
                        </ul>
                    </div>
                    <p><strong>Start Date:</strong>{today}</p>
                    <p><strong>Estimated Monthly Bill:</strong> ₹{monthlyTotal}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )

}
export default PaperDetails