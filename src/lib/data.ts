/**
 * ============================================================
 *  AUTOMIZA — Configuração central e dados mockados do portal
 * ============================================================
 *  Projeto acadêmico — Gerência de Projetos (UEPA, 2026/2)
 *  Grupo: Mauricio Araujo Lucas · Nicolas Gabriel Cunha de Sousa
 *         Luiz Felipe Meneses Ferreira
 *
 *  Toda a "inteligência" do site vem daqui: para trocar nome da
 *  marca, preços, soluções, riscos ou números do dashboard, basta
 *  editar este arquivo. Nenhuma página precisa ser mexida.
 */

export const brand = {
  name: "Automiza",
  tagline: "Rotinas de escritório no piloto automático.",
  description:
    "Consultoria em automação empresarial: diagnosticamos os processos do seu escritório e transformamos tarefas repetitivas em fluxos automatizados com Python, PowerShell e n8n.",
  email: "contato@automiza.com.br",
  whatsapp: "+55 (94) 90000-0000",
  location: "Parauapebas – PA · atendimento presencial e remoto",
};

/* ---------------- Landing: problema (dados do diagnóstico As-Is) ---------------- */

export const problemaStats = [
  {
    valor: "14 h",
    titulo: "perdidas por semana",
    texto:
      "Média de tempo gasto pelo colaborador de escritório em tarefas repetitivas: consolidar planilhas, copiar dados entre sistemas e conferir e-mails.",
  },
  {
    valor: "1 em 3",
    titulo: "planilhas com erros",
    texto:
      "Planilhas preenchidas manualmente concentram erros de digitação e versões divergentes — a principal fonte de retrabalho no escritório.",
  },
  {
    valor: "80%",
    titulo: "das aprovações por e-mail",
    texto:
      "Fluxos de aprovação que dependem de e-mail travam quando alguém está ausente, sem rastreio de status ou prazo.",
  },
];

export const pilares = [
  {
    icone: "🔍",
    titulo: "Diagnóstico As-Is",
    texto:
      "Visita técnica e entrevistas para mapear 100% dos fluxos de trabalho atuais, identificar gargalos e priorizar as atividades com maior potencial de automação.",
  },
  {
    icone: "🐍",
    titulo: "Automações Python & PowerShell",
    texto:
      "Scripts de processamento de dados (ETL), relatórios e rotinas administrativas do Windows — com testes, logs e execução cross-platform garantida.",
  },
  {
    icone: "🔗",
    titulo: "Workflows n8n integrados",
    texto:
      "Fluxos visuais self-hosted conectando e-mail, planilhas, bancos de dados e APIs corporativas, com aprovações e notificações automáticas.",
  },
];

export const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    texto: "Mapeamento As-Is dos processos e lista priorizada de candidatos à automação.",
  },
  {
    numero: "02",
    titulo: "Requisitos",
    texto: "Especificação funcional e não-funcional, com critérios de aceite homologados pelo cliente.",
  },
  {
    numero: "03",
    titulo: "Desenvolvimento & Testes",
    texto: "PoC, scripts e workflows com cobertura de testes mínima de 80% em Windows e Linux.",
  },
  {
    numero: "04",
    titulo: "Implantação & Treinamento",
    texto: "Go-live no ambiente do cliente, manual do usuário, videoaulas e acompanhamento pós-implantação.",
  },
];

/* ---------------- Catálogo de soluções ---------------- */

export type Categoria = "Python & Dados" | "PowerShell & Windows" | "n8n & Integrações";

export interface Solucao {
  id: string;
  titulo: string;
  categoria: Categoria;
  descricao: string;
  entrega: string; // entrega associada na EAP
  tags: string[];
  demoUrl?: string;
}

