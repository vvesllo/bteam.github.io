function load_index()
{
    Array.from(document.getElementsByTagName("code")).forEach(
        code => {
            let out_code = "";
            let i=0;
            code.innerHTML.trim().split('\n').forEach(
                line => {
                    console.log(line);
                    out_code += `<span class="code-line">[${++i}] >> </span>${line}<br>`
                }
            );
            code.innerHTML = out_code;
            console.log(out_code);
        }
    );
}