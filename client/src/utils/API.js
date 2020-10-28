import axios from "axios";

export default {
  //gets all the contact
  getScores: function () {
    return axios.get("/api/contact");
  },
  //if user wants their highscore/scores
  // getScore: function (id) {
  //   return axios.get("api/contact/" + id);
  // },
  //user can save their score and it will save to contact page....?
  saveScore: function (scoreData) {
    return axios.post("/api/contact", scoreData);
  },
};
