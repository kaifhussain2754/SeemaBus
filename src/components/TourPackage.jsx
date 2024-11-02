import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import packageData from './packageData';  // Import your packageData

const TourPackages = () => {
  const navigate = useNavigate();  // Hook for programmatic navigation

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container my-5" data-aos='fade-in'>
      <h1 className="text-center mb-4">Explore Our Tour Packages</h1>
      <p className="text-center mb-5">
        Embark on a journey with Seema Tours & Travels. Our carefully crafted tour packages, where adventure meets luxury and memories are made.
      </p>
      <div className="row">
        {packageData.map((tourPackage) => (
          <div className="col-md-4 mb-4" key={tourPackage.id} data-aos="fade-up">
            <div className="card h-100" style={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <img 
                src={tourPackage.image} 
                className="card-img-top" 
                alt={tourPackage.title} 
                style={{ borderRadius: '8px 8px 0 0', height: '300px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title" style={{ fontFamily: 'Josefin Sans' }}>{tourPackage.title}</h5>
                  <p className="card-text">{tourPackage.description.substring(0, 100)}...</p> {/* Shortened description */}
                </div>
                <Link
                  to={`/package/${tourPackage.id}`}  // Dynamic link to package details
                  className="btn mt-3"
                  style={{
                    backgroundColor: '#B17457',
                    borderColor: '#B17457',
                    color: '#fff',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
