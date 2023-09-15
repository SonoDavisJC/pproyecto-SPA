export function ContacForm() {
    const $form = document.createElement('form');
    const $styles = document.getElementById('dynamic-styles'); 

    $form.classList.add('form-contact');


    // ------- Single File Components ------ //
    // ------------------------------------- //


    // Styled Components
    $styles.innerHTML = `
    .form-contact {
        margin: 2rem auto;
        padding: 0.5rem;
        max-width: 60%;
        min-width: 285px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .form-contact p {
        font-weight: bold;
    }

    .form-contact > input {
        padding: 0.5rem;
    }

    span {
        color: red;
        font-weight: 700;
    }
    `;

    // Code HTML
    $form.innerHTML = `
    <p>Formulario de Contacto : </p>
    <label for="input-text"> Nombres </label>
    <input type="text" name="nombre" id="input-text">
    <span class="error-name"></span>
    <br>
    <label for="input-textemail"> Email </label>
    <input type="email" name="email" id="input-textemail">
    <span class="error-email"></span>
    <br>
    <label for="input-textarea"> Comentario </label>
    <textarea id="input-textarea" name="comentario"> </textarea>
    <br>
    <input type="submit" value="Enviar">
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

                if($name.length === 0){
                    $error_name.innerHTML = 'Campo nombre vacio'
                }
                if($email.length === 0){
                    $error_email.innerHTML = 'Campo email vacio'
                }
                else {
                    alert('Exacto');
                    $error_name.innerHTML = '';
                    $error_email.innerHTML = '';
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