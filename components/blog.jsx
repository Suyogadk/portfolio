import React, { useState } from "react";
import { Calendar, Heart, MessageCircle } from "lucide-react";

const BlogSection = ({
  sectionRef,
  visibleSections,
  cardBg,
  borderColor,
  textSecondary,
  hoverBg,
}) => {
  const initialBlogPosts = [
    {
      id: 1,
      title: "What is Marxism and why it is the foundation of communism",
      excerpt:
        "Marxism is a political philosophy and method of socioeconomic analysis that uses a dialectical materialist interpretation of historical development, known as historical materialism, to understand class relations and social conflict. It originated in the works of 19th-century German philosophers Karl Marx and Friedrich Engels. Marxism views class struggle as the central driving force of historical change, particularly between the ruling bourgeoisie and the working proletariat. It posits that capitalism, as an economic system, is flawed and will eventually fail. Marx theorized that these internal contradictions would fuel a proletarian revolution, leading to the overthrow of capitalism and the establishment of a socialist mode of production. For Marxists, this transition represents a necessary step towards a classless, stateless communist society.",
      date: "Dec 15, 2025",
      readTime: "5 min read",
      likes: 2,
      comments: 5,
      emoji: "☭",
      color: "bg-red-600", // Changed to red for thematic consistency
    },
    {
      id: 2,
      title: "Reality of Capitalism",
      excerpt:
        "The actual reality of capitalism is that it often leads to inequality, social unrest, and environmental harm. While it is praised for driving innovation and economic growth, it also poses significant challenges to society. Critics argue that the pursuit of infinite profit on a finite planet is inherently unsustainable, leading to market failures and the concentration of wealth in the hands of a few, which can undermine democratic processes and social cohesion.",
      date: "Dec 10, 2025",
      readTime: "7 min read",
      likes: 9,
      comments: 2,
      emoji: "⭐",
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Modern Web Design and the Ground Truth",
      excerpt:
        "The importance of design in influencing user perception and decision-making is more significant than ever. A well-designed website can drive sales and engagement, and it directly correlates with business success. The future of web design will be defined by advanced technologies like AI, AR, and voice interfaces, which will enhance user experiences and redefine the role of websites in modern business. By staying up-to-date with these trends, businesses can create websites that not only look good but also serve a purpose, providing a seamless and enjoyable user experience.",
      date: "Dec 5, 2025",
      readTime: "6 min read",
      likes: 3,
      comments: 5,
      emoji: "🚀",
      color: "bg-pink-500",
    },
  ];

  const [posts, setPosts] = useState(initialBlogPosts);

  // 'expanded' is an object: { [id]: boolean }
  const [expanded, setExpanded] = useState({});

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev, // Keep existing states of other cards
      [id]: !prev[id], // Toggle only the clicked card
    }));
  };

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-1000 ${
        visibleSections?.has("blog")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-10">
          Blog Posts
        </h2>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {posts.map((post, idx) => {
            const isExpanded = expanded[post.id];

            const shortText =
              post.excerpt.length > 100
                ? post.excerpt.slice(0, 150) + "..."
                : post.excerpt;

            return (
              <div
                key={post.id}
                className={`${cardBg} rounded-2xl overflow-hidden shadow-lg border ${borderColor} ${hoverBg} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500`}
                style={{
                  transitionDelay: visibleSections?.has("blog")
                    ? `${idx * 150}ms`
                    : "0ms",
                }}
              >
                <div
                  className={`h-40 ${post.color} flex items-center justify-center text-6xl transition-transform duration-300 hover:scale-110`}
                >
                  {post.emoji}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span
                      className={`text-sm ${textSecondary} flex items-center gap-1`}
                    >
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className={`text-sm ${textSecondary}`}>
                      • {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 hover:text-blue-500 transition-colors">
                    {post.title}
                  </h3>

                  <p
                    className={`${textSecondary} text-sm leading-relaxed mb-4 transition-all duration-500`}
                  >
                    {isExpanded ? post.excerpt : shortText}
                  </p>

                  {/* blog read more and */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex items-center gap-1 text-sm hover:text-red-500 transition-colors"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            post.likes >
                            initialBlogPosts.find((p) => p.id === post.id).likes
                              ? "fill-red-500 text-red-500"
                              : ""
                          }`}
                        />
                        {post.likes}
                      </button>

                      <span className="flex items-center gap-1 text-sm hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleReadMore(post.id)}
                      className="px-4 py-1.5 rounded-full border border-blue-500 text-blue-500 
                                 hover:bg-blue-500 hover:text-white 
                                 transition-all duration-300 text-xs font-semibold uppercase tracking-wider"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