export const solucoes: Solucao[] = [
  {
    id: "backup-python",
    titulo: "Backup criptografado de dados",
    categoria: "Python & Dados",
    descricao:
      "Os arquivos são criptografados, o detentor da chave de decriptografia é o cliente. O backup é feito de forma incremental e diferencial.",
    entrega: "EAP 1.3.2 — Automações com Python",
    tags: ["cryptography", "backup", "python"],
    demoUrl: "/demos/backup_cripto.zip",
  },
  {
    id: "etl-python",
    titulo: "ETL de planilhas e bases de dados",
    categoria: "Python & Dados",
    descricao:
      "Extração, transformação e carga de dados entre planilhas, sistemas e bancos — elimina a consolidação manual de relatórios.",
    entrega: "EAP 1.3.2 — Automações com Python",
    tags: ["pandas", "openpyxl", "ETL"],
  },
  {
    id: "relatorios-python",
    titulo: "Relatórios gerenciais automáticos",
    categoria: "Python & Dados",
    descricao:
      "Geração e distribuição periódica de relatórios em PDF/Excel a partir dos sistemas do cliente, prontos para a diretoria.",
    entrega: "EAP 1.3.2 — Automações com Python",
    tags: ["relatórios", "agendamento"],
  },
  {
    id: "normalizacao-cadastros",
    titulo: "Normalização de cadastros",
    categoria: "Python & Dados",
    descricao:
      "Limpeza, deduplicação e padronização de cadastros de clientes e produtos, com validação rigorosa de esquemas de entrada.",
    entrega: "EAP 1.4.1 — Testes e Qualidade",
    tags: ["qualidade de dados"],
  },
  {
    id: "rotinas-windows",
    titulo: "Rotinas administrativas do Windows",
    categoria: "PowerShell & Windows",
    descricao:
      "Backups rotativos, organização de pastas, gestão de contas no Active Directory e tarefas agendadas — tudo via PowerShell 7+.",
    entrega: "EAP 1.3.2 — Automações com PowerShell",
    tags: ["Active Directory", "backup"],
  },
  {
    id: "compatibilidade",
    titulo: "Compatibilidade cross-platform",
    categoria: "PowerShell & Windows",
    descricao:
      "Scripts de instalação e camadas de compatibilidade para que toda automação rode igualmente em Windows e servidores Linux.",
    entrega: "EAP 1.3.4 — Integração Multiplataforma",
    tags: ["Windows", "Linux"],
  },
  {
    id: "workflow-aprovacoes",
    titulo: "Fluxos de aprovação e notificação",
    categoria: "n8n & Integrações",
    descricao:
      "Workflows n8n para aprovações com rastreio de status, prazos e notificações automáticas — o fim das aprovações perdidas no e-mail.",
    entrega: "EAP 1.3.3 — Automações com n8n",
    tags: ["aprovações", "e-mail"],
  },
  {
    id: "integra-sistemas",
    titulo: "Integração entre sistemas legados",
    categoria: "n8n & Integrações",
    descricao:
      "Conexão entre e-mail, planilhas e APIs corporativas com validação de esquemas e tratamento de falhas em cada nó do fluxo.",
    entrega: "EAP 1.3.4 — Integração entre Sistemas",
    tags: ["APIs", "webhooks"],
  },
  {
    id: "onboarding",
    titulo: "Onboarding e desligamento automáticos",
    categoria: "n8n & Integrações",
    descricao:
      "Criação de acessos, pastas e comunicações de boas-vindas de novos colaboradores — e revogação ordenada nos desligamentos.",
    entrega: "EAP 1.3.3 — Automações com n8n",
    tags: ["RH", "acessos"],
  },
];

export const categorias: ("Todas" | Categoria)[] = [
  "Todas",
  "Python & Dados",
  "PowerShell & Windows",
  "n8n & Integrações",
];

/* ---------------- Planos ---------------- */

export interface Plano {
  nome: string;
  preco: string;
  destaque?: boolean;
  resumo: string;
  itens: string[];
  cta: string;
}

export const planos: Plano[] = [
  {
    nome: "Diagnóstico",
    preco: "R$ 4.900",
    resumo: "Ponto de partida ideal para descobrir onde a automação rende mais.",
    itens: [
      "Mapeamento As-Is de 100% dos processos de escritório",
      "Matriz de priorização por esforço × benefício",
      "Documento de diagnóstico aprovado com o cliente",
      "Estimativa de esforço e de retorno por automação",
      "Reunião executiva de apresentação",
    ],
    cta: "Quero o diagnóstico",
  },
  {
    nome: "Implementação",
    preco: "Sob orçamento",
    destaque: true,
    resumo: "Da PoC ao go-live: automações entregues, testadas e documentadas.",
    itens: [
      "Tudo do plano Diagnóstico",
      "PoC funcional em Windows e Linux",
      "Scripts Python/PowerShell + workflows n8n",
      "Cobertura de testes mínima de 80%",
      "Implantação nos computadores do cliente",
      "Treinamento com manual e videoaulas",
      "60 dias de suporte pós-implantação",
    ],
    cta: "Solicitar proposta",
  },
  {
    nome: "Gestão Contínua",
    preco: "R$ 1.800/mês",
    resumo: "Cuidamos das suas automações para que nunca deixem de rodar.",
    itens: [
      "Monitoramento dos workflows e scripts",
      "Ajustes de escopo com controle formal de mudanças",
      "Relatório mensal de execuções e economia de horas",
      "Atendimento de incidentes com SLA definido",
      "Revisão trimestral de novas oportunidades",
    ],
    cta: "Falar com especialista",
  },
];

