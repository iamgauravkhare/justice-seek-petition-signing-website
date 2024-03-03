// const petitionsData = [
//   {
//     title: "End Tax Avoidance Now!",
//     img: "tax.jpg",
//     description:
//       "We, the undersigned, demand immediate action to address the pervasive issue of tax avoidance. It is unacceptable that corporations and individuals exploit legal loopholes and offshore accounts to evade their fair share of taxes, depriving governments of vital revenue needed for essential services and infrastructure. This practice exacerbates economic inequality and burdens ordinary taxpayers, undermining the principles of fairness and accountability in our society. We call upon policymakers to enact robust measures to close loopholes, strengthen tax enforcement, and hold tax evaders accountable. Together, let us ensure that everyone pays their fair share and contribute to a more equitable and just society. Join us in the fight against tax avoidance.",
//     createdBy: "Ava John",
//     createdOn: "5 January 2024",
//     totalSignatures: 225,
//     signatures: [
//       "Aiden Martinez",
//       "Charlotte Wilson",
//       "Jackson Anderson",
//       "Amelia Taylor",
//       "James Moore",
//     ],
//   },
//   {
//     title: "Address Environmental Issues Urgently!",
//     img: "environment.jpg",
//     description:
//       "We, the undersigned, demand urgent action to address environmental issues threatening our planet. Climate change, deforestation, pollution, and loss of biodiversity are jeopardizing the health of our ecosystems and the well-being of future generations. It is imperative that governments, corporations, and individuals take immediate steps to reduce carbon emissions, protect natural habitats, and promote sustainable practices. Failure to act swiftly will have catastrophic consequences for the environment and human society. We call upon leaders at all levels to prioritize environmental conservation and adopt policies that safeguard our planet for current and future generations. Let us unite in the fight to preserve our planet and create a sustainable future for all. Join us in taking action on environmental issues now.",
//     createdBy: "Lisa Thomas",
//     createdOn: "18 October 2023",
//     totalSignatures: 175,
//     signatures: [
//       "Liam Johnson",
//       "Olivia Brown",
//       "Noah Williams",
//       "Emma Jones",
//       "William Davis",
//     ],
//   },
//   {
//     title: "End Racism, Embrace Equality!",
//     img: "racism.webp",
//     description:
//       "We, the undersigned, stand united against racism in all its forms. Discrimination, prejudice, and systemic inequality continue to plague our communities, denying individuals their inherent dignity and rights. It is imperative that we confront racism head-on, dismantle oppressive structures, and promote diversity, equity, and inclusion. Every person deserves to live free from discrimination and bigotry, regardless of their race, ethnicity, or background. We call upon society to acknowledge the harms of racism, educate ourselves and others, and work towards creating a world where all individuals are treated with respect, dignity, and equality. Together, let us build a future where diversity is celebrated, and racism has no place. Join us in the fight against racism and for a more just and equitable society.",
//     createdBy: "Thomas Grey",
//     createdOn: "2 March 2024",
//     totalSignatures: 75,
//     signatures: [
//       "Eleanor Thompson",
//       "Marcus Nguyen",
//       "Sophia Patel",
//       "Gabriel Smith",
//       "Isabella Garcia",
//     ],
//   },
// ];

// let clutterOne = "";
// const petitionsCtn = document.querySelector(".petitions-ctn");
// const addSignature = (i) => {
//   const targetPetition = document.querySelector(
//     `.totalSinatures${i}`
//   ).textContent;
//   document.querySelector(`.totalSinatures${i}`).textContent =
//     parseInt(targetPetition) + 1;
// };
// petitionsData.forEach((e, i) => {
//   clutterOne += `<div class="card petition-card" style="width: 70%">
//     <img
//       src="./assets/images/${e.img}"
//       class="card-img-top"
//       alt="..."
//     />
//     <div class="card-body">
//       <h5 class="card-title">${e.title}</h5>
//       <br />
//       <p class="card-text">
//       ${e.description}
//       </p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">Created By - ${e.createdBy}
//       </li>
//       <li class="list-group-item">Created On -
//       ${e.createdOn}
//       </li>
//       <li class="list-group-item">Total Signatures - <span class="totalSinatures${i}">${e.totalSignatures}</span>
//       </li>
//     </ul>
//     <div class="accordion m-2" id="accordionExample">
//       <div class="accordion-item">
//         <h2 class="accordion-header">
//           <button
//             class="accordion-button"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapse${i}"
//             aria-expanded="true"
//             aria-controls="collapseOne"
//           >
//             See Signatures
//           </button>
//         </h2>
//         <div
//           id="collapse${i}"
//           class="accordion-collapse collapse"
//           data-bs-parent="#accordionExample"
//         >
//           <div class="accordion-body d-flex flex-column gap-2">
//           <h6>${e.signatures[0]}</h6>
//           <h6>${e.signatures[1]}</h6>
//           <h6>${e.signatures[2]}</h6>
//           <h6>${e.signatures[3]}</h6>
//           <h6>${e.signatures[4]}</h6>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="card-body">
//       <button class="btn btn-success" onclick="addSignature(${i})">Sign Petition</button>
//     </div>
//   </div>`;
// });

// petitionsCtn.innerHTML = clutterOne;

