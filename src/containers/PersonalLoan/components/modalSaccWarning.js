import React from "react";
import Wrapper from "./Styles/saccWarning.styles";
import Modal from "../../../components/uielements/modal";
import AlertIcon from "../../../theme/assets/alert.png";
export default function SACCWarning({ ...props }) {
  return (
    <Wrapper>
      <Modal
        visible={props.visible}
        header={
          <>
            <img src={AlertIcon} alt="alert" className="icon" />
            <span className="title">Warning</span>
          </>
        }
        closeable={false}
        size="small"
        footer={
          <div className="cancelBtn">
            <div className="button-Container">
              <button onClick={props.close} className="btn btn-yellow-outline">
                Cancel
              </button>
            </div>
            <div className="button-Container">
              <button onClick={props.continue} className="btn btn-yellow">
                Continue
              </button>
            </div>
          </div>
        }
        onClose={props.close}
      >
        <div className="modalContent">
          <h1 id="sacc-warn-h1">
            Do you really need a loan today?
            <span className="small-loan-warning-asterix">*</span>
          </h1>
          <div className="label-text-group">
            <p className="label-text">
              It can be expensive to borrow small amounts of money and borrowing
              may not solve your problems.
            </p>
            <p className="label-text">
              Check your options <u>before</u> you borrow:
            </p>
          </div>
          <ul>
            <li>
              <p className="label-text">
                For information about other options for managing bills and
                debts, ring 1800 007 007 from anywhere in Australia to talk to a
                free and independant financial counsellor.
              </p>
            </li>
            <li>
              <p className="label-text">
                Talk to your electricity, gas, phone or water provider to see if
                you can work out a payment plan.
              </p>
            </li>
            <li>
              <p className="label-text">
                If you are on government benefits, ask if you can receive an
                advance from <u>Centrelink:</u>{" "}
                <a
                  href="https://www.humanservices.gov.au/advancepayments"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.humanservices.gov.au/advancepayments
                </a>
              </p>
            </li>
          </ul>
          <div className="label-text-group">
            <p className="label-text">
              The Goverment's{" "}
              <a
                href="https://www.moneysmart.gov.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MoneySmart
              </a>
              website shows you how small amount loans work and suggests other
              options that may help you.
            </p>
            <p className="sub-text">
              <span className="small-loan-warning-asterix">*</span> This
              statement is an Australian Government requirement under the{" "}
              <span className="nccp-act">
                National Consumer Credit Protection Act 2009
              </span>
              .
            </p>
          </div>
        </div>
      </Modal>
    </Wrapper>
  );
}