/* ---------------- Dashboard (dados simulados das execuções) ---------------- */

export interface Execucao {
  id: number;
  workflow: string;
  plataforma: "Python" | "PowerShell" | "n8n";
  horario: string;
  duracao: string;
  status: "sucesso" | "falha" | "executando";
}

export const execucoesIniciais: Execucao[] = [
  { id: 1, workflow: "Importação de planilhas de vendas", plataforma: "Python", horario: "08:02", duracao: "1m 48s", status: "sucesso" },
  { id: 2, workflow: "Aprovação de notas fiscais", plataforma: "n8n", horario: "08:15", duracao: "22s", status: "sucesso" },
  { id: 3, workflow: "Backup rotativo de servidores", plataforma: "PowerShell", horario: "08:30", duracao: "6m 10s", status: "sucesso" },
  { id: 4, workflow: "Envio de relatório gerencial diário", plataforma: "Python", horario: "08:45", duracao: "2m 03s", status: "sucesso" },
  { id: 5, workflow: "Sincronização de e-mails do suporte", plataforma: "n8n", horario: "09:00", duracao: "—", status: "executando" },
  { id: 6, workflow: "Normalização de cadastro de clientes", plataforma: "Python", horario: "09:12", duracao: "3m 37s", status: "sucesso" },
];

export const execucoesPorDia = [
  { dia: "Seg", total: 118, sucesso: 116 },
  { dia: "Ter", total: 124, sucesso: 121 },
  { dia: "Qua", total: 131, sucesso: 129 },
  { dia: "Qui", total: 127, sucesso: 119 },
  { dia: "Sex", total: 142, sucesso: 140 },
];

/* ---------------- Matriz de riscos (8 riscos reais do projeto) ---------------- */

export type Estrategia = "Evitar" | "Mitigar";

export interface Risco {
  id: string;
  descricao: string;
  categoria: "Segurança & Compliance" | "Infraestrutura & Redes" | "Engenharia de Software" | "Pessoas & Processos";
  probabilidade: number; // 1–5
  impacto: number; // 1–5
  estrategia: Estrategia;
  prevencao: string;
  gatilho: string;
  contingencia: string;
  responsavel: string;
}

