document.addEventListener("DOMContentLoaded", () => {
    // Tab switching logic
    const programmingTab = document.getElementById("programming-tab");
    const toolsTab = document.getElementById("tools-tab");
    const programmingSkills = document.getElementById("programming-skills");
    const toolsSkills = document.getElementById("tools-skills");

    if (programmingTab && toolsTab && programmingSkills && toolsSkills) {
        programmingTab.addEventListener("click", () => {
            programmingTab.classList.add("active");
            toolsTab.classList.remove("active");
            programmingSkills.classList.add("active");
            toolsSkills.classList.remove("active");
        });

        toolsTab.addEventListener("click", () => {
            toolsTab.classList.add("active");
            programmingTab.classList.remove("active");
            toolsSkills.classList.add("active");
            programmingSkills.classList.remove("active");
        });
    }
});
