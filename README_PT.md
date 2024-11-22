# MecanicaSolidosApp

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.10 e Bootstrap 6.0.1.

O **MecanicaSolidosApp** é um aplicativo educacional projetado para auxiliar no estudo da disciplina de Mecânica dos Sólidos. Ele oferece uma experiência rica e interativa por meio de várias funcionalidades:

- **Conteúdo Textual:** Explicações detalhadas sobre conceitos fundamentais e avançados de Mecânica dos Sólidos.
- **Área de Exercícios:** Permite que os usuários pratiquem e consolidem seus conhecimentos por meio de atividades práticas.
- **Galeria de Vídeos:** Inclui vídeos didáticos que complementam o conteúdo teórico e facilitam a compreensão dos tópicos abordados.
- **Referências Bibliográficas:** Apresenta fontes confiáveis para estudo adicional e aprofundamento nos temas explorados.

Atualmente, o conteúdo está mockado em arquivos JSON ou diretamente no HTML.

## Escolha de cores e design

A identidade visual foi cuidadosamente elaborada para proporcionar uma experiência agradável e eficaz:

- **Cores:** A paleta inicial foi inspirada na identidade da **FESA**. Entretanto, para evitar o uso excessivo do azul e amarelo, que em tons atuais podem induzir uma sensação de conforto excessivo e até sonolência, foi introduzida uma variação de rosa. Essa escolha visa capturar a atenção dos usuários, especialmente considerando que muitos estudantes de Engenharia da Computação, no período noturno, possuem uma rotina de trabalho intensa durante o dia.

- **Aplicativo Mobile:** Para a versão mobile, foram usados tons mais simples e amenos, pensando no uso em transporte público ou momentos de deslocamento, com o objetivo de criar uma experiência leve e intuitiva.

- **Disposição dos Itens:** O layout foi projetado para ser simples e funcional, visando atender às necessidades do público acadêmico. A navegação intuitiva e o acesso direto aos ícones e conteúdos principais foram priorizados para garantir uma interação eficiente.

---

# Descrição de Atualizações Futuras

Futuramente, a principal evolução será a integração de uma **API**, substituindo os dados mockados. Essa alteração permitirá funcionalidades mais dinâmicas, como o gerenciamento de usuários e o armazenamento seguro de dados.

## Itens planejados para atualização

1. **API:**  
   Desenvolvimento de uma API robusta para o consumo de dados no front-end, permitindo maior dinamismo e integração.
   
2. **Módulo de Login:**  
   Implementação de autenticação segura, permitindo aos usuários criar contas, salvar progresso e acessar uma área personalizada.

3. **Modo Jornada:**  
   Introdução de um modo interativo que transforma o aprendizado em uma experiência gamificada, incentivando o estudo de forma divertida e descontraída.

4. **Logs:**  
   Implementação de um sistema de logs para coleta de métricas, auxiliando na otimização de desempenho, identificação de melhorias no conteúdo e na experiência geral do usuário.

5. **Inclusão de Outras Disciplinas:**  
   Graças à arquitetura modular, será possível adicionar conteúdos de outras disciplinas ou expandir os de Mecânica dos Sólidos com facilidade.

---

## Tecnologias Cogitadas para Atualizações

1. **Backend:**  
   - Utilização do **NestJS** para desenvolver a API.

2. **Banco de Dados:**  
   - **MySQL** para armazenar dados transacionais.  
   - **MongoDB** para gerenciamento eficiente de logs e dados de telemetria.

3. **Hospedagem:**  
   - Soluções em nuvem como **AWS**, **Azure**, ou **Oracle**, configuradas com uma arquitetura de serviço único.

Essas alterações visam oferecer uma plataforma mais robusta, personalizada e com maior capacidade de expansão, sempre com foco na experiência do estudante.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você modificar algum dos arquivos fonte.

## Geração de Código

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construção

Execute `ng build` para construir o projeto. Os artefatos da construção serão armazenados no diretório `dist/`.

## Execução de Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Execução de Testes de Integração

Execute `ng e2e` para executar os testes de ponta a ponta com uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente as capacidades de teste de ponta a ponta.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página [Visão Geral do Angular CLI e Referência de Comandos](https://angular.dev/tools/cli).