export const riscos: Risco[] = [
  {
    id: "R01",
    descricao: "Exposição acidental de credenciais corporativas ou dados sensíveis em nós de integração do n8n ou logs de scripts.",
    categoria: "Segurança & Compliance",
    probabilidade: 2,
    impacto: 5,
    estrategia: "Evitar",
    prevencao: "Variáveis de ambiente (.env), cofre de credenciais nativo do n8n e mascaramento de logs sensíveis.",
    gatilho: "Detecção de chaves em plain-text ou alerta de credencial exposta no repositório.",
    contingencia: "Revogar imediatamente os tokens afetados, redefinir acessos corporativos e aplicar patch no script.",
    responsavel: "Nicolas Gabriel (Tech Lead)",
  },
  {
    id: "R02",
    descricao: "Instabilidade ou indisponibilidade da instância self-hosted do n8n em servidor Linux durante fluxos de rotina.",
    categoria: "Infraestrutura & Redes",
    probabilidade: 2,
    impacto: 4,
    estrategia: "Mitigar",
    prevencao: "Reinicialização automática de contêineres Docker (restart: always) e monitoramento do consumo de memória da VM Linux.",
    gatilho: "Queda de resposta HTTP (status ≠ 200) no webhook do n8n por mais de 2 minutos.",
    contingencia: "Reiniciar o serviço via systemd/Docker e acionar processamento em lote contingencial via Python.",
    responsavel: "Luiz Felipe (Desenvolvedor)",
  },
  {
    id: "R03",
    descricao: "Falha de execução cross-platform de scripts Python/PowerShell devido a caminhos e permissões divergentes entre Windows e Linux.",
    categoria: "Engenharia de Software",
    probabilidade: 3,
    impacto: 4,
    estrategia: "Mitigar",
    prevencao: "Bibliotecas agnósticas a SO (pathlib) e validação em máquinas virtuais Windows e Linux na fase de PoC.",
    gatilho: "Erro de compilação ou falha de leitura de arquivos em testes cruzados na VM.",
    contingencia: "Ajustar script de configuração cross-platform e aplicar tratativas com normalização de barras e diretórios.",
    responsavel: "Luiz Felipe (Desenvolvedor)",
  },
  {
    id: "R04",
    descricao: "Queda na taxa de cobertura de testes unitários (< 80%) nos módulos Python (pytest) e PowerShell (Pester).",
    categoria: "Engenharia de Software",
    probabilidade: 3,
    impacto: 3,
    estrategia: "Mitigar",
    prevencao: "Verificação pré-commit e suítes pytest/Pester exigindo no mínimo 80% de cobertura para aprovar merges.",
    gatilho: "Execução da suíte de testes apontando cobertura global abaixo de 80% no branch de desenvolvimento.",
    contingencia: "Bloquear novas integrações e alocar a equipe técnica para elaboração de testes complementares.",
    responsavel: "Nicolas Gabriel (Tech Lead)",
  },
  {
    id: "R05",
    descricao: "Mudança constante de escopo pelo cliente após a entrega do documento de diagnóstico As-Is.",
    categoria: "Pessoas & Processos",
    probabilidade: 4,
    impacto: 4,
    estrategia: "Evitar",
    prevencao: "Assinatura formal do documento As-Is e processo formal de controle de mudanças com custo/prazo.",
    gatilho: "Solicitação formal de nova rotina ou alteração substancial de fluxo fora do escopo aprovado.",
    contingencia: "Congelar solicitações adicionais para avaliação no encerramento ou criar aditivo formal de cronograma.",
    responsavel: "Mauricio Araujo (Gerente de Projeto)",
  },
  {
    id: "R06",
    descricao: "Incompatibilidade de políticas de execução (ExecutionPolicy) ou bloqueio de privilégios de administrador no ambiente do cliente.",
    categoria: "Infraestrutura & Redes",
    probabilidade: 3,
    impacto: 4,
    estrategia: "Mitigar",
    prevencao: "Alinhamento prévio com o departamento de TI do cliente e validação de níveis de execução em homologação.",
    gatilho: "Script PowerShell apresentando bloqueio por permissão Restrict ou falta de elevação de privilégios.",
    contingencia: "Assinar digitalmente os scripts internamente ou solicitar criação de conta de serviço dedicada junto à TI.",
    responsavel: "Nicolas Gabriel (Tech Lead)",
  },
  {
    id: "R07",
    descricao: "Resistência técnica ou baixa adesão dos colaboradores do cliente durante o treinamento das novas automações.",
    categoria: "Pessoas & Processos",
    probabilidade: 3,
    impacto: 3,
    estrategia: "Mitigar",
    prevencao: "Manual ilustrado em PDF, videoaulas explicativas e sessões práticas e dinâmicas de treinamento.",
    gatilho: "Nota média das avaliações na sessão de treinamento inferior a 8/10 dos usuários.",
    contingencia: "Conduzir sessão tira-dúvidas presencial ou remota adicional com o time de escritório do cliente.",
    responsavel: "Mauricio Araujo (Gerente de Projeto)",
  },
  {
    id: "R08",
    descricao: "Quebra de integração com sistemas legados (e-mail/planilhas/APIs) por alteração repentina de leiaute ou portas locais.",
    categoria: "Engenharia de Software",
    probabilidade: 3,
    impacto: 4,
    estrategia: "Mitigar",
    prevencao: "Validação rigorosa de esquemas de dados de entrada e documentação de compatibilidade e contratos de API.",
    gatilho: "Exceção de parsing de planilha ou timeout contínuo de conexão em endpoint do cliente.",
    contingencia: "Isolar o nó com falha no n8n, reverter para execução assistida e acionar suporte técnico do sistema legado.",
    responsavel: "Luiz Felipe (Desenvolvedor)",
  },
];

/** Severidade a partir de P × I (escala qualitativa do projeto). */
export function severidade(p: number, i: number): { nivel: "Baixo" | "Médio" | "Alto"; cor: string } {
  const score = p * i;
  if (score >= 15) return { nivel: "Alto", cor: "bg-red-500/15 text-red-300 border-red-500/40" };
  if (score >= 8) return { nivel: "Médio", cor: "bg-amber-500/15 text-amber-300 border-amber-500/40" };
  return { nivel: "Baixo", cor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40" };
}
