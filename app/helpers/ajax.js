export async function ajax(props) {
    let {url, cbSucces} = props;


    await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        cbSucces(json);
    })
    .catch(err => {
        let message =  err.statusText || 'Ocurrio un Error, Lo sentimos';
        document.querySelector('.loader').style.display = 'none';
        document.getElementById("posts").innerHTML = `
        <div class="Error">
            <p>Error ${err.status}, ${message}</p>
        </div>
        `;
        console.log(err);
    });

}


