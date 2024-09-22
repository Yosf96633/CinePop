import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "CEO of ExampleCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This service has been absolutely wonderful! I've seen incredible improvements in my business since I started using it."
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager at CoolBrand",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I love how easy it is to use, and the customer support is outstanding. I highly recommend it to everyone!"
  },
  {
    name: "Samuel Green",
    role: "Developer at TechieDev",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    text: "It's the best tool I've used for my projects. The interface is clean, and the performance is top-notch."
  }
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="mt-4 text-gray-700">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
