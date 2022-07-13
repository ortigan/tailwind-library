import Vue from 'vue';
const helperMixin = {
    methods:{
        globalCopyFunc(id) {
             let x = document.getElementById(`${id}`);
             let code = x.querySelector("code");
             let text = code.innerText;
             var copyArea = document.createElement("textarea");
             copyArea.textContent = text;
             document.body.appendChild(copyArea);
             copyArea.select();
             document.execCommand("copy");
             alert("Code Snippet Copied")
             document.body.removeChild(copyArea);
        }
    }
}
Vue.mixin(
    helperMixin
)