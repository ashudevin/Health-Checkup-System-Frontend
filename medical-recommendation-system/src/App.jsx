// src/App.jsx
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import SymptomSelector from './components/SymptomSelector';
import ResultsCard from './components/ResultsCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePrediction = async () => {
    if (selectedSymptoms.length === 0) {
      setError("Please select at least one symptom");
      return;
    }

    setLoading(true);
    setError(null);

    try { 
      const response = await axios.post('http://127.0.0.1:8000/predict', {
        symptoms: selectedSymptoms
      });
      setPrediction(response.data);
    } catch (error) {
      console.error("Error predicting disease:", error);
      setError(error.response?.data?.detail || "Failed to get prediction. Please try again or add more Symptoms.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <section className="symptom-section"> 
          <div className="card">
            <h2>Select Your Symptoms</h2>
            <p>Choose all symptoms you are experiencing from the list below</p>
            <SymptomSelector 
              selectedSymptoms={selectedSymptoms} 
              setSelectedSymptoms={setSelectedSymptoms} 
            />
            {error && <div className="error-message">{error}</div>}
            <button 
              className="predict-button" 
              onClick={handlePrediction}
              disabled={loading || selectedSymptoms.length === 0}
            >
              {loading ? "Processing..." : "Get Health Insights"}
            </button>
          </div>
        </section>

        {prediction && (
          <section className="results-section">
            <ResultsCard prediction={prediction} />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;