import React, { useState } from "react";
import ContactModal from "../contact/ContactModal";

function UserModal({ filteredUsers, openDeleteConfirmationModal }) {
  const [contact, setContact] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = (event, jobContact) => {
    event.preventDefault();
    setContact(jobContact);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContact(null);
  };

  const validateCont = (email, phone) => {
    const finl = JSON.parse(`{"email": "${email}", "phone": "${phone}"}`);
    return finl;
  };

  return (
    <div>
      {
        <ul id="all-jobs-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <form
                className="all-jobs-available"
                key={user.u_id}
                data-testid="job-list"
              >
                <div className="job-card" id={user.u_id}>
                  <h4>{user.u_title}</h4>
                  <p>
                    {user.u_firstname} {user.u_lastname}
                  </p>
                  <p>{user.u_qualification}</p>
                  <p>{user.u_location}</p>

                  <div className="contact-section">
                    {(validateCont(user.u_phone) ||
                      validateCont(user.u_email)) && (
                      <button
                        className="contact-button"
                        onClick={(e) =>
                          openContactModal(
                            e,
                            validateCont(user.u_email, user.u_phone)
                          )
                        }
                      >
                        Contact
                      </button>
                    )}
                    {openDeleteConfirmationModal && (
                      <button
                        className="deleteJob"
                        data-testid="delete-job"
                        onClick={(e) =>
                          openDeleteConfirmationModal(e, user.j_id)
                        }
                      >
                        <i className="fa-solid fa-trash"></i>{" "}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            ))
          ) : (
            <form className="empty-Jobs">No profile found</form>
          )}
        </ul>
      }
      {contact && (
        <div className={`modal-overlay ${isOpen ? "show" : "hide"}`}>
          <div className={`modal-content ${isOpen ? "show" : "hide"}`}>
            <ContactModal contact={contact} closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserModal;
