// Q4: Custom Form Builder

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    renderForm(containerId) {
        const container = document.getElementById(containerId);
        let html = "<form id='dynamicForm'>";
        this.fields.forEach(f => {
            html += `<label>${f.label}</label><input type='${f.type}' id='${f.label}' /><br>`;
        });
        html += "<button type='button' onclick='getFormData()'>Submit</button></form>";
        container.innerHTML = html;
    }
}

function getFormData() {
    const inputs = document.querySelectorAll("#dynamicForm input");
    let data = {};
    inputs.forEach(input => data[input.id] = input.value);
    console.log(data);
}
