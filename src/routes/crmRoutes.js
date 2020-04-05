import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")

    .get((req, res, next) => {
      //middleware
      console.log(`${req.originalUrl}`);
      console.log(`${req.method}`);
      next();
    }, getContacts)

    //POST endpoint
    .post(addNewContact);

  app
    .route("/contact/:contactID")

    //GET a particular contact
    .get(getContactWithID)
    //UPDATE a particular contact

    .put(updateContact)
    //DELETE a particular contact
    .delete(deleteContact);
};

export default routes;
