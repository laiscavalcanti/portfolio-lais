import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

const About = () => (
  <Layout className="thanks-page">
    <Seo title="About" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <div className="text-about">
        <h1>
          <Emoji symbol="✨" />
          Um pouco sobre mim
          <Emoji symbol="✨" />
        </h1>
        <br></br>
        <br></br>
        <h3
          sx={{
            color: "inputBorder",
          }}
        >
        </h3>
        <h2>
          {" "}
          <Emoji symbol="🤓" /> Curiosa
        </h2>
        <p>
          Amo experimentar e aprender mais daquilo que me fascina. Foi com esse
          ímpeto em que explorei várias áreas de conhecimento: do Design UX, ao
          desenvolvimento, passando pelo ensino, literatura e produção de
          conteúdo.
        </p>
        <h2>
          <Emoji symbol="☂️" /> Desing UX/UI
        </h2>
        <p>
          Tendo partido de um background de desenvolvimento, percebi o quão é
          importante traduzir a tecnologia fria em algo humanizado, algo que
          seja de fato útil para as pessoas. É por isso que o Design UX é tão
          importante, ela não é apenas uma metodologia, mas uma maneira de
          tornar a vida de todos um pouco melhor.
        </p>
        <h2>
          <Emoji symbol="💾" /> Programação
        </h2>
        <p>
          Sempre tive o hábito de leitura desde jovem. Tento manter um fluxo de
          leitura de livros constante alternando entre técnicos e literários.
          Esse interesse me levou a me formar no curso de Letras em 2014.
        </p>
        <h2>
          <Emoji symbol="📚" /> Livros
        </h2>
        <p>
          Como desdobramento de meu curso superior em “Análise e Desenvolvimento
          de Sistemas” tive experiências de trabalho em que pude aplicar meus
          conhecimentos em desenvolvimento web e arquitetura de informação, com
          foco em front-end e Javascript.
        </p>
        <h2>
          <Emoji symbol="🎷" /> Música
        </h2>
        <p>
          Sou obcecada por música. Apesar de não tocar nenhum instrumento, tenho
          um fascínio por descobrir e explorar músicas novas, bandas, artistas e
          criar playlists temáticas.
        </p>
        <h2>
          <Emoji symbol="🎬" /> Filmes
        </h2>
        <p>
          Assim como música e livros, assisto filmes constantemente mantendo o
          hábito de ver filmes novos e antigos com o objetivo de conhecer mais
          sobre o mundo.
        </p>
        <h2>
          <Emoji symbol="🍳" />
          Cozinheira
        </h2>
        <p>
          Cozinhar é um dos meus hobbies.A vontade de aprender a cozinhar surgiu
          num momento singular da minha vida e seguiu me acompanhando até então.
          Não vejo o ato de cozinhar somente como uma utilidade e aprendizado,
          mas como um ato de carinho para as pessoas ao meu redor.
        </p>
        <h2>
          <Emoji symbol="📈" /> Investimento e Criptomoedas
        </h2>
        <p>
          Tenho dedicado uma parcela do meu tempo para entender mais sobre o
          mundo dos investimentos e, principalmente, pelas criptomoedas que tem
          me gerado uma atração pelo seu potencial de mudar a forma como lidamos
          com dinheiro.
        </p>
      </div>
    </div>
  </Layout>
)

export default About
