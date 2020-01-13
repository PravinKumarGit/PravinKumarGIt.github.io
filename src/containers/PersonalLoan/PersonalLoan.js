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
  const loanAmount = useSelector(state => state.loanAmountResponse);

  console.log(loanAmount, Input, Select, "loanAmount");
  return (
    <div>
      Personal Loan Application <Input />
      Personal Loan Application <Select />
    </div>
  );
}
