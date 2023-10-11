import { YOUR_SERVICE_ID, YOUR_PUBLIC_KEY, YOUR_TEMPLATE_ID } from "../global.js";

export function ContacForm() {
    const $form = document.createElement('form');
    const $styles = document.getElementById('dynamic-styles'); 

    $form.classList.add('form-contact');


    // ------- Single File Components ------ //
    // ------------------------------------- //


    // Styled Components
    $styles.innerHTML = `
    .form-contact {
        margin: 10px auto;
        padding: 0.5rem;
        max-width: 60%;
        min-width: 285px;
        display: flex;
        flex-direction: column;

        & h3 {
            margin-bottom: 15px;
            color: var( --colorBlack3)
        }

        & label {
            font-size: 16px;
            margin-bottom: 5px
        }

        & span {
            font-size: 12px;
            color: red;
        }
    }`;

    // Code HTML
    $form.innerHTML = `
    <h3>Form</h3>
    <div><label for="input-text"> Nombres :</label><span class="error-name"> </span></div>
    <input type="text" name="nombre" id="input-name">
    <br>
    <div>
    <label for="input-textemail"> Email :</label><span class="error-email"> </span></div>
    <input type="email" name="email" id="input-email">
    <br>
    <label for="input-textarea"> Comentario : </label>
    <textarea id="input-comentario" name="comentario"  rows="4" cols="50"> </textarea>
    <br>
    <input type="submit" value="Send">
    `;

    // Code JS
    function ValidationForm() {
        let $error_name = document.querySelector('.error-name');
        let $error_email = document.querySelector('.error-email');

        document.addEventListener('submit', (e) => {
            if(e.target.matches('.form-contact')){
                e.preventDefault();
                let $name = e.target.nombre.value;
                let $email = e.target.email.value;
                let $comentario = e.target.comentario.value

                if($name.length === 0){
                    $error_name.innerHTML = 'Campo nombre vacio'
                }
                if($email.length === 0){
                    $error_email.innerHTML = 'Campo email vacio'
                }
                else {

                    let templateData = {
                            nombre: $name,
                            gmail: $email,
                            comentarios: $comentario
                    };

                    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateData, YOUR_PUBLIC_KEY)
                    .then(function(response) {
                        //alert('SUCCESS!', response.status, response.text);
                        alert('Enviado!');
                        e.target.nombre.value = '';
                        e.target.email.value = '';
                        e.target.comentario.value = '';
                    
                    }, function(error) {
                        alert.log('FAILED...', error);
                    });

                }
            }
        })
    }

   

    //Funcion para que el DOM para esperar a que el DOM de este archivo cargue y esta funcion ValidationForm tenga validez. 


    setTimeout(() => {
        ValidationForm();
    }, 100);


    
    


    return $form;
}