function load_members()
{
    let members_list_string = "";
    MEMBERS_DATA.forEach(
        (element) => {
            members_list_string += `
            <div class="container members-profile">
                <img class="members-profile-pic" src="images/profiles/${element.pic}.png">
                <div>
                    <strong>${element.nick_name}</strong>
                    <hr>
                    ${element.description}
                    <br>
                    ${element.skills}
                </div>
            </div>
            `
        }
    );

    document.getElementById("members-list").innerHTML = members_list_string;
}

const MEMBERS_DATA = [
    {
        nick_name: "vvesllo",
        description: "software developer",
        skills: "JavaScript, C++",
        pic: "029",
    },
    {
        nick_name: "nefrfr",
        description: "software developer",
        skills: "Python, C++",
        pic: "011",
    }
]