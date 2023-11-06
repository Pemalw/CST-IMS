import React from 'react';

const About = () => {
  return (
    <div className="min-h-auto py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#003046] sm:text-4xl">
            About Our College Infirmary
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Providing quality healthcare services to our college community.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="max-w-7xl mx-auto border border-[#61AAC5] overflow-hidden shadow-lg shadow-[#61AAC5] rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                Our mission at the College Infirmary is to provide accessible, compassionate, and high-quality healthcare services to our college community. We are dedicated to promoting the health and well-being of our students, faculty, and staff, and we strive to create a safe and supportive environment where individuals can receive the care they need to thrive academically and personally.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-600">
              Our vision is to be a trusted and leading healthcare provider within the college community. We aim to continually enhance our services, embrace innovative medical practices, and foster a culture of wellness and prevention. Through collaboration, education, and a commitment to excellence, we aspire to contribute to the overall success and happiness of our college community.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Our Team</h3>
              {/* Add information about your staff members */}
              <ul className="mt-2 text-gray-600">
                <li>Jashman Gurung - Health Assistant</li>
                {/* Add more staff members */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
