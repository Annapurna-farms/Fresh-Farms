import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-farm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">Have questions or want to place a bulk order?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-farm-green focus:ring-farm-green bg-gray-50 p-3" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-farm-green focus:ring-farm-green bg-gray-50 p-3" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-farm-green focus:ring-farm-green bg-gray-50 p-3" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-farm-green text-white py-3 px-4 rounded-md hover:bg-farm-green/90 transition-colors font-medium">
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="p-4 bg-white rounded-full shadow-sm">
                  <MapPin className="h-6 w-6 text-farm-green" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                <p className="mt-2 text-gray-600">
                  123 Green Valley Road<br />
                  Nashik, Maharashtra 422001<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="p-4 bg-white rounded-full shadow-sm">
                  <Phone className="h-6 w-6 text-farm-green" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                <p className="mt-2 text-gray-600">
                  +91 98765 43210
                </p>
                <p className="text-sm text-gray-500">Mon-Sat from 8am to 6pm</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="p-4 bg-white rounded-full shadow-sm">
                  <Mail className="h-6 w-6 text-farm-green" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                <p className="mt-2 text-gray-600">
                  hello@freshfarms.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