const petitionsData = [
  {
    title: "End Tax Avoidance Now!",
    img: "tax.jpg",
    description:
      "We, the undersigned, demand immediate action to address the pervasive issue of tax avoidance. It is unacceptable that corporations and individuals exploit legal loopholes and offshore accounts to evade their fair share of taxes, depriving governments of vital revenue needed for essential services and infrastructure. This practice exacerbates economic inequality and burdens ordinary taxpayers, undermining the principles of fairness and accountability in our society. We call upon policymakers to enact robust measures to close loopholes, strengthen tax enforcement, and hold tax evaders accountable. Together, let us ensure that everyone pays their fair share and contribute to a more equitable and just society. Join us in the fight against tax avoidance.",
    createdBy: "Ava John",
    createdOn: "5 January 2024",
    totalSignatures: 225,
    signatures: [
      "Aiden Martinez",
      "Charlotte Wilson",
      "Jackson Anderson",
      "Amelia Taylor",
      "James Moore",
    ],
  },
  {
    title: "Address Environmental Issues Urgently!",
    img: "environment.jpg",
    description:
      "We, the undersigned, demand urgent action to address environmental issues threatening our planet. Climate change, deforestation, pollution, and loss of biodiversity are jeopardizing the health of our ecosystems and the well-being of future generations. It is imperative that governments, corporations, and individuals take immediate steps to reduce carbon emissions, protect natural habitats, and promote sustainable practices. Failure to act swiftly will have catastrophic consequences for the environment and human society. We call upon leaders at all levels to prioritize environmental conservation and adopt policies that safeguard our planet for current and future generations. Let us unite in the fight to preserve our planet and create a sustainable future for all. Join us in taking action on environmental issues now.",
    createdBy: "Lisa Thomas",
    createdOn: "18 October 2023",
    totalSignatures: 175,
    signatures: [
      "Liam Johnson",
      "Olivia Brown",
      "Noah Williams",
      "Emma Jones",
      "William Davis",
    ],
  },
  {
    title: "End Racism, Embrace Equality!",
    img: "racism.webp",
    description:
      "We, the undersigned, stand united against racism in all its forms. Discrimination, prejudice, and systemic inequality continue to plague our communities, denying individuals their inherent dignity and rights. It is imperative that we confront racism head-on, dismantle oppressive structures, and promote diversity, equity, and inclusion. Every person deserves to live free from discrimination and bigotry, regardless of their race, ethnicity, or background. We call upon society to acknowledge the harms of racism, educate ourselves and others, and work towards creating a world where all individuals are treated with respect, dignity, and equality. Together, let us build a future where diversity is celebrated, and racism has no place. Join us in the fight against racism and for a more just and equitable society.",
    createdBy: "Thomas Grey",
    createdOn: "2 March 2024",
    totalSignatures: 75,
    signatures: [
      "Eleanor Thompson",
      "Marcus Nguyen",
      "Sophia Patel",
      "Gabriel Smith",
      "Isabella Garcia",
    ],
  },
];

const petitionPage = () => {
  $(document).ready(function () {
    let petitionsCtn = $(".petitions-ctn");

    petitionsData.forEach((e, i) => {
      let card = $("<div>").addClass("card petition-card").css("width", "70%");
      let img = $("<img>")
        .addClass("card-img-top")
        .attr("src", `./assets/images/${e.img}`)
        .attr("alt", "...");
      let cardBody = $("<div>").addClass("card-body");
      let cardTitle = $("<h5>").addClass("card-title").text(e.title);
      let cardText = $("<p>").addClass("card-text").text(e.description);
      let listGroup = $("<ul>").addClass("list-group list-group-flush");
      let createdBy = $("<li>")
        .addClass("list-group-item")
        .text(`Created By - ${e.createdBy}`);
      let createdOn = $("<li>")
        .addClass("list-group-item")
        .text(`Created On - ${e.createdOn}`);
      let totalSignatures = $("<li>")
        .addClass("list-group-item")
        .html(
          `Total Signatures - <span class="totalSignatures${i}">${e.totalSignatures}</span>`
        );
      let accordion = $("<div>")
        .addClass("accordion m-2")
        .attr("id", `accordion${i}`);
      let accordionItem = $("<div>").addClass("accordion-item");
      let accordionHeader = $("<h2>").addClass("accordion-header");
      let accordionButton = $("<button>")
        .addClass("accordion-button")
        .attr({
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": `#collapse${i}`,
          "aria-expanded": "true",
          "aria-controls": `collapse${i}`,
        })
        .text("See Signatures");
      let accordionCollapse = $("<div>")
        .addClass("accordion-collapse collapse")
        .attr({ id: `collapse${i}`, "data-bs-parent": `#accordion${i}` });
      let accordionBody = $("<div>").addClass(
        "accordion-body d-flex flex-column gap-2"
      );
      let btnSign = $("<button>")
        .addClass("btn btn-success")
        .text("Sign Petition")
        .on("click", function () {
          addSignature(i);
        });

      // Appending elements
      card.append(img, cardBody);
      cardBody.append(cardTitle, $("<br>"), cardText);
      listGroup.append(createdBy, createdOn, totalSignatures);
      accordionHeader.append(accordionButton);
      accordionBody.append(e.signatures.map((sig) => $("<h6>").text(sig)));
      accordionCollapse.append(accordionBody);
      accordionItem.append(accordionHeader, accordionCollapse);
      accordion.append(accordionItem);
      card.append(
        listGroup,
        accordion,
        $("<div>").addClass("card-body").append(btnSign)
      );

      petitionsCtn.append(card);
    });
  });
};

const addSignature = (i) => {
  let targetPetition = $(`.totalSignatures${i}`).text();
  $(`.totalSignatures${i}`).text(parseInt(targetPetition) + 1);
};
