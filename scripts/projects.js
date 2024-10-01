function load_projects()
{
    let projects_list_string = "";
    PROJECTS_DATA.forEach(
        (element) => {
            projects_list_string += `
            <div class="container projects-card">
                <img class="projects-preview-pic" src="images/profiles/${element.preview}.png">
                <div>
                    <strong>${element.title}</strong> [${STATES[element.state]}]
                    <hr>
                    ${element.description}
                </div>
            </div>
            `
        }
    );

    document.getElementById("projects-list").innerHTML = projects_list_string;
}

const STATES = {
    0: "canceled",
    1: "work in process",
    2: "released",
    3: "frozen",
}

/*
    States:
        0: canceled
        1: wip
        2: released
        3: frozen
*/

const PROJECTS_DATA = [
    {
        title: "axiquie",
        description: "terraria mod",
        preview: "001",
        version: "4.0.0",
        state: 3
    },
    {
        title: "arrow",
        description: "cul game",
        preview: "016",
        version: "3.3.1",
        state: 3
    },
]