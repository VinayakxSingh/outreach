import { motion } from 'framer-motion';
import { FaCalendar, FaTag, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Improve Your Website's Performance Today",
      excerpt: "Simple techniques to speed up your website and provide a better user experience without requiring a complete rebuild.",
      date: "May 10, 2025",
      category: "Web Performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBwZXJmb3JtYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 2,
      title: "The Business Case for Custom Web Applications",
      excerpt: "How investing in custom web applications can drive ROI, improve operations, and create competitive advantages for your business.",
      date: "April 25, 2025",
      category: "Business Strategy",
      image: "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzJTIwZ3Jvd3RofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 3,
      title: "Modern React Patterns Every Developer Should Know",
      excerpt: "Essential React patterns and best practices that improve code quality, performance, and maintainability in your applications.",
      date: "April 12, 2025",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBjb2RlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    }
  ];

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Blog & Resources</span>
          <h2 className="section-title">Insights & <span className="text-gradient">Knowledge</span></h2>
          <p className="section-description">
            Practical advice and insights to help you make better decisions about your web projects.
          </p>
        </motion.div>

        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <motion.div
              className="blog-card"
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <FaCalendar /> {post.date}
                  </span>
                  <span className="blog-category">
                    <FaTag /> {post.category}
                  </span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-read-more">
                  Read Article <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Subscribe to My Newsletter</h3>
          <p>Get the latest articles and resources delivered directly to your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
