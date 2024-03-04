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

const addSignature = (i) => {
  const targetPetition = $(`.totalSinatures${i}`).text();
  $(`.totalSinatures${i}`).text(parseInt(targetPetition) + 1);
};

const petitionPage = () => {
  $(document).ready(function () {
    let clutterOne = "";
    const petitionsCtn = $(".petitions-ctn");
    petitionsData.forEach((e, i) => {
      clutterOne += `<div class="card petition-card" style="width: 70%">
        <img
          src="./assets/images/${e.img}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <br />
          <p class="card-text">
          ${e.description}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Created By - ${e.createdBy}
          </li>
          <li class="list-group-item">Created On -
          ${e.createdOn}
          </li>
          <li class="list-group-item">Total Signatures - <span class="totalSinatures${i}">${e.totalSignatures}</span>
          </li>
        </ul>
        <div class="accordion m-2" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse${i}"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                See Signatures
              </button>
            </h2>
            <div
              id="collapse${i}"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body d-flex flex-column gap-2">
              <h6>${e.signatures[0]}</h6>
              <h6>${e.signatures[1]}</h6>
              <h6>${e.signatures[2]}</h6>
              <h6>${e.signatures[3]}</h6>
              <h6>${e.signatures[4]}</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body d-flex align-content-center justify-content-between flex-column gap-4 flex-md-row flex-lg-row">
          <button class="btn btn-success sign-btn">Sign Petition</button>
          <button class="btn btn-info">Share</button>
          <div class="d-flex align-items-center justify-content-center gap-4">
          <img
            src="./assets/images/facebook-icon.png"
            alt="facebook-icon"
            class="share-icon"
          />
          <img
            src="./assets/images/instagram-icon.png"
            alt="instagram-icon"
            class="share-icon"
          />
          <img
            src="./assets/images/x-icon.png"
            alt="x-icon"
            class="share-icon"
          />
        </div>
        </div>
      </div>`;
    });

    petitionsCtn.html(clutterOne);

    // Event delegation for sign button
    petitionsCtn.on("click", ".sign-btn", function () {
      const index = $(this).closest(".petition-card").index();
      addSignature(index);
    });
  });
};

let petitionsDataDummy = [...petitionsData];

const deletePetition = (index) => {
  petitionsDataDummy.splice(index, 1);
  adminPetitionsPage();
};

const adminPetitionsPage = () => {
  let adminPetitionsCtn = $(".admin-petitions-ctn");
  let clutterTwo = "";

  $.each(petitionsDataDummy, function (i, e) {
    clutterTwo += `<div class="card petition-card" style="width: 70%">
      <img
        src="./assets/images/${e.img}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${e.title}</h5>
        <br />
        <p class="card-text">
          ${e.description}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Created By - ${e.createdBy}</li>
        <li class="list-group-item">Created On - ${e.createdOn}</li>
        <li class="list-group-item">Total Signatures - <span class="totalSignatures${i}">${e.totalSignatures}</span></li>
      </ul>
      <div class="accordion m-2" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse${i}"
                    aria-expanded="false"
                    aria-controls="collapseOne">
              See Signatures
            </button>
          </h2>
          <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body d-flex flex-column gap-2">
              <h6>${e.signatures[0]}</h6>
              <h6>${e.signatures[1]}</h6>
              <h6>${e.signatures[2]}</h6>
              <h6>${e.signatures[3]}</h6>
              <h6>${e.signatures[4]}</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body d-flex gap-4 justify-content-center align-items-center flex-column flex-md-row flex-lg-row">
        <a href="#" class="btn btn-primary me-2">Block User</a>
        <button class="btn btn-danger delete-petition-btn" data-index="${i}">Delete Petition</button>
      </div>
    </div>`;
  });

  adminPetitionsCtn.html(clutterTwo);

  // Event handler for delete petition button
  $(".delete-petition-btn").click(function () {
    let index = $(this).data("index");
    deletePetition(index);
  });
};
