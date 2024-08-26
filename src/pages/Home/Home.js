import React, { useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function Home() {
  const [salary, setSalary] = useState(3000);
  const [credit, setCredit] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const calculate = (amount) => {
    const necessary = (amount * 0.5).toFixed(2);
    const hobbies = (amount * 0.3).toFixed(2);
    const savings = (amount * 0.2).toFixed(2);
    return { necessary, hobbies, savings };
  };

  const handleAddExpense = () => {
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleSave = () => {
    // Adicione lógica para salvar a despesa
    handleClose();
  };

  const { necessary, hobbies, savings } = calculate(salary);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="title">Controle Financeiro</h1>
        <Link to="/" className="logout-btn">
          Logout
        </Link>
      </header>
      <main>
        <div className="salary-input">
          <label>
            <span className="label-text">Salário:</span>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="salary-input-field"
            />
          </label>
          <div className="calculated-values">
            <p>
              <span className="label-text">Gastos Necessários:</span> R$
              {necessary}
            </p>
            <p>
              <span className="label-text">Hobbies:</span> R${hobbies}
            </p>
            <p>
              <span className="label-text">Economizar:</span> R${savings}
            </p>
          </div>
        </div>
        <table className="financial-table">
          <thead>
            <tr>
              <th>Receitas</th>
              <th>Janeiro</th>
              <th>Fevereiro</th>
              <th>Março</th>
              <th>Abril</th>
              <th>Maio</th>
              <th>Junho</th>
              <th>Julho</th>
              <th>Agosto</th>
              <th>Setembro</th>
              <th>Outubro</th>
              <th>Novembro</th>
              <th>Dezembro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="label-text">Salário</span>
              </td>
              {/* Adicionar valores reais aqui */}
              <td>R$3000</td>
              {/* Outras células */}
            </tr>
            <tr>
              <td>
                <span className="label-text">Despesas</span>
              </td>
              {/* Adicionar valores reais aqui */}
              <td>R$500</td>
              {/* Outras células */}
            </tr>
            <tr>
              <td>
                <span className="label-text">Investimentos</span>
              </td>
              {/* Adicionar valores reais aqui */}
              <td>R$400</td>
              {/* Outras células */}
            </tr>
            <tr>
              <td>
                <span className="label-text">Hobbies</span>
              </td>
              {/* Adicionar valores reais aqui */}
              <td>R$300</td>
              {/* Outras células */}
            </tr>
            <tr>
              <td>
                <span className="label-text">Crédito</span>
              </td>
              {/* Adicionar valores reais aqui */}
              <td>R$100</td>
              {/* Outras células */}
            </tr>
            <tr>
              <td>
                <span className="label-text">Total</span>
              </td>
              {/* Adicionar valores reais aqui */}
              <td>R$3600</td>
              {/* Outras células */}
            </tr>
          </tbody>
        </table>
        <button onClick={handleAddExpense} className="add-expense-btn">
          Adicionar Despesa
        </button>
        <div className="report">
          <h2 className="report-title">Relatório</h2>
          {/* Gere e exiba o relatório aqui */}
        </div>
      </main>

      {/* Modal para adicionar despesa */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        className="modal-custom"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Adicionar Despesa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Formulário para adicionar despesa */}
          <form>
            <div className="mb-3">
              <label htmlFor="expenseName" className="form-label">
                Nome da Despesa
              </label>
              <input type="text" className="form-control" id="expenseName" />
            </div>
            <div className="mb-3">
              <label htmlFor="expenseAmount" className="form-label">
                Valor
              </label>
              <input
                type="number"
                className="form-control"
                id="expenseAmount"
              />
            </div>
            {/* Adicione mais campos conforme necessário */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="modal-btn"
          >
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave} className="modal-btn">
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
