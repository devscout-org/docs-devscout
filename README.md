# docs-devscout

Documentação oficial do DevScout - Plataforma de oportunidades para desenvolvedores.

## 📚 Sobre este repositório

Este repositório contém toda a documentação pública do DevScout, incluindo tutoriais, guias de uso, informações técnicas e FAQ. A documentação é gerada usando [VitePress](https://vitepress.dev/) e é automaticamente deployada no Cloudflare Pages.

## 🚀 Deploy Automático

A documentação é automaticamente deployada no [Cloudflare Pages](https://docs.devscout.app/) sempre que há um push na branch `main`.

### Workflow de Deploy:

1. Push para `main` → Trigger do GitHub Actions
2. Build do VitePress → Gera arquivos estáticos
3. Deploy no Cloudflare Pages → Documentação atualizada

## 📁 Estrutura do Projeto

```
docs-devscout/
├── .vitepress/           # Configuração do VitePress
├── tutorials/            # Tutoriais e guias de uso
├── technical-informations/ # Informações técnicas
├── user-related/         # Políticas e termos
├── img/                  # Imagens da documentação
└── .github/workflows/    # Configuração de CI/CD
```

## 🛠️ Desenvolvimento Local

### Pré-requisitos

-   Node.js 18+
-   npm

### Instalação

```bash
npm install
```

### Comandos Disponíveis

```bash
# Desenvolvimento local
npm run docs:dev

# Build para produção
npm run docs:build

# Preview do build
npm run docs:preview
```

## 📝 Regras de Contribuição

### 1. Estrutura de Branches

-   **main**: Branch principal (protegida)
-   **feature/\***: Novas funcionalidades/documentação
-   **fix/\***: Correções e melhorias

**Nota**: As branches são automaticamente deletadas após o merge do PR.
### 2. Fluxo de Trabalho

1. **Crie uma branch** para suas mudanças:

    ```bash
    git checkout -b feature/nova-documentacao
    ```

2. **Faça suas alterações** na documentação

3. **Teste localmente**:

    ```bash
    npm run docs:dev
    ```

4. **Commit e push**:

    ```bash
    git add .
    git commit -m "docs: adiciona nova seção de tutoriais"
    git push origin feature/nova-documentacao
    ```

5. **Crie um Pull Request** no GitHub

6. **Aguarde aprovação** e deploy automático

### 3. Padrões de Commit

Use prefixos descritivos:

-   `docs:` - Adições/atualizações de documentação
-   `fix:` - Correções na documentação
-   `feat:` - Novas funcionalidades na documentação
-   `chore:` - Tarefas de manutenção

### 4. Estrutura de Conteúdo

-   **Tutoriais**: Guias passo-a-passo para usuários
-   **Informações Técnicas**: Detalhes técnicos e limites
-   **Políticas**: Termos de uso e privacidade
-   **FAQ**: Perguntas frequentes

### 5. Regras de Qualidade

-   ✅ Sempre teste localmente antes do PR
-   ✅ Use linguagem clara e acessível
-   ✅ Mantenha links funcionando
-   ✅ Atualize o índice quando adicionar páginas
-   ✅ Use imagens otimizadas (formato WebP quando possível)
-   ✅ Siga o padrão de nomenclatura existente

## 🔧 Configuração do VitePress

O arquivo `.vitepress/config.mts` contém:

-   Configuração de navegação
-   Sidebar com estrutura da documentação
-   Tema e aparência
-   Links sociais

## 🚨 Proteções da Branch Main

A branch `main` está protegida com:

-   ✅ Pull Request obrigatório
-   ✅ 1 aprovação necessária
-   ✅ Status checks obrigatórios (deploy)
-   ✅ Resolução de conversas obrigatória
-   ✅ Force push bloqueado

## 📊 Status do Deploy

-   **URL de Produção**: https://devscout-docs.pages.dev/
-   **Status**: Automático via GitHub Actions
-   **Build**: VitePress → Cloudflare Pages

## 🆘 Troubleshooting

### Problemas Comuns

**Deploy falhou:**

1. Verifique os logs no GitHub Actions
2. Confirme se os secrets do Cloudflare estão configurados
3. Teste o build localmente: `npm run docs:build`

**Página não atualiza:**

1. Aguarde alguns minutos (cache do Cloudflare)
2. Verifique se o PR foi mergeado na main
3. Confirme se o workflow passou

**Erro de build local:**

1. Verifique se Node.js 18+ está instalado
2. Delete `node_modules` e `npm install` novamente
3. Verifique se todos os arquivos estão commitados

## 📞 Suporte

Para dúvidas sobre a documentação:

-   Abra uma issue no GitHub
-   Entre em contato com o Adam @adamsnows (X)
-   Consulte a documentação do VitePress para dúvidas técnicas

---

**Última atualização**: 23/07/2025
**Versão**: 1.0.0
