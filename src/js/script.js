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


function abrirModal(){
   let doc= document.getElementById('modalCad');

   const modal = new bootstrap.Modal(doc)

   modal.show();

}

let serviços = [];

function cadastrarServico(){
   let nome = document.getElementById('nome');
   let email = document.getElementById('email');
   let senha = document.getElementById('senha');


   serviços.push( new Servico(nome, email, senha))
   
   alerta("cadastrado com sucesso", "Cadastrado", "success");

}




function alerta(msg, titulo, icon) {
    Swal.fire({
        position: "center",
        icon: icon,
        title: titulo,
        text: msg,
        showConfirmButton: false,
        timer: 1500,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `
        },
        hideClass: {
            popup: `
              animate__animated
              animate__fadeOutUp
              animate__faster
            `
        }
    });
}