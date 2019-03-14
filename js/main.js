function changeListStyle(id) {
    let techSkillList = document.getElementById(id);

    let techSkillListChilds = techSkillList.getElementsByTagName("li");
    for (let i = 0; i < techSkillListChilds.length; i++) {
        if (i % 2 === 0)
            techSkillListChilds[i].setAttribute("class", "list-style-1");
        else
            techSkillListChilds[i].setAttribute("class", "list-style-2");
    }
}

let ids = ["tech-skills-list", "soft-skills-list"];

for (let i =0; i < ids.length; i++)
    changeListStyle(ids[i]);

// let test1 = document.getElementById("test");
// test1.innerText = "My name is M. Hasnain;";
