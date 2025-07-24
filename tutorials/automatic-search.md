<div class="automatic-search-page">

# Configurando a Busca Automática

::: tip 🔎 Dica
Mantenha o mouse pressionado para dar zoom na imagem.
:::

Nessa página você vai aprender a definir os principais parâmetros para que o DevScout possa encontrar as vagas que **realmente se encaixam no que você quer e precisa.**

A configuração da busca automática é dividida em três etapas ⬇️

## Configurações de Email

<br />
<img src="/img/automatic-search-form-step-one.png" alt="Automatic Search Form - Step One Screen" class="zoom-img" />

Aqui é onde você vai configurar seu e-mail para que o DevScout possa enviar suas aplicações, é bem simples e você precisa de apenas 3 informações:

Seu email, a senha app e o seu nome.

<span class="highlight-green"> **Campos padronizados** ✅ </span>

Os campos **Servidor SMTP** e **Porta SMTP** são padronizados - pois o DevScout utiliza exclusivamente o Gmail e a porta 587 é a porta padrão para TLS.

<span class="highlight-yellow"> **Campos que você precisa preencher ⚠️**</span>

**Email**: Seu endereço de email, que define também o conteúdo da variável <span class="orange-tags"> {contact_info} </span>.

**Senha APP do Gmail**: Você precisa criar uma senha específica para a utilização do DevScout, que você pode configurar clicando no link “_Gerar senha de aplicativo do Gmail_”.

::: warning ⚠️ Atenção
A senha a ser cadastrada não é a senha do seu e-mail e sim uma senha gerada através do APP gmail.
:::

No campo Nome do Remetente você define o que será usado na variável <span class=orange-tags>{sender_name}</span>.

Depois disso, é só clicar em “Testar Conexão” e aguardar a confirmação de que seu e-mail está devidamente configurado - a confirmação ocorre com esse aviso:

<div class="space-images">
<img src="/img/automatic-search-form-mail-confirmation.png" alt="Automatic Search Form - Mail Confirmation" class="zoom-img" />
</div>

## Configurações de Busca

<br>
<img src="/img/automatic-search-form-step-two.png" alt="Automatic Search Form - Step Two Screen" class="zoom-img" />

Aqui você vai definir os principais parâmetros para a que o DevScout possa encontrar as vagas que realmente se encaixam no que você quer e precisa - vamos lá! ⬇️

<span class="highlight-green"> **Campos padronizados ✅** </span>

