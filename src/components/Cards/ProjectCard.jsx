import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  image,
  LinkDeploy,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(0,0,0,0.2)", // Hover scaling effect
      }}
      className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
    >
      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.1 }} // Image scale effect on hover
        className="relative w-full h-48 mb-4 rounded-lg overflow-hidden justify-center items-center flex"
      >
        <img
          src={image}
          alt={title}
          width={400}
          height={200}
          className="object-cover transition-transform duration-300"
          loading="lazy"
        />
      </motion.div>

      {/* Title Section with staggered fade-in */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-xl font-semibold text-white mb-2"
      >
        {title}
      </motion.h3>

      {/* Description Section with fade effect */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-gray-400 text-sm mb-4"
      >
        {description}
      </motion.p>

      {/* Technologies with staggered animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4,
          staggerChildren: 0.1, // Staggering children (tech tags)
        }}
        className="flex flex-wrap gap-2 mb-4"
      >
        {technologies.map((tech, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }} // Stagger individual tech tags
            className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md text-xs"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* Links with scaling effects on hover */}
      <div className="flex gap-4 ">
        <motion.a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on GitHub"
          className="flex items-center text-sm font-medium bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
          whileHover={{ scale: 1.05 }} // GitHub link scale effect on hover
        >
          Link GitHub
          <ExternalLink className="ml-2 w-5 h-5" />
        </motion.a>

        {/* Optional: Deploy Link */}
        {LinkDeploy && (
          <motion.a
            href={LinkDeploy}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Live Project"
            className="flex items-center text-sm font-medium bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }} // Deploy link scale effect on hover
          >
            Deploy
            <ExternalLink className="ml-2 w-5 h-5" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};
