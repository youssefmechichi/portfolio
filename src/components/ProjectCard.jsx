import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

function ProjectCard({ project, index, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <CardTitle className={featured ? 'text-2xl' : 'text-xl'}>{project.title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="space-y-4">
            {project.achievements && (
              <div>
                <p className="text-sm font-medium mb-2">Key achievements:</p>
                <ul className={`text-sm text-muted-foreground space-y-1 ${featured ? 'lg:columns-2 lg:gap-8' : ''}`}>
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className={`items-start ${featured ? 'mb-1 flex break-inside-avoid' : 'flex'}`}>
                      <span className="mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        {(project.githubUrl || project.liveUrl) && (
          <CardFooter className="mt-auto flex gap-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild className="flex-1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GitBranch className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="default" size="sm" asChild className="flex-1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View
                </a>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
