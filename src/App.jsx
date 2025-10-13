

import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Cloud, FileCheck2, Tool } from "lucide-react"; 
import diogenesProfessional from "./assets/diogenesProfessional.jpg";

// Dados para as Competências Técnicas
const technicalSkills = [
  {
    category: "Sistemas Operativos",
    skills: ["Windows", "Linux", "macOS"],
    icon: <Cpu className="w-6 h-6 mr-2 text-primary" />
  },
  {
    category: "Ferramentas de Segurança",
    skills: ["Wazuh SIEM", "Splunk", "Wireshark", "Metasploit"],
    icon: <Tool className="w-6 h-6 mr-2 text-primary" />
  },
  {
    category: "Cloud Computing",
    skills: ["AWS", "Azure", "Oracle Cloud"],
    icon: <Cloud className="w-6 h-6 mr-2 text-primary" />
  },
  {
    category: "Compliance & Standards",
    skills: ["ISO 27001", "NIST", "GDPR"],
    icon: <FileCheck2 className="w-6 h-6 mr-2 text-primary" />
  },
];

// Dados para as Certificações
const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    icon: null,
    link: "https://www.credly.com/badges/ec604bee-8d2e-4523-90c3-7433a324bb4c"
  },
  {
    name: "Oracle Cloud Infrastructure Foundations Associate",
    icon: null,
    link: "https://learn.microsoft.com/api/credentials/share/pt-br/DiogenesAquino6561/C3DB4BE8369FE05A?sharingId=56812747D84CB777"
  },
  {
    name: "AZ-900 Azure – Microsoft",
    icon: null,
    link: "https://learn.microsoft.com/api/credentials/share/pt-br/DiogenesAquino6561/C3DB4BE8369FE05A?sharingId=56812747D84CB777"
  },
  {
    name: "Inteligência contra ameaças cibernéticas IBM",
    icon: null,
    link: "https://www.credly.com/badges/7a9b5893-6e6c-4d4f-b01f-38eb99f01874/public_url"
  },
  {
    name: "CIS Benchmark",
    icon: null,
    link: "#" // Coloque o link real se tiver
  },
];

// Dados para a Experiência Profissional
const professionalExperience = [
  {
    company: "STRATASYS, LTD",
    location: "Espanha/Portugal",
    period: "2025",
    role: "Consultor Analista",
    responsibilities: [
      "Análise de mais de 150 alertas de segurança semanais utilizando SIEMs (Wazuh, Splunk, IBM QRadar), contribuindo para a deteção e mitigação de ameaças e reduzindo o tempo médio de resposta em 15%.",
      "Realização de varreduras mensais de vulnerabilidades com Qualys e Nessus, identificando e priorizando riscos de segurança, resultando numa redução de 20% nas vulnerabilidades críticas. Suporte em apresentações técnicas de compliance para clientes internacionais."
    ]
  },
  {
    company: "CARREIRA LOGISTICA",
    location: "Portugal/Espanha",
    period: "2022-2024",
    role: "Assistente Administrativo - Sistema e Redes internas",
    responsibilities: [
      "Coordenação da comunicação com a equipe técnica em Espanha para a gestão e atualização de redes e sistemas, garantindo 99% de uptime dos serviços.",
      "Implementação e gestão de soluções de antivírus e AntiSpam para uma base de mais de 50 usuários, resultando numa redução de 30% em incidentes de phishing e malware.",
      "Gestão do ciclo de vida de identidades e acessos (IAM) para múltiplos sistemas, assegurando o princípio do menor privilégio e realizando auditorias de acesso trimestrais."
    ]
  }
];

const App = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold cyber-text-glow">
              <Shield className="inline mr-4 h-10 w-10 text-primary" />
              Sobre Mim
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Texto */}
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sou profissional de Tecnologia da Informação e Cibersegurança com experiência em grandes empresas no Brasil e Espanha, incluindo <strong>Stratesys</strong> e <strong>Carrera</strong>. Experiência prática em diversos <strong>SIEMs</strong> e ferramentas de segurança
              </p>

              {/* Skills Técnicas */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Competências Técnicas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {technicalSkills.map((skillCategory, index) => (
                    <div key={index} className="bg-gradient-to-br from-primary/10 to-background p-6 rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        {skillCategory.icon}
                        <h4 className="font-bold text-lg text-primary">{skillCategory.category}</h4>
                      </div>
                      <ul className="text-sm space-y-2">
                        {skillCategory.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center">
                            <span className="mr-2 text-accent">•</span> {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificações */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Certificações</h2>
                <div className="flex flex-wrap gap-4">
                  {certifications.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full hover:bg-primary/30 transition-colors duration-200"
                    >
                      {cert.icon && <img src={cert.icon} alt={cert.name} className="w-5 h-5" />}
                      {cert.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contato e CV */}
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Contato: <a href="mailto:diogenesfaquino@gmail.com" className="underline text-primary hover:text-accent transition-colors duration-200">diogenesfaquino@gmail.com</a> | 
                <a href="https://www.linkedin.com/in/diogenes-a-freitas-4577951a1/" className="underline text-primary hover:text-accent transition-colors duration-200 ml-2">LinkedIn</a>
              </p>
              <div className="mt-6">
                <a 
                  href="CV.pdf" 
                  download 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors duration-200 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Descarregar CV
                </a>
              </div>
            </div>

            {/* Imagem */}
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
                  alt="Diogenes Aquino Freitas - Foto Profissional"
                  className="w-80 h-96 rounded-lg object-cover border-4 border-primary/50 floating"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiência Profissional */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold cyber-text-glow">
              <Shield className="inline mr-4 h-10 w-10 text-primary" />
              Experiência Profissional
            </h2>
          </div>
          <div className="space-y-10">
            {professionalExperience.map((job, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary">{job.role}</h3>
                <p className="text-lg text-white mt-1">{job.company} - {job.location} ({job.period})</p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  {job.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;


