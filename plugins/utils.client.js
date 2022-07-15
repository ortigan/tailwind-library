export default defineNuxtPlugin ((nuxtApp) => {
    return{
        provide :{
            globalCopyFunc(id) {
                let x = document.getElementById(`${id}`);
                let code = x.querySelector("code");
                let text = code.innerText;
                var copyArea = document.createElement("textarea");
                copyArea.textContent = text;
                document.body.appendChild(copyArea);
                copyArea.select();
                document.execCommand("copy");
                document.body.removeChild(copyArea);
           }
        }
    }
})