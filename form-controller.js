
function State(){

    this.address = new Address();

    this.btnSave = null;
    this.btnClear = null;

    this.inputCep = null;
    this.inputStreet = null;
    this.inputNumber = null;
    this.inputCity = null;

    this.errorCep = null;
    this.erorNumber = null;
}

const state = new State();

export function init(){

     state.inputCep = document.forms.NewAddress.cep;
     state.inputStreet = document.forms.NewAddress.street;
     state.inputNumber = document.forms.NewAddress.number;
     state.inputCity = document.forms.NewAddress.city;
    
     state.btnSave = document.forms.NewAddress.btnSave;
     state.btnClear = document.forms.NewAddress.btnClear;

     state.errorCep = document.querySelector('[data-error="cep"]');
     state.errorNumber = document.querySelector('[data-error="number"]');

    //Evento para mensagem de erro do campo número
    state.inputNumber.addEventListener('change', handleInputNumberChange);
    //evento para o botão de limpar
    state.btnClear.addEventListener('click', handleBtnClearClick);
    //botão de salvar
    state.btnSave.addEventListener('click', handleBtnSaveClick);
    
     

}
async function handleBtnSaveClick(event){
    event.preventDefault();
    const result = await requestService.getJson('http://viacep.com.br/ws/01001000/json/');
    console.log(result);
}

function handleInputNumberChange(event){
    if(event.target.value == ""){
        setformerror("number", "Campo requirido");
    }else{
        setformerror("number", "");
    }
}
function  handleBtnClearClick(event){
    event.preventDefault();
    clearForm();

}

//função para limpar os formularios
function clearForm(){
    state.inputCep.value = "";
    state.inputNumber.value = "";
    state.inputCity.value = "";
    state.inputStreet.value = "";

    setformerror("cep", "");
    setformerror("number", "");

    state.inputCep.focus();

}
