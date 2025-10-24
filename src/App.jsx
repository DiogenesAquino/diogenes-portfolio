import { motion } from "framer-motion";
import diogenesProfessional from "./assets/diogenes-professional.jpg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* ===== Header ===== */}
      <header className="text-center py-12">
        <motion.img
          src={diogenesProfessional}
          alt="Diógenes Aquino Freitas"
          className="w-40 h-40 rounded-full mx-auto shadow-xl border-4 border-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <h1 className="text-4xl font-bold mt-4 tracking-tight">
          Diógenes Aquino Freitas
        </h1>
        <p className="text-cyan-300 text-lg mt-2">
          Cibersegurança sem fronteiras 🌍 — Portugal | Espanha | Brasil | Chile | Peru
        </p>
        <p className="mt-2 text-gray-400">
          Analista de Cibersegurança | SIEMs (Wazuh, QRadar, Splunk, Sentinel) | Cloud (AWS, Azure, Oracle)
        </p>
      </header>

      {/* ===== Conteúdo Principal ===== */}
      <main className="max-w-4xl mx-auto px-6">
        {/* Experiência Internacional */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold border-b border-cyan-500 pb-2 mb-4">
            🌐 Experiência Internacional
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Atuação em projetos de Cibersegurança e Gestão de Vulnerabilidades para clientes na
            <strong> Espanha, Portugal, Brasil, Chile e Peru</strong>, integrando equipas globais da
            Stratesys e parceiros multinacionais. Experiência em SOC, Blue Team, Threat Hunting e
            Compliance (ISO 27001, NIST, GDPR).
          </p>
        </section>

        {/* Formação Acadêmica */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold border-b border-cyan-500 pb-2 mb-4">
            🎓 Formação Académica
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Bacharelado em Gestão Financeira e de Empresas</strong> — Universidade Salvador</li>
            <li><strong>Bacharelado em Tecnologias e Sistemas da Informação</strong> — UNIFACS</li>
            <li><strong>Técnico Especialista em Cibersegurança</strong> — Centro de Formação Profissional de Coimbra</li>
            <li><strong>Analista de Cibersegurança</strong> — Cisco Networking Academy</li>
          </ul>
        </section>

        {/* Competências Técnicas */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold border-b border-cyan-500 pb-2 mb-4">
            🔒 Competências Técnicas
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>SIEMs: Wazuh, QRadar, Splunk, Microsoft Sentinel</li>
            <li>Gestão de Vulnerabilidades: Qualys, Nessus</li>
            <li>Cloud: AWS, Azure, Oracle</li>
            <li>Frameworks: MITRE ATT&CK, ISO 27001, NIST, GDPR</li>
            <li>Linguagens: Python, SQL, PowerShell</li>
          </ul>
        </section>

        {/* Projetos Recentes */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold border-b border-cyan-500 pb-2 mb-4">
            🧠 Projetos Recentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Projeto 1 */}
            <motion.div
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-cyan-400 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Wazuh SIEM — Monitorização e Dashboards
              </h3>
              <p className="text-gray-300">
                Implementação e análise de alertas com Wazuh SIEM em laboratório multinuvem.
                Criação de dashboards e testes de correlação com MITRE ATT&CK.
              </p>
            </motion.div>

            {/* Projeto 2 */}
            <motion.div
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-cyan-400 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Dashboard de Vulnerabilidades — Qualys & Nessus
              </h3>
              <p className="text-gray-300">
                Automação de relatórios com Python e Power BI, integrando dados de vulnerabilidades
                de Qualys e Nessus para priorização de riscos empresariais.
              </p>
            </motion.div>

            {/* Projeto 3 */}
            <motion.div
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-cyan-400 transition-all md:col-span-2"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Cibersegurança e Cloud — Estrutura Internacional
              </h3>
              <p className="text-gray-300">
                Projetos em ambientes híbridos (Espanha, Portugal, Brasil, Chile, Peru), fortalecendo
                a resiliência cibernética e as práticas de governança em multinacionais.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certificações */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold border-b border-cyan-500 pb-2 mb-4">
            📜 Certificações e Cursos
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Google Cybersecurity Certificate</strong> — Fundamentos, Linux, SQL, Gestão de Riscos e Resposta a Incidentes.</li>
            <li><strong>Cisco Junior Cybersecurity Analyst</strong> — Detecção, Defesa e Investigação de Ameaças.</li>
            <li><strong>IBM Cybersecurity Analyst</strong> — QRadar SIEM Foundation e Inteligência Cibernética.</li>
            <li><strong>AWS Cloud Practitioner</strong> — Amazon Web Services Cloud Foundations.</li>
            <li><strong>Microsoft Azure AZ-900</strong> — Fundamentos de Nuvem e Segurança.</li>
            <li><strong>Oracle Cloud Foundations</strong> — Infraestrutura e Segurança em Nuvem.</li>
            <li><strong>ISO 27001, NIST e GDPR</strong> — Governança, Risco e Compliance.</li>
          </ul>
        </section>

        {/* Contato */}
        <section className="my-10 text-center">
          <h2 className="text-2xl font-semibold border-b border-cyan-500 pb-2 mb-4">
            📬 Vamos manter contato
          </h2>
          <p className="text-gray-300 mb-3">
            Ficarei feliz em trocar ideias sobre projetos, parcerias ou oportunidades na área de Cibersegurança.
          </p>
          <div className="space-y-2">
            <p className="text-cyan-300">
              📧 E-mail:{" "}
              <a
                href="mailto:diogenesfaquino@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                diogenesfaquino@gmail.com
              </a>
            </p>
            <p className="text-cyan-300">📱 Telefone: +351 911 781 234</p>
            <p className="text-cyan-300">
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/diogenes-a-freitas-4577951a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                linkedin.com/in/diogenes-a-freitas-4577951a1
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* ===== Rodapé ===== */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-700">
        © 2025 Diógenes Aquino Freitas — Segurança da Informação e Inovação Global 🌍
      </footer>
    </div>
  );
}

export default App;

