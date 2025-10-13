# Caminho do arquivo App.jsx
$appFile = "C:\Users\acer\diogenes-portfolio\src\App.jsx"

# Verifica se o arquivo existe
if (Test-Path $appFile) {

    # Conteúdo novo da seção Sobre Mim
    $newAbout = @"
<section id=""about"" className=""py-20 relative"">
  <div className=""container mx-auto px-4 relative z-10"">
    <div className=""text-center mb-12"">
      <h2 className=""text-4xl font-bold cyber-text-glow"">
        <Shield className=""inline mr-4 h-10 w-10 text-primary"" />
        Sobre Mim
      </h2>
    </div>
    
    <div className=""grid lg:grid-cols-2 gap-12 items-center mb-12"">
      <div className=""space-y-6"">
        <p className=""text-xl text-muted-foreground leading-relaxed"">
          Sou profissional de Tecnologia da Informação e Cibersegurança, com experiência internacional em projetos com equipes do Brasil, Chile, Peru, Portugal e Espanha. Atualmente atuo como Trainee Analista em Cibersegurança na Stratesys-TS. Apaixonado por tecnologia, segurança digital e inteligência artificial, participo da criação de laboratórios e projetos de segurança da informação.
        </p>
        <p className=""text-lg text-muted-foreground leading-relaxed"">
          Possuo certificações internacionais em Oracle Cloud, AWS, Microsoft Azure, Cisco e IBM, demonstrando preparo para ambientes multicloud. Meu foco inclui Vulnerability Assessment, Incident Response, SIEM (Wazuh), campanhas de Phishing, Awareness e Cloud Computing.
        </p>
        <p className=""text-lg text-muted-foreground leading-relaxed"">
          Contato: <a href='mailto:diogenesfaquino@gmail.com'>diogenesfaquino@gmail.com</a> | <a href='https://www.linkedin.com/in/diogenes-a-freitas-4577951a1/'>LinkedIn</a> | <a href='CV.pdf'>Download CV</a>
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className=""flex justify-center""
      >
        <div className=""relative"">
          <div className=""absolute inset-0 cyber-glow rounded-lg""></div>
          <img
            src={diogenesProfessional}
            alt=""Diogenes Aquino Freitas - Foto Profissional""
            className=""w-80 h-96 rounded-lg object-cover border-4 border-primary/50 floating""
          />
        </div>
      </motion.div>
    </div>
</section>
"@

    # Lê o arquivo atual
    $content = Get-Content $appFile -Raw

    # Substitui a seção antiga pela nova
    $pattern = '(?s)<section id="about".*?</section>'
    $updatedContent = [regex]::Replace($content, $pattern, [System.Text.RegularExpressions.Regex]::Escape($newAbout))

    # Corrige barras de escape
    $updatedContent = $updatedContent -replace '\\<', '<'

    # Salva o arquivo atualizado
    Set-Content $appFile $updatedContent

    Write-Host "✅ Seção 'Sobre Mim' atualizada com sucesso no App.jsx!"

    # Git add, commit e push
    git add .
    git commit -m "Atualização automática da seção Sobre Mim com experiência internacional e certificações"
    git push
    Write-Host "✅ Alterações enviadas para o GitHub e deploy acionado no Vercel!"
} else {
    Write-Host "❌ Arquivo App.jsx não encontrado em $appFile"
}
