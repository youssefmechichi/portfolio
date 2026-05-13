import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

function ProjectsPage() {
  const projects = [
    {
      title: 'Multi-Environment GitOps Platform on AWS EKS',
      description: 'Designed and implemented a production-grade Kubernetes platform on AWS using a GitOps approach. The platform supports multiple environments (development, staging, production) and enables fully automated infrastructure provisioning and application deployment through declarative configuration.',
      achievements: [
        'Built a multi-environment architecture using Terraform with remote state management and reusable modules',
        'Deployed and managed Amazon EKS clusters with environment isolation and scalability considerations',
        'Implemented GitOps workflows using ArgoCD, enabling automated, version-controlled deployments',
        'Designed Helm-based application packaging for consistent and repeatable releases',
        'Integrated CI/CD pipelines to trigger infrastructure and application updates automatically',
        'Implemented blue/green and rolling deployment strategies to ensure zero-downtime releases',
        'Improved deployment reliability and reduced manual intervention through full automation'
      ],
      technologies: ['AWS (EKS, VPC, IAM)', 'Terraform', 'Kubernetes', 'ArgoCD', 'Helm', 'GitHub Actions', 'GitLab CI', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: null
    },
    {
      title: 'Infrastructure as Code Automation Framework for Multi-Cloud Deployment',
      description: 'Developed a comprehensive Infrastructure as Code (IaC) framework to standardize and automate the provisioning of multi-cloud environments across AWS and GCP, reducing deployment times and ensuring configuration consistency.',
      achievements: [
        'Engineered modular Terraform configurations for cross-cloud resource provisioning (AWS EC2/VPC, GCP Compute Engine)',
        'Automated server configuration and application deployment using Ansible playbooks',
        'Reduced environment provisioning time from days to under 15 minutes',
        'Implemented Git-based version control for all infrastructure changes, enabling peer review and auditability',
        'Standardized Linux server hardening and security patching via automated Bash scripts'
      ],
      technologies: ['Terraform', 'Ansible', 'AWS (EC2, VPC, IAM)', 'GCP', 'Linux', 'Bash', 'Git'],
      githubUrl: 'https://github.com',
      liveUrl: null
    },
    {
      title: 'Highly Available Microservices Architecture on AWS EKS',
      description: 'Designed and deployed a scalable, highly available microservices-based architecture on AWS using Kubernetes. The system is built to handle high traffic, ensure fault tolerance, and provide efficient load distribution across services.',
      achievements: [
        'Architected a microservices-based application deployed on Amazon EKS',
        'Implemented Application Load Balancer (ALB) for traffic routing and high availability',
        'Configured Horizontal Pod Autoscaler (HPA) for dynamic scaling based on workload',
        'Integrated Amazon RDS (Multi-AZ) for high availability and data durability',
        'Used Amazon ElastiCache (Redis) to improve performance and reduce latency',
        'Designed fault-tolerant architecture across multiple Availability Zones',
        'Performed load testing and optimized system performance under high traffic conditions'
      ],
      technologies: ['AWS (EKS, ALB, RDS, ElastiCache, S3)', 'Kubernetes', 'Docker', 'Terraform', 'Helm'],
      githubUrl: null,
      liveUrl: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Projects - DevPortfolio</title>
        <meta name="description" content="Explore my AWS cloud development projects including serverless APIs, data pipelines, infrastructure automation, and cost optimization solutions." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  Featured projects
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  A selection of AWS cloud projects demonstrating serverless architecture, infrastructure automation, and data engineering expertise.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;