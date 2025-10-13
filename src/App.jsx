import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import diogenesProfessional from "./assets/diogenesProfessional.jpg";

const App = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold cyber-text-glow">
              <Shield className="inline mr-4 h-10 w-10 text-primary" />
              Sobre Mim
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Texto */}
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sou profissional de Tecnologia da Informação e Cibersegurança com experiência em grandes empresas no Brasil e Espanha, incluindo <strong>Stratesys</strong> e <strong>Carrera</strong>. Experiência prática em diversos <strong>SIEMs</strong> e ferramentas de segurança
              </p>

              {/* Skills Técnicas */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Competências Técnicas</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Sistemas Operativos */}
                  <div className="bg-primary/20 p-3 rounded-lg flex flex-col items-center">
                    <span className="font-semibold">Sistemas Operativos</span>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>Windows</li>
                      <li>Linux</li>
                      <li>macOS</li>
                    </ul>
                  </div>

                  {/* Ferramentas de Segurança */}
                  <div className="bg-primary/20 p-3 rounded-lg flex flex-col items-center">
                    <span className="font-semibold">Ferramentas de Segurança</span>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>Wazuh SIEM</li>
                      <li>Splunk</li>
                      <li>Wireshark</li>
                      <li>Metasploit</li>
                    </ul>
                  </div>

                  {/* Cloud Computing */}
                  <div className="bg-primary/20 p-3 rounded-lg flex flex-col items-center">
                    <span className="font-semibold">Cloud Computing</span>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>AWS</li>
                      <li>Azure</li>
                      <li>Oracle Cloud</li>
                    </ul>
                  </div>

                  {/* Compliance & Standards */}
                  <div className="bg-primary/20 p-3 rounded-lg flex flex-col items-center">
                    <span className="font-semibold">Compliance & Standards</span>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>ISO 27001</li>
                      <li>NIST</li>
                      <li>GDPR</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certificações */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Certificações</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
                    <img src="/icons/aws.svg" alt="AWS" className="w-5 h-5" /> AWS
                  </span>
                  <span className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
                    <img src="/icons/azure.svg" alt="Azure" className="w-5 h-5" /> Azure
                  </span>
                  <span className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
                    <img src="/icons/cisco.svg" alt="Cisco" className="w-5 h-5" /> Cisco
                  </span>
                  <span className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
                    <img src="/icons/ibm.svg" alt="IBM" className="w-5 h-5" /> IBM
                  </span>
                  <span className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
                    <img src="/icons/cis.svg" alt="CIS Benchmark" className="w-5 h-5" /> CIS Benchmark
                  </span>
                </div>
              </div>

              {/* Contato e CV */}
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Contato: <a href="mailto:diogenesfaquino@gmail.com" className="underline text-primary">diogenesfaquino@gmail.com</a> | <a href="https://www.linkedin.com/in/diogenes-a-freitas-4577951a1/" className="underline text-primary">LinkedIn</a> | <a href="CV.pdf" download className="underline text-primary">Descarregar CV</a>
              </p>
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
    </div>
  );
};

export default App;


