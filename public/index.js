const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const logo = document.getElementsByClassName(".logo");
const ham = document.querySelector("html");
const ACTIVE = "active";

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle(ACTIVE);
  navigation.classList.toggle(ACTIVE);
  if (
    hamburger.classList.contains(ACTIVE) &&
    navigation.classList.contains(ACTIVE)
  ) {
    ham.style.margin = 0;
    ham.style.height = "100vh";
    ham.style.overflow = "hidden";
  } else {
    ham.style.height = "auto";
    ham.style.overflow = "auto";
  }
  logo.style("display:none");
});

AOS.init();

const paymentForm = document.getElementById("paymentForm");

const first_name = document.querySelector('[name="Firstname"]');
const last_name = document.querySelector('[name="Lastname"]');
const email = document.querySelector('[name="Email Address"]');
const phone_number = document.querySelector('[name="Phone Number"]');
const amount = document.querySelector('[name="Amount"]');
const course_enrolled = document.querySelector('[name="Course Enrolled"]');
const gender = document.querySelector('[name="Gender"]');
const country = document.querySelector('[name="Country of residence"]');
const state_of_residence = document.querySelector(
  '[name="State of Residence"]'
);
const employment_Status = document.querySelector('[name="Employment Status"]');
const time_of_learning = document.querySelector('[name="Time of learning"]');
const qualification = document.querySelector('[name="qualification"]');
const how_did_you_hear = document.querySelector(
  '[name="How did you hear about us"]'
);
const who_referred_to_you = document.querySelector(
  '[name="Who referred your"]'
);
const comments = document.querySelector('[name="Comments"]');

const data = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  amount: amount.value,
  course_enrolled: "",
  gender: "",
  qualification: "",
  country: "",
  state_of_residence: "",
  employment_status: "",
  time_of_learning: "",
  how_did_you_hear: "",
  who_referred_you: "",
  comments: "",
};


first_name.addEventListener("change", (e) => {
  data.first_name = e.target.value;
});

last_name.addEventListener("change", (e) => {
  data.last_name = e.target.value;
});

email.addEventListener("change", (e) => {
  data.email = e.target.value;
});
phone_number.addEventListener("change", (e) => {
  data.phone_number = e.target.value;
});
course_enrolled.addEventListener("change", (e) => {
  data.course_enrolled = e.target.value;
});
gender.addEventListener("change", (e) => {
  data.gender = e.target.value;
});
country.addEventListener("change", (e) => {
  data.country = e.target.value;
});
state_of_residence.addEventListener("change", (e) => {
  data.state_of_residence = e.target.value;
});
employment_Status.addEventListener("change", (e) => {
  data.employment_status = e.target.value;
});
time_of_learning.addEventListener("change", (e) => {
  data.time_of_learning = e.target.value;
});
how_did_you_hear.addEventListener("change", (e) => {
  data.how_did_you_hear = e.target.value;
});
who_referred_to_you.addEventListener("change", (e) => {
  data.who_referred_you = e.target.value;
});
comments.addEventListener("change", (e) => {
  data.comments = e.target.value;
});
qualification.addEventListener("change", (e) => {
  data.qualification = e.target.value;
});

paymentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    let options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Access-Control-Allow-Origin'
      },
      body: JSON.stringify(data),
    };
    let handler = PaystackPop.setup({
      key: "pk_live_9b713d24e36a60bb38c42987a5eaa66564cd4a54", // Replace with your public key
      email: data.email,
      amount: data.amount * 100,
      ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function () {
        alert("Window closed.");
      },
      callback: function (response) {
        let message = "Payment complete! Reference: " + response.reference;
        if (message) {
          // alert(message);
          POSTUSER(options)
        }
      },
    });
    handler.openIframe();

  } catch (error) {
    console.log(error);
  }
});


async function POSTUSER(params) {
  const res = await fetch(
    "https://api.malhub.org/courses/apply",
    params
  );
}