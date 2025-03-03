// src/components/ResultsCard.jsx
import './ResultsCard.css';

const ResultsCard = ({ prediction }) => {
  const formatListItem = (item) => {
    if (typeof item === 'string') {
      return item.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    }
    return item;
  };

  return (
    <div className="results-card">
      <div className="results-header">
        <h2>Health Insights</h2>
      </div>

      <div className="disease-prediction">
        <div className="prediction-label">Possible Condition:</div>
        <div className="prediction-value">{prediction.predicted_disease}</div>
      </div>

      <div className="results-section">
        <h3>Description</h3>
        <div className="description-content">
          {Array.isArray(prediction.description) 
            ? prediction.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))
            : <p>{prediction.description}</p>
          }
        </div>
      </div>

      <div className="results-section">
        <h3>Precautions</h3>
        <div className="precautions-list">
          {prediction.precautions && prediction.precautions[0] && (
            <ul>
              {prediction.precautions[0].map((precaution, index) => (
                <li key={index}>{formatListItem(precaution)}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="results-grid">
        <div className="results-column">
          <h3>Recommended Medications</h3>
          {prediction.medications && prediction.medications.length > 0 ? (
            <ul className="results-list">
              {prediction.medications.map((medication, index) => (
                <li key={index}>{formatListItem(medication)}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-list">No specific medications listed. Please consult a healthcare professional.</p>
          )}
        </div>

        <div className="results-column">
          <h3>Diet Recommendations</h3>
          {prediction.diet && prediction.diet.length > 0 ? (
            <ul className="results-list">
              {prediction.diet.map((diet, index) => (
                <li key={index}>{formatListItem(diet)}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-list">No specific diet recommendations available.</p>
          )}
        </div>

        <div className="results-column">
          <h3>Exercise Recommendations</h3>
          {prediction.workout && prediction.workout.length > 0 ? (
            <ul className="results-list">
              {prediction.workout.map((workout, index) => (
                <li key={index}>{formatListItem(workout)}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-list">No specific exercise recommendations available.</p>
          )}
        </div>
      </div>

      <div className="disclaimer">
        <p><strong>Disclaimer:</strong> This information is for educational purposes only and should not replace professional medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment.</p>
      </div>
    </div>
  );
};

export default ResultsCard;