import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Shield, Lock, Eye, Globe, Mail, Linkedin, Download, ChevronDown, Terminal, Server, Cloud, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import diogenesPhoto from './assets/diogenes-photo.jpg'
import diogenesProfessional from './assets/diogenes-professional.jpg'
import cyberBackgroundFullSite from './assets/cyber-background-full-site.jpg'
import './App.css'

function App() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Protegendo o futuro digital, um sistema de cada vez.'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const certifications = [
    { name: 'Distintivos da Credly 1', link: 'https://www.credly.com/users/diogenes-aquino-freitas/edit/reorder_badges' },
    { name: 'Distintivos da Credly 2', link: 'https://www.credly.com/users/diogenes-aquino-freitas/edit/reorder_badges' },
    { name: 'Oracle Cloud', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=6125309DCD060C70C9D5EF3FA24449C1A15C312E56FF7C70D12C75D15BB175D9' }
  ]

  const companyLogos = [
    { name: 'AWS', logo: '/src/assets/logos/aws_logo.png' },
    { name: 'Oracle', logo: '/src/assets/logos/oracle_logo.jpg' },
    { name: 'Azure', logo: '/src/assets/logos/azure_logo.png' },
    { name: 'Cisco', logo: '/src/assets/logos/cisco_logo.png' },
    { name: 'IBM', logo: '/src/assets/logos/ibm_logo.png' },
    { name: 'Stratesys-TS', logo: '/src/assets/logos/stratesys_logo.png' }
  ]

  const projects = [
    {
      title: 'WAZUH SIEM',
      description: 'Implementação prática e análise de cenários de segurança com Wazuh SIEM.',
      tech: ['SIEM', 'Security Analysis', 'Threat Detection']
    },
    {
      title: 'Laboratório Virtual de Cibersegurança',
      description: 'Simulações de ataques e defesas com VMs e SIEMs para treino prático.',
      tech: ['Virtual Machines', 'Penetration Testing', 'Defense Simulation']
    },
    {
      title: 'Laboratório de OSINT',
      description: 'Coleta e análise de informações públicas com Maltego e recon-ng.',
      tech: ['OSINT', 'Maltego', 'Intelligence Gathering']
    },
    {
      title: 'Análise de Tráfego com Wireshark',
      description: 'Monitorização de pacotes de rede e estudo de protocolos.',
      tech: ['Network Analysis', 'Wireshark', 'Protocol Analysis']
    }
  ]

  const skills = [
    { category: 'Redes & Protocolos', items: ['TCP/IP', 'DNS', 'DHCP', 'VPN'] },
    { category: 'Sistemas Operativos', items: ['Windows', 'Linux', 'System Hardening'] },
    { category: 'Ferramentas de Segurança', items: ['SIEM', 'Firewall', 'Antivirus', 'Backup Tools'] },
    { category: 'Cloud Computing', items: ['Oracle Cloud', 'AWS', 'Azure', 'Multi-cloud'] },
    { category: 'Compliance & Standards', items: ['ISO 27001', 'NIST', 'GDPR', 'CIS Benchmarks', 'Risk Assessment'] }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div 
      className="min-h-screen bg-background text-foreground"
      style={{
        backgroundImage: `url(${cyberBackgroundFullSite})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/85"></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center matrix-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold cyber-text-glow">
                  Diógenes
                  <br />
                  <span className="text-primary">Aquino Freitas</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                  Técnico Especialista em Cibersegurança
                </h2>
                <div className="h-16">
                  <p className="text-lg text-primary font-mono">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="cyber-glow pulse-glow"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contactar
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="cyber-border"
                  onClick={() => scrollToSection('projects')}
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Ver Projetos
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 cyber-glow rounded-full"></div>
                <img
                  src={diogenesPhoto}
                  alt="Diógenes Aquino Freitas"
                  className="w-80 h-80 rounded-full object-cover border-4 border-primary/50 floating"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown 
            className="h-8 w-8 text-primary animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold cyber-text-glow">
                <Shield className="inline mr-4 h-10 w-10 text-primary" />
                Sobre Mim
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Técnico Especialista em Cibersegurança em formação e estudante de Bacharelado em Sistemas e 
                  Tecnologia da Informação. Atualmente, atuo como Trainee Analista em Cibersegurança na Stratesys-TS. Apaixonado por tecnologia, segurança digital e inteligência artificial, atuo na criação de laboratórios e projetos de segurança da informação.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com experiência prévia em gestão administrativa, redes e sistemas, estou em transição para a área 
                  de Cibersegurança. Possuo certificações internacionais em Oracle Cloud, AWS e Microsoft Azure, 
                  demonstrando preparação para ambientes multicloud.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 cyber-glow rounded-lg"></div>
                  <img
                    src={diogenesProfessional}
                    alt="Diógenes Aquino Freitas - Foto Profissional"
                    className="w-80 h-96 rounded-lg object-cover border-4 border-primary/50 floating"
                  />
                </div>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="cyber-border bg-card/80">
                <CardContent className="p-6 text-center">
                  <Terminal className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Análise de Vulnerabilidades</h3>
                  <p className="text-muted-foreground">Especialização em identificação e mitigação de vulnerabilidades</p>
                </CardContent>
              </Card>
              
              <Card className="cyber-border bg-card/80">
                <CardContent className="p-6 text-center">
                  <Server className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">SIEM & SOC</h3>
                  <p className="text-muted-foreground">Experiência com ferramentas SIEM e operações de SOC</p>
                </CardContent>
              </Card>
              
              <Card className="cyber-border bg-card/80">
                <CardContent className="p-6 text-center">
                  <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Cloud Security</h3>
                  <p className="text-muted-foreground">Certificado em AWS, Azure e Oracle Cloud Infrastructure</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold cyber-text-glow mb-4">
              <Lock className="inline mr-4 h-10 w-10 text-primary" />
              Competências Técnicas
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-border bg-card/80 h-full">
                  <CardHeader>
                    <CardTitle className="text-primary">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="cyber-border">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold cyber-text-glow mb-4">
              <Award className="inline mr-4 h-10 w-10 text-primary" />
              Certificações
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-border bg-card/80 hover:cyber-glow transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                        {cert.name}
                      </a>
                    ) : (
                      <p className="font-medium">{cert.name}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Company Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 cyber-text-glow">
              Tecnologias e Plataformas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center p-4 bg-card/50 rounded-lg hover:bg-card/80 transition-all duration-300"
                >
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="h-12 w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold cyber-text-glow mb-4">
              <Globe className="inline mr-4 h-10 w-10 text-primary" />
              Projetos & Laboratórios
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-border bg-card/80 hover:cyber-glow transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-primary">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="cyber-border">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl font-bold cyber-text-glow mb-8">
              Vamos Conectar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Estou à procura de oportunidades de estágio onde possa aplicar as minhas competências técnicas 
              e crescer profissionalmente num ambiente de inovação e excelência tecnológica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="cyber-glow pulse-glow"
                onClick={() => window.open('mailto:diogenesfaquino@gmail.com')}
              >
                <Mail className="mr-2 h-5 w-5" />
                diogenesfaquino@gmail.com
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="cyber-border"
                onClick={() => window.open('https://www.linkedin.com/in/diogenes-a-freitas-4577951a1/', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-muted-foreground">
                📍 Coimbra, Portugal | 📞 +351 911 781 234
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Diógenes Aquino Freitas. Protegendo o futuro digital.
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default App

