# 🚁 DroneServ - Website de Serviços de Drone

Website profissional para serviços de inspeção com drones, totalmente em português brasileiro.

## 🌟 Características

- ⚛️ React 18 com TypeScript
- ⚡ Vite para desenvolvimento rápido
- 🎨 Tailwind CSS para estilização moderna
- 📱 Design totalmente responsivo
- 🇧🇷 100% em português-BR
- ✨ Animações suaves e transições
- 🚀 Otimizado para produção

## 📋 Serviços Oferecidos

- 🏗️ **Inspeção de Obras** - Monitoramento e análise de construções
- ☀️ **Inspeção de Placas Solares** - Análise termográfica de painéis fotovoltaicos
- 🏠 **Inspeção de Telhados** - Avaliação completa de coberturas
- 🌉 **Inspeção de Infraestrutura** - Análise de pontes, viadutos e torres
- 🏢 **Inspeção de Fachadas** - Detecção de problemas em revestimentos
- 🌾 **Mapeamento Topográfico** - Levantamento e modelagem 3D

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/GTauber/Test-web-app.git

# Entre no diretório
cd Test-web-app

# Instale as dependências
npm install
```

## 💻 Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 🏗️ Build

```bash
# Crie a build de produção
npm run build

# Preview da build
npm run preview
```

## 🌐 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages.

### Passos para configurar:

1. **Vá para as configurações do repositório no GitHub**
   - Settings > Pages

2. **Configure a fonte de deploy**
   - Source: GitHub Actions

3. **Push para a branch main**
   ```bash
   git push origin main
   ```

4. **O deploy acontecerá automaticamente**
   - A GitHub Action será executada
   - O site ficará disponível em: `https://gtauber.github.io/Test-web-app/`

### Deploy Manual

Se preferir fazer deploy manual:

```bash
# Build do projeto
npm run build

# O conteúdo estará na pasta dist/
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navigation.tsx    # Barra de navegação
│   ├── Hero.tsx         # Seção principal/hero
│   ├── Services.tsx     # Seção de serviços
│   ├── About.tsx        # Seção sobre
│   ├── Contact.tsx      # Formulário de contato
│   └── Footer.tsx       # Rodapé
├── App.tsx              # Componente principal
├── main.tsx            # Entry point
└── index.css           # Estilos globais
```

## 🎨 Personalização

### Cores

As cores principais podem ser personalizadas em `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#0EA5E9',    // Cor principal
      secondary: '#1E293B',  // Cor secundária
      accent: '#F59E0B',     // Cor de destaque
    },
  },
}
```

### Conteúdo

Todo o conteúdo está nos componentes em `src/components/`. Edite conforme necessário:
- Textos e descrições
- Informações de contato
- Serviços oferecidos
- Estatísticas e dados

## 🔧 Tecnologias

- [React](https://react.dev/) - Biblioteca JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Vite](https://vite.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [GitHub Pages](https://pages.github.com/) - Hospedagem

## 📝 Licença

Este projeto está sob a licença MIT.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do formulário no site ou pelos canais:

- Email: contato@droneserv.com.br
- Telefone: (11) 99999-9999
- WhatsApp: (11) 99999-9999

---

Desenvolvido com ❤️ para serviços profissionais de drone
