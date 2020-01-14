import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/startup/actions";
import Input from "../../components/uielements/input";
import Select from "../../components/uielements/select/select";
export default function ParsonalLoan({ ...props }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loanAmountRequest());
  }, [dispatch]);
  const {
    loanAmountResponse,
    loanAmountIsFetching,
    loanAmountError
  } = useSelector(state => state.StartUp);

  console.log(loanAmountResponse, Input, Select, "loanAmount");
  return (
    <div>
      Personal Loan Application <Input />
      Personal Loan Application{loanAmountError && loanAmountError.errMessage}
      <Select
        defaultValue={
          loanAmountResponse &&
          loanAmountResponse[0] &&
          loanAmountResponse[0].value
        }
        Title="Loan Amount"
        loading={loanAmountIsFetching}
        options={loanAmountResponse}
        onChange={item => {
          console.log(item);
        }}
      />
    </div>
  );
}
