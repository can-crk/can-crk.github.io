const graphContainer = document.getElementById("graph-container");

    const options = {
      template: GitgraphJS.templateExtend("metro", {
        colors: ["#02394A", "#598ABA", "#5158BB", "#F26DF9", "#EB4B98"],
        commit: {
          message: {
            displayAuthor: false,
            displayHash: false
          }
        }
      })
    };
    const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);

    const master = gitgraph.branch("master");

    master.commit("2000 | Initial commit");

    const schulischeBildung = master.branch("Schulische Bildung");
    schulischeBildung.commit("Realschulabschluss an der Realschule Jöllenbeck");
    schulischeBildung.commit("Abitur an der Martin-Niemöller Gesamtschule");
    master.merge(schulischeBildung, "2021");

    const beruf = master.branch("Beruf");
    
    beruf.commit("Start der Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei Schüco");

    master.commit("2022");

    beruf.commit("Eintritt in die JAV")

    master.commit("2023");
    const nebenberuflichKleinunternehmer = master.branch("Can Carikcioglu Development");
    const hackerSchool = beruf.branch("Hacker School");


    hackerSchool.commit("Erster Kurs als Inspirer");


    nebenberuflichKleinunternehmer.commit("Anmeldung und erste Projekte");

    master.commit("heute");

    // beruf.commit("");

    // beruf.merge(schulischeBildung2);
    // master.merge(beruf);