import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

function ProjectsPage() {
  const projects = [
    {
      title: 'CloudCost AI — Production-Grade AI FinOps SaaS Platform on GCP',
      description: 'Designed and deployed a production-grade AI-powered FinOps SaaS platform on GCP to help engineering teams ingest, analyze, forecast, and optimize cloud spending. The platform combines a modern full-stack SaaS architecture, secure authentication, billing data ingestion, AI-powered recommendations, Stripe monetization, containerized deployment, and cloud-native infrastructure on GCP.',
      achievements: [
        'Built a full-stack SaaS application using Next.js 15, TypeScript, NestJS, PostgreSQL, Prisma, TailwindCSS, and Recharts',
        'Implemented secure JWT authentication with cookie-based sessions, signup/login flows, protected frontend routes, and authenticated backend APIs',
        'Designed a multi-tenant SaaS data model with Users, Organizations, Subscriptions, and Billing Records',
        'Developed a browser-based CSV billing ingestion workflow allowing users to upload cloud billing data and persist records in PostgreSQL',
        'Created real-time dashboard pages for cost overview, billing history, invoice uploads, AI Advisor, pricing, and subscription management',
        'Built a FinOps analytics engine calculating total spend, cost by service, monthly trends, forecasted spend, anomaly detection, and potential savings',
        'Implemented anomaly detection logic to identify abnormal cloud spending patterns and highlight services requiring review',
        'Developed an optimization recommendation engine suggesting cost-saving actions based on spend distribution, anomalies, and forecasted usage',
        'Built an interactive AI Advisor interface allowing users to ask cloud cost questions and receive contextual FinOps explanations',
        'Integrated Stripe Checkout, Stripe webhooks, and Stripe Billing Portal to manage Free/Pro subscriptions, payments, cancellations, invoices, and payment methods',
        'Enforced backend feature gating so Free users access basic dashboards while Pro users unlock AI Advisor, anomaly detection, forecasting, reports, and advanced recommendations',
        'Deployed a production-grade SaaS architecture on GCP using GKE Autopilot, Cloud SQL, Redis, BigQuery, and Artifact Registry',
        'Automated infrastructure provisioning with Terraform, including VPC, IAM, GKE, Cloud SQL, Redis, Secret Manager, networking rules, and service accounts',
        'Integrated Vertex AI Gemini to generate AI-powered cost explanations, anomaly summaries, and personalized optimization recommendations',
        'Implemented BigQuery ML anomaly detection to identify abnormal cloud spending patterns from historical billing data',
        'Automated PDF invoice extraction using Document AI and normalized extracted billing data into PostgreSQL and BigQuery',
        'Implemented asynchronous processing pipelines with Pub/Sub, Redis, and BullMQ to handle invoice imports, AI report generation, and scheduled background jobs',
        'Developed monthly AI-generated reports summarizing costs, anomalies, forecasts, recommendations, and estimated savings opportunities',
        'Dockerized frontend and backend services using multi-stage Docker builds and created a production Docker Compose stack for local production simulation',
        'Orchestrated services with Kubernetes and Helm, including health checks, autoscaling, secure configuration management, and environment-based deployment',
        'Added a backend health endpoint, container health checks, Prisma migration automation, and production environment variable management',
        'Implemented GitHub Actions CI/CD pipelines for backend/frontend build validation, linting, Prisma client generation, database migrations, testing, and automated deployment',
        'Added observability with Prometheus/Grafana dashboards, alerting, application logs, k6 load testing, and security controls for production readiness',
      ],
      technologies: ['Next.js 15', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Stripe', 'Docker', 'Docker Compose', 'Vercel', 'GCP', 'GKE Autopilot', 'Cloud SQL', 'BigQuery', 'Pub/Sub', 'Vertex AI Gemini', 'BigQuery ML', 'Document AI', 'Terraform', 'Helm', 'Prometheus', 'Grafana', 'k6'],
      githubUrl: 'https://github.com/youssefmechichi/cloudcost-ai',
      liveUrl: null
    },
  /* WORK IN PROGRESS{
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
    WORK IN PROGRESS*/ 
  ];

  return (
    <>
      <Helmet>
        <title>Projects - DevPortfolio</title>
        <meta name="description" content="Explore my AWS and GCP cloud development projects including serverless APIs, data pipelines, infrastructure automation, and cost optimization solutions." />
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
                  A selection of AWS and GCP cloud projects demonstrating serverless architecture, infrastructure automation, FinOps, and data engineering expertise.
                </p>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.slice(1).map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                  ))}
                </div>

                <ProjectCard project={projects[0]} index={projects.length - 1} featured />
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
