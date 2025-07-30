// src/app/admission/page.js
import "./page.module.css";

export default function AdmissionPage() {
  return (
    <div className="admission-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">School Admission 2025-26</h1>
          <p className="hero-subtitle">
            Join our community of excellence and shape your future
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Admission Process</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">1</div>
              <h3>Application Form</h3>
              <p>
                Fill out the online application form with all required details
              </p>
            </div>
            <div className="process-card">
              <div className="process-number">2</div>
              <h3>Document Submission</h3>
              <p>Submit all necessary documents for verification</p>
            </div>
            <div className="process-card">
              <div className="process-number">3</div>
              <h3>Entrance Test</h3>
              <p>Appear for the entrance examination (if applicable)</p>
            </div>
            <div className="process-card">
              <div className="process-number">4</div>
              <h3>Interview</h3>
              <p>Attend the personal interview with parents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="form-section">
        <div className="container">
          <h2 className="section-title">Online Application Form</h2>
          <form className="admission-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="studentName">Student Name*</label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth*</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender*</label>
                <select id="gender" name="gender" required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="class">Class Applying For*</label>
                <select id="class" name="class" required>
                  <option value="">Select Class</option>
                  <option value="nursery">Nursery</option>
                  <option value="lkg">LKG</option>
                  <option value="ukg">UKG</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="fatherName">Father's Name*</label>
                <input type="text" id="fatherName" name="fatherName" required />
              </div>
              <div className="form-group">
                <label htmlFor="motherName">Mother's Name*</label>
                <input type="text" id="motherName" name="motherName" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Complete Address*</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="form-group full-width">
              <label htmlFor="previousSchool">Previous School (if any)</label>
              <input type="text" id="previousSchool" name="previousSchool" />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Submit Application
              </button>
              <button type="reset" className="reset-btn">
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Important Information */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Required Documents</h3>
              <ul>
                <li>Birth Certificate</li>
                <li>Previous School TC</li>
                <li>Aadhar Card Copy</li>
                <li>Passport Size Photos</li>
                <li>Medical Certificate</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Important Dates</h3>
              <ul>
                <li>
                  <strong>Application Start:</strong> December 1, 2024
                </li>
                <li>
                  <strong>Application End:</strong> February 28, 2025
                </li>
                <li>
                  <strong>Entrance Test:</strong> March 15, 2025
                </li>
                <li>
                  <strong>Result Declaration:</strong> March 30, 2025
                </li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Fee Structure</h3>
              <ul>
                <li>
                  <strong>Application Fee:</strong> ₹500
                </li>
                <li>
                  <strong>Admission Fee:</strong> ₹10,000
                </li>
                <li>
                  <strong>Tuition Fee:</strong> Varies by class
                </li>
                <li>
                  <strong>Development Fee:</strong> ₹5,000
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Admission Office</h2>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Phone:</strong> +91 12345 67890
            </div>
            <div className="contact-item">
              <strong>Email:</strong> admissions@school.edu.in
            </div>
            <div className="contact-item">
              <strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 4:00 PM
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
