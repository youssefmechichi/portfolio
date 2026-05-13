import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { ArrowRight, Code2, Cloud, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>DevPortfolio - AWS Cloud Developer</title>
        <meta name="description" content="Professional portfolio showcasing AWS cloud development projects and expertise in serverless architecture, infrastructure as code, and cloud-native solutions." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1698945298361-365595d400eb"
              alt="Modern technology workspace with code and cloud infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
          </div>

          {/* Hero Content */}
          <div className="container relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <img
                src="/profile-photo.png"
                alt="Youssef Mechichi"
                className="mx-auto mb-8 h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border-4 border-background shadow-xl ring-1 ring-border"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Building scalable cloud solutions on AWS
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Cloud developer specializing in serverless architecture, infrastructure automation, and cost-optimized AWS deployments. Turning complex requirements into elegant, maintainable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base transition-all duration-200 active:scale-[0.98]">
                  <Link to="/projects">
                    View my projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">
                    Get in touch
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Overview */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
                Core expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cloud architecture</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Designing and implementing scalable AWS infrastructure using Lambda, API Gateway, DynamoDB, and S3. Focus on serverless patterns and event-driven architectures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Code2 className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Infrastructure as code</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Automating deployments with CloudFormation, CDK, and Terraform. Version-controlled infrastructure that enables consistent, repeatable deployments across environments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data engineering</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Building data pipelines with AWS Glue, Athena, and Kinesis. Processing and analyzing large datasets with efficient ETL workflows and real-time streaming.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">CI/CD automation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Implementing automated testing and deployment pipelines with CodePipeline, CodeBuild, and GitHub Actions. Fast, reliable releases with comprehensive quality gates.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