Aqui só existe um campo padrão: **“Máx. Candidaturas/Dia”** - que é preenchido automaticamente conforme o limite de candidaturas do seu plano [plano](https://docs.devscout.app/plans.html).

<span class="highlight-yellow"> **Campos que você precisa preencher ⚠️** </span>

**Palavras-chave** - Tecnologias, Habilidades, Skills ou termos relacionados ao emprego que você executa ou procura. <br /> <span class="examples"> Ex. React, Python, Node, JavaScript, PMI, Agile</span>

**Localizações** - Países, Estados e Municípios que você quer que sejam incluídos na busca. <br/> <span class="examples">Ex. São Paulo, Rio de Janeiro, Curitiba, California.</span>

**Cargos/Posições** - Títulos específicos de cargos que você quer que o DevScout procure pra você. <br/> <span class="examples">Ex. Desenvolvedor Front End, Full Stack Developer, Project Manager, Tech Lead.</span>

**Nível de Experiência** - Nesse campo você deve preencher com os níveis de vaga que você está procurando.<br /> <span class="examples">Ex. Júnior, Pleno, Senior, Manager</span>

**Modalidade de Trabalho** - Nesse campo você deve informar a modalidade do trabalho que está buscando.<br /> <span class="examples">Ex. Remoto, Presencial ou Hibrido.</span>

**Porcentagem Mínima de Match** - Esse campo é um menu _dropdown_ para você selecionar quanto de match com os parâmetros que você definiu, você entende como aceitável.

**Palavras para Excluir** - Nesse campo você pode determinar palavras que serão bloqueadas caso estejam dentro do escopo da vaga - **não serão enviados e-mails de candidatura para vagas que contenham essas palavras.**<br /> <span class="examples">Ex. Manager (caso não esteja buscando cargos de liderança), .net (caso não queira vagas desse framework)</span>

**Domínios para Excluir** - Eventuais domínios que você queira ignorar durante a busca <br /> <span class="examples">Ex. gmail.com, hotmail.com, yahoo.com para focar em emails corporativos. <br /> <span class="highlight-yellow"> Campo não obrigatório. </span></span>

::: warning ⚠️ Atenção
Caso você tenha mais de um parâmetro em determinado campo, basta pressionar Enter ou vírgula para adicionar os parâmetros seguintes.
:::

## Configurações de Candidatura

<br>
<img src="/img/automatic-search-form-step-three.png" alt="Automatic Search Form - Step Three Screen" class="zoom-img" />

Aqui é onde você vai configurar como sua candidatura será feita depois que o DevScout encontrar as vagas segundo os critérios de busca.

<span class="highlight-green"> **Campos padronizados ✅** </span>

**Delay entre envio de e-mails** que é o tempo de espera entre os envios de e-mails para evitar bloqueios do serviço de e-mail

<span class="highlight-yellow"> **Campos que você precisa preencher ⚠️** </span>

**Modelo da Carta de Apresentação**
::: warning Informação importante
**Você precisa preencher o template de e-mail - caso contrário o DevScout não conseguirá realizar as buscas e candidaturas.** <br/> <br/>
Para um template mais dinâmico, existem 4 variáveis que podem ser utilizadas no seu modelo: <br />
<span class="orange-tags">{job_title}</span> - título/cargo da vaga <br />
<span class="orange-tags">{company}</span> - nome da empresa <br />
<span class="orange-tags">{sender_name}</span> - seu nome como remetente <br />
<span class="orange-tags">{contact_info}</span> - suas informações de contato <br /> <br />
O sistema detectará automaticamente o idioma da vaga e usará o template apropriado, mas nem sempre as cariáveis {job_title} e {company} estarão disponíveis, pois dependem da coleta de dados da vaga, use-as com cautela.
:::

São dois campos de texto - um em Inglês e outro em Português - que serão enviados para as vagas em que o Match foi feito pelo DevScout.

**Configuração de Idiomas para Candidaturas**

Duas checkboxes para que você possa selecionar as candidaturas de vagas por idioma - Português ou Inglês.

**Currículos**

Aqui você deve anexar os currículos em português e/ou em inglês para que quando o DevScout envie o e-mail de aplicação, seu currículo seja entregue ao recrutador.

## Iniciando as buscas e candidaturas

**E agora?**

Agora é só você clicar em Iniciar para que o DevScout comece a fazer as buscas automáticas e candidaturas para você - se quiser, pode acompanhar o andamento através dos menus Monitoramento e Candidaturas.

Parabéns, se prepare para encontrar muitas vagas e oportunidades!

</div>

<style>
.automatic-search-page .zoom-img {
    transition: transform 0.3s;
    cursor: zoom-in;
}
.automatic-search-page .zoom-img:active {
    transform: scale(1.5);
}
.automatic-search-page .orange-tags{
    color: orange;
}
.automatic-search-page .highlight-green{
    background-color: rgba(79, 192, 141, 0.25);
    padding: 2px 5px;
    border-radius: 4px;
}
.automatic-search-page .highlight-yellow{
    background-color: rgba(255, 229, 102, 0.4);
    padding: 2px 5px;
    border-radius: 4px;
}
.automatic-search-page .examples{
    font-size: 14px;
    font-style: italic;
    color:#a1a1a1;
}
.automatic-search-page .space-images{
    margin-top:25px
}

</style>
