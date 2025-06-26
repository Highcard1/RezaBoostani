export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Have an idea or just want to talk shop?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm open to collaborations, questions, or coffee. Let's build something bold together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@rezaboostani.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/rezaboostani"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rezaboostani"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
} 