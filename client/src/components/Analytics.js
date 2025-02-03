import React from "react";
import { Progress } from "antd";
const Analytics = ({ alltransaction }) => {
  const categories = [
    "salary",
    "tip",
    "food",
    "fun",
    "bills",
    "medical",
    "rent",
    "barber",
    "taxi",
    "fee",
    "tax",
  ];
  //total transaction
  const totaltransaction = alltransaction.length;
  const totalincometransaction = alltransaction.filter(
    (transaction) => transaction.type === "income"
  );
  const totalexpensetransaction = alltransaction.filter(
    (transaction) => transaction.type === "expense"
  );
  const totalincomepercent =
    (totalincometransaction.length / totaltransaction) * 100;
  const totalexpensepercent =
    (totalexpensetransaction.length / totaltransaction) * 100;

  //total turnover
  const totalturonver = alltransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalincometurnover = alltransaction
    .filter((transaction) => transaction.type == "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalexpenseturnover = alltransaction
    .filter((transaction) => transaction.type == "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalincometurnoverpercent =
    (totalincometurnover / totalturonver) * 100;
  const totalexpenseturnoverpercent =
    (totalexpenseturnover / totalturonver) * 100;

  return (
    <>
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Transaction: {totaltransaction}
            </div>
            <div className="card-body">
              <h5 className="text-success">
                Income: {totalincometransaction.length}
              </h5>
              <h5 className="text-danger">
                Expense: {totalexpensetransaction.length}
              </h5>
              <div>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalincomepercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalexpensepercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Total Turnover: {totalturonver}</div>
            <div className="card-body">
              <h5 className="text-success">
                Income Turnover: {totalincometurnover}
              </h5>
              <h5 className="text-danger">
                Expense Turnover: {totalexpenseturnover}
              </h5>
              <div>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalincometurnoverpercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalexpenseturnoverpercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h5>Categorywise Income </h5>
          {categories.map((category) => {
            const amount = alltransaction
              .filter(
                (transaction) =>
                  transaction.type === "income" &&
                  transaction.category === category
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);
            return (
              amount > 0 && (
                <div className="card">
                  <div className="card-body">
                    <h5>{category}</h5>
                    <Progress
                      percent={((amount / totalincometurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div className="col-md-4">
          <h5>Categorywise Expense </h5>
          {categories.map((category) => {
            const amount = alltransaction
              .filter(
                (transaction) =>
                  transaction.type === "expense" &&
                  transaction.category === category
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);
            return (
              amount > 0 && (
                <div className="card">
                  <div className="card-body">
                    <h5>{category}</h5>
                    <Progress
                      percent={((amount / totalexpenseturnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Analytics;
