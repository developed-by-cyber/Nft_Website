import "./RecentTransaction.css";
import trans from "../../../assets/DashboardImg/trans.png";
import Table from "react-bootstrap/Table";

function RecentTransaction() {
  return (
    <>
      <div id="Transaction" className="RecentTransaction">
        <p className="p1">Recent Transactions</p>
        <Table responsive>
          <thead>
            <tr className="heading">
              <th scope="col">Transaction</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="dd">
                <img src={trans} alt="tran" />
                Mint
              </td>
              <td>0.12TH</td>
              <td>05/12/23</td>
              <td className="completed">Completed</td>
            </tr>
            <tr>
              <td className="dd">
                <img src={trans} alt="tran" />
                Mint
              </td>
              <td>0.12TH</td>
              <td>05/12/23</td>
              <td className="completed">Completed</td>
            </tr>
            <tr>
              <td className="dd">
                <img src={trans} alt="tran" />
                Mint
              </td>
              <td>0.12TH</td>
              <td>05/12/23</td>
              <td className="completed">Completed</td>
            </tr>
            <tr>
              <td className="dd">
                <img src={trans} alt="tran" />
                Mint
              </td>
              <td>0.12TH</td>
              <td>05/12/23</td>
              <td className="pending">Pending</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default RecentTransaction;
