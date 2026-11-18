# Automiza — Portal de Consultoria em Automação Empresarial

Protótipo web do trabalho final da disciplina **Gerência de Projetos** (UEPA /
Engenharia de Software, 2026/2). Grupo: Mauricio Araujo Lucas, Nicolas Gabriel
Cunha de Sousa, Luiz Felipe Meneses Ferreira.

## Como rodar

Requisitos: Node.js 18+ (testado com Node 24).

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para gerar a versão de produção (recomendada para a apresentação):

```bash
npm run build
npm start
```

Deploy opcional na Vercel: importar a pasta `portal/` como projeto — zero
configuração adicional.

## Estrutura

```
portal/
├── src/
│   ├── app/                  # Páginas (App Router do Next.js)
│   │   ├── page.tsx          # Landing — problema, proposta de valor, método
│   │   ├── solucoes/         # Catálogo de soluções com filtro por categoria
│   │   ├── planos/           # Planos de contratação
│   │   ├── dashboard/        # Painel de execuções + simulação do risco R02
│   │   ├── riscos/           # Matriz P×I interativa (8 riscos do projeto)
│   │   └── contato/          # Formulário com validação e estados de erro/sucesso
│   ├── components/           # Navbar, Footer, componentes de UI
│   └── lib/
│       └── data.ts           # ★ TODOS os dados mockados e a marca
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## Onde editar o quê

| Quero mudar...               | Onde                                        |
| ---------------------------- | ------------------------------------------- |
| Nome da marca, e-mail, etc.  | `src/lib/data.ts` → constante `brand`       |
| Números do diagnóstico       | `src/lib/data.ts` → `problemaStats`         |
| Soluções do catálogo         | `src/lib/data.ts` → `solucoes`              |
| Preços e planos              | `src/lib/data.ts` → `planos`                |
| Execuções do dashboard       | `src/lib/data.ts` → `execucoesIniciais`     |
| Riscos da matriz             | `src/lib/data.ts` → `riscos`                |

## Roteiro sugerido para a Live Demo (~7 min)

1. **Landing** — problema (14 h/semana, erros em planilhas) e proposta de valor.
2. **Soluções** — filtrar por categoria; mostrar que cada card cita o pacote da EAP.
3. **Planos** — modelo de contratação em três estágios.
4. **Dashboard** — percorrer KPIs e execuções; **clicar em "Simular
   instabilidade do n8n (R02)"** e narrar a ativação do plano de contingência
   documentado na matriz de riscos; depois clicar em "Executar plano de
   contingência" para restabelecer.
5. **Riscos** — clicar no R05 (escopo) e mostrar prevenção/gatilho/contingência.
6. **Contato** — enviar o formulário vazio (mostrar validação), preencher e
   enviar (fluxo de sucesso).

> Fallback para o dia da apresentação: `npm run build && npm start` na máquina
> local funciona sem internet — os dados são 100% mockados.
