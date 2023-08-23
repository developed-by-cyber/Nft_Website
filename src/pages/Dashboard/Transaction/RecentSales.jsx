import './RecentSales.css'
import trans from "../../../assets/DashboardImg/trans.png";
import Table from "react-bootstrap/Table";

function RecentSales() {
  return (
    <>
    <div  className="RecentSales">
      <p className="p1">Recent Sales</p>
      <Table responsive>
        <thead>
          <tr className="heading">
            <th scope="col">Transaction</th>
            <th scope="col">NFT name</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="dd">
              <img src={trans} alt="tran" />
              Mint
            </td>
            <td>RedBrowner</td>
            <td>Anomalous</td>
            <td>Sphere</td>
            <td>0.12TH</td>
            <td className="completed">Completed</td>
          </tr>
          <tr>
            <td className="dd">
              <img src={trans} alt="tran" />
              Mint
            </td>
            <td>RedBrowner</td>
            <td>Anomalous</td>
            <td>Sphere</td>
            <td>0.12TH</td>
            <td className="pending">Pending</td>
          </tr>
          <tr>
            <td className="dd">
              <img src={trans} alt="tran" />
              Mint
            </td>
            <td>RedBrowner</td>
            <td>Anomalous</td>
            <td>Sphere</td>
            <td>0.12TH</td>
            <td className="pending">Pending</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </>
  )
}

export default RecentSales