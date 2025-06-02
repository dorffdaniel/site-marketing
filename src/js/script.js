const raiz = document.getElementById('root');

if(raiz){
const p = React.createElement('p', null, 'Transformamos ideias em estratégias digitais inovadoras para impulsionar seu negócio, conectar sua marca ao público certo e gerar resultados reais no mundo online.')

const root = ReactDOM.createRoot(raiz)
root.render(p);

}


const card = document.getElementById('card');


if(card){
const paragrafo = React.createElement('p', null, 'Oferecemos soluções completas de marketing digital, desenvolvimento web e gestão de redes sociais para ajudar sua marca a crescer no mundo online.')

const showCard = ReactDOM.createRoot(card);
showCard.render(paragrafo);

}


function cadastrarServico(){
   let doc= document.getElementById('modalCad');

   const modal = new bootstrap.Modal(doc)

   modal.show();
}