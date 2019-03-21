function beautifySkillsTable(){
    $("#tech-skills-list > li:odd, #soft-skills-list > li:odd").addClass("list-style-1");
    $("#tech-skills-list > li:even, #soft-skills-list > li:even").addClass("list-style-2");

}

function setup() {
     // Chaning list style in skills table
     beautifySkillsTable();
}

// Main starts
// setup();
$(":header").hide().fadeIn(1500);